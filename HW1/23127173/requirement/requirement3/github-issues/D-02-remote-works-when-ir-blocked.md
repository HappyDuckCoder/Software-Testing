# D-02: Remote still controls the air conditioner when the IR emitter is blocked

## Summary

The air conditioner still responds to remote commands even when the remote's infrared emitter is physically covered during the test.

## Related Test Case

- Requirement 3 test case: TC-13
- Device: Casper Remote U25 Series air-conditioner remote
- Status: Open
- Severity: Low

## Steps To Reproduce

1. Turn on the air conditioner.
2. Cover the IR emitter at the top of the remote with a hand or paper.
3. Press `Mode` or `Speed`.
4. Observe whether the air conditioner changes state.
5. Remove the cover and press the command again.

## Expected Result

When the IR emitter is blocked, the air conditioner should not receive the command. After the cover is removed, commands should be received normally.

## Actual Result

Even when the IR emitter is covered, the air conditioner can still be controlled normally.

## Evidence

- Local test record: `HW1/23127173/requirement/requirement3/requirement3.md`
- Video evidence: Not recorded yet for this defect.
- GitHub Issue URL: `https://github.com/HappyDuckCoder/Software-Testing/issues/2`
- GitHub Issue screenshot: `screenshot-defect/D02.png`

## Notes

The real GitHub Issue has been created. The screenshot evidence shows the GitHub username `HappyDuckCoder`.
