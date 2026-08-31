import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const backendDirectory = path.resolve(scriptDirectory, "../../../../Eshop/backend");
const databasePath = path.join(backendDirectory, "database.sqlite");
const csvPath = path.resolve(scriptDirectory, "../performance/data/hw5-users.local.csv");
const require = createRequire(import.meta.url);
const sqlite3 = require(path.join(backendDirectory, "node_modules/sqlite3")).verbose();

const accountCount = 50;
const ordersPerAccount = 12;
const userEmailPrefix = "hw5.perf.";
const userEmailSuffix = "@eshop.local";

function run(database, statement, parameters = []) {
  return new Promise((resolve, reject) => {
    database.run(statement, parameters, function onRun(error) {
      if (error) reject(error);
      else resolve({ changes: this.changes, lastID: this.lastID });
    });
  });
}

async function seed() {
  const database = new sqlite3.Database(databasePath);

  try {
    await run(database, "PRAGMA foreign_keys = ON");
    await run(
      database,
      "DELETE FROM orders WHERE user_id IN (SELECT id FROM users WHERE email LIKE ?)",
      [`${userEmailPrefix}%${userEmailSuffix}`],
    );
    await run(database, "DELETE FROM users WHERE email LIKE ?", [`${userEmailPrefix}%${userEmailSuffix}`]);

    const csvRows = ["email,password"];
    let orderCount = 0;

    for (let number = 1; number <= accountCount; number += 1) {
      const paddedNumber = String(number).padStart(3, "0");
      const email = `${userEmailPrefix}${paddedNumber}${userEmailSuffix}`;
      const password = `Hw5Perf!${paddedNumber}`;
      const user = await run(
        database,
        "INSERT INTO users (name, email, password, role, login_attempts, locked_until) VALUES (?, ?, ?, 'user', 0, NULL)",
        [`HW5 Performance User ${paddedNumber}`, email, password],
      );

      csvRows.push(`${email},${password}`);
      for (let orderNumber = 1; orderNumber <= ordersPerAccount; orderNumber += 1) {
        const status = orderNumber % 3 === 0 ? "confirmed" : "pending";
        await run(
          database,
          "INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES (?, ?, ?, ?)",
          [user.lastID, 100000 + orderNumber * 10000, status, `HW5 test address ${paddedNumber}-${orderNumber}`],
        );
        orderCount += 1;
      }
    }

    await mkdir(path.dirname(csvPath), { recursive: true });
    await writeFile(csvPath, `${csvRows.join("\n")}\n`, "utf8");
    console.log(
      JSON.stringify(
        {
          databasePath,
          csvPath,
          accounts: accountCount,
          eligibleOrders: orderCount,
          ordersPerAccount,
        },
        null,
        2,
      ),
    );
  } finally {
    await new Promise((resolve, reject) => {
      database.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

seed().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
