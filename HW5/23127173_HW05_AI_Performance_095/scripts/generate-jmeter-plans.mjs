import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const planDirectory = path.resolve(scriptDirectory, "../performance/test-plans");
const date = "20260831";
const studentId = "23127173";
const scenarios = [
  { name: "Load", threads: 10, ramp: 20, loops: 1, thinkTime: 1500, listener: "ViewResultsFullVisualizer", listenerName: "View Results Tree" },
  { name: "Stress", threads: 30, ramp: 30, loops: 1, thinkTime: 1000, listener: "SummaryReport", listenerName: "Summary Report" },
  { name: "Spike", threads: 50, ramp: 1, loops: 1, thinkTime: 500, listener: "StatVisualizer", listenerName: "Aggregate Report" },
  { name: "Endurance", threads: 10, ramp: 30, loops: 120, thinkTime: 1600, listener: "SummaryReport", listenerName: "Summary Report (endurance)" },
];

function planXml(scenario) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.6.3">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="${studentId}_${scenario.name}_${date}" enabled="true">
      <stringProp name="TestPlan.comments">E2E: login - my-orders - cancel. Generated as a plan; execution evidence is separate.</stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp><boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
    </TestPlan>
    <hashTree>
      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="${scenario.name} virtual users" enabled="true">
        <stringProp name="ThreadGroup.on_sample_error">stopthread</stringProp>
        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true"><boolProp name="LoopController.continue_forever">false</boolProp><stringProp name="LoopController.loops">${scenario.loops}</stringProp></elementProp>
        <stringProp name="ThreadGroup.num_threads">${scenario.threads}</stringProp><stringProp name="ThreadGroup.ramp_time">${scenario.ramp}</stringProp><boolProp name="ThreadGroup.scheduler">false</boolProp>
      </ThreadGroup>
      <hashTree>
        <CSVDataSet guiclass="TestBeanGUI" testclass="CSVDataSet" testname="CSV credentials" enabled="true"><stringProp name="filename">\${__P(hw5.data.file,../data/hw5-users.local.csv)}</stringProp><stringProp name="fileEncoding">UTF-8</stringProp><stringProp name="variableNames">email,password</stringProp><boolProp name="ignoreFirstLine">true</boolProp><stringProp name="delimiter">,</stringProp><boolProp name="quotedData">false</boolProp><boolProp name="recycle">false</boolProp><boolProp name="stopThread">true</boolProp><stringProp name="shareMode">shareMode.all</stringProp></CSVDataSet>
        <hashTree/>
        <TransactionController guiclass="TransactionControllerGui" testclass="TransactionController" testname="E2E login - orders - cancel" enabled="true"><boolProp name="TransactionController.parent">true</boolProp></TransactionController>
        <hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="POST /api/login" enabled="true"><elementProp name="HTTPsampler.Arguments" elementType="Arguments"><collectionProp name="Arguments.arguments"><elementProp name="" elementType="HTTPArgument"><boolProp name="HTTPArgument.always_encode">false</boolProp><stringProp name="Argument.value"><![CDATA[{"email":"\${email}","password":"\${password}"}]]></stringProp><stringProp name="Argument.metadata">=</stringProp><boolProp name="HTTPArgument.use_equals">true</boolProp></elementProp></collectionProp></elementProp><stringProp name="HTTPSampler.domain">localhost</stringProp><stringProp name="HTTPSampler.port">3000</stringProp><stringProp name="HTTPSampler.protocol">http</stringProp><stringProp name="HTTPSampler.path">/api/login</stringProp><stringProp name="HTTPSampler.method">POST</stringProp><boolProp name="HTTPSampler.postBodyRaw">true</boolProp></HTTPSamplerProxy>
          <hashTree><HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="JSON header" enabled="true"><collectionProp name="HeaderManager.headers"><elementProp name="Content-Type" elementType="Header"><stringProp name="Header.name">Content-Type</stringProp><stringProp name="Header.value">application/json</stringProp></elementProp></collectionProp></HeaderManager><hashTree/><JSONPostProcessor guiclass="JSONPostProcessorGui" testclass="JSONPostProcessor" testname="Extract JWT" enabled="true"><stringProp name="JSONPostProcessor.referenceNames">jwt</stringProp><stringProp name="JSONPostProcessor.jsonPathExprs">$.token</stringProp><stringProp name="JSONPostProcessor.match_numbers">1</stringProp><stringProp name="JSONPostProcessor.defaultValues">NOT_FOUND</stringProp></JSONPostProcessor><hashTree/><ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Login is HTTP 200" enabled="true"><collectionProp name="Asserion.test_strings"><stringProp name="1">200</stringProp></collectionProp><stringProp name="Assertion.test_field">Assertion.response_code</stringProp><intProp name="Assertion.test_type">8</intProp></ResponseAssertion><hashTree/></hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="GET /api/orders/my-orders" enabled="true"><elementProp name="HTTPsampler.Arguments" elementType="Arguments"><collectionProp name="Arguments.arguments"/></elementProp><stringProp name="HTTPSampler.domain">localhost</stringProp><stringProp name="HTTPSampler.port">3000</stringProp><stringProp name="HTTPSampler.protocol">http</stringProp><stringProp name="HTTPSampler.path">/api/orders/my-orders</stringProp><stringProp name="HTTPSampler.method">GET</stringProp></HTTPSamplerProxy>
          <hashTree><HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="Bearer JWT" enabled="true"><collectionProp name="HeaderManager.headers"><elementProp name="Authorization" elementType="Header"><stringProp name="Header.name">Authorization</stringProp><stringProp name="Header.value">Bearer \${jwt}</stringProp></elementProp></collectionProp></HeaderManager><hashTree/><JSONPostProcessor guiclass="JSONPostProcessorGui" testclass="JSONPostProcessor" testname="Extract eligible order ID" enabled="true"><stringProp name="JSONPostProcessor.referenceNames">orderId</stringProp><stringProp name="JSONPostProcessor.jsonPathExprs">$[?(@.status != 'canceled')].id</stringProp><stringProp name="JSONPostProcessor.match_numbers">1</stringProp><stringProp name="JSONPostProcessor.defaultValues">NOT_FOUND</stringProp></JSONPostProcessor><hashTree/><ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Orders is HTTP 200" enabled="true"><collectionProp name="Asserion.test_strings"><stringProp name="1">200</stringProp></collectionProp><stringProp name="Assertion.test_field">Assertion.response_code</stringProp><intProp name="Assertion.test_type">8</intProp></ResponseAssertion><hashTree/></hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="PUT /api/orders/:id/cancel" enabled="true"><elementProp name="HTTPsampler.Arguments" elementType="Arguments"><collectionProp name="Arguments.arguments"/></elementProp><stringProp name="HTTPSampler.domain">localhost</stringProp><stringProp name="HTTPSampler.port">3000</stringProp><stringProp name="HTTPSampler.protocol">http</stringProp><stringProp name="HTTPSampler.path">/api/orders/\${orderId}/cancel</stringProp><stringProp name="HTTPSampler.method">PUT</stringProp></HTTPSamplerProxy>
          <hashTree><HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="Bearer JWT" enabled="true"><collectionProp name="HeaderManager.headers"><elementProp name="Authorization" elementType="Header"><stringProp name="Header.name">Authorization</stringProp><stringProp name="Header.value">Bearer \${jwt}</stringProp></elementProp></collectionProp></HeaderManager><hashTree/><ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Cancel is HTTP 200" enabled="true"><collectionProp name="Asserion.test_strings"><stringProp name="1">200</stringProp></collectionProp><stringProp name="Assertion.test_field">Assertion.response_code</stringProp><intProp name="Assertion.test_type">8</intProp></ResponseAssertion><hashTree/></hashTree>
        </hashTree>
        <ConstantTimer guiclass="ConstantTimerGui" testclass="ConstantTimer" testname="Think time" enabled="true"><stringProp name="ConstantTimer.delay">${scenario.thinkTime}</stringProp></ConstantTimer><hashTree/>
        <ResultCollector guiclass="${scenario.listener}" testclass="ResultCollector" testname="${scenario.listenerName}" enabled="true"><boolProp name="ResultCollector.error_logging">false</boolProp><stringProp name="filename"></stringProp></ResultCollector><hashTree/>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>`;
}

await mkdir(planDirectory, { recursive: true });
for (const scenario of scenarios) {
  await writeFile(path.join(planDirectory, `${studentId}_${scenario.name}_${date}.jmx`), planXml(scenario), "utf8");
}
console.log(`Generated ${scenarios.length} JMeter plans in ${planDirectory}`);
