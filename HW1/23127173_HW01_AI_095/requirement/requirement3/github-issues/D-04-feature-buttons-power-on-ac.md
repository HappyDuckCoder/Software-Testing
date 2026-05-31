# D-04: Feature buttons can power on the air conditioner while it is off

## Summary

When the air conditioner is off, pressing feature buttons such as `Turbo`, `Mode`, or `Speed` can still turn the unit on. The expected behavior is that only the `Power` button should power on the unit.

## Related Test Case

- Requirement 3 test case: TC-16
- Device: Casper Remote U25 Series air-conditioner remote
- Status: Open
- Severity: High

## Steps To Reproduce

1. Make sure the air conditioner is off.
2. Do not press the `Power` button.
3. Press `Turbo`.
4. Return the unit to the off state if needed.
5. Repeat with `Mode` and `Speed`.
6. Observe whether the air conditioner powers on.

## Expected Result

The air conditioner should only power on when the user presses the `Power` button. Feature buttons should not independently turn on the unit from the off state.

## Actual Result

Pressing feature buttons such as `Turbo`, `Mode`, or `Speed` can turn on the air conditioner.

## Evidence

- Local test record: `HW1/23127173/requirement/requirement3/requirement3.md`
- Video evidence: Not recorded yet for this defect.
- GitHub Issue URL: `https://github.com/HappyDuckCoder/Software-Testing/issues/4`
- GitHub Issue screenshot: `screenshot-defect/D04.png`

## Notes

The real GitHub Issue has been created. The screenshot evidence shows the GitHub username `HappyDuckCoder`.
