# D-01: iSAVE does not save or update the latest configuration

## Summary

The iSAVE button does not save or restore the latest user-selected configuration. It appears to keep the first saved state only.

## Related Test Case

- Requirement 3 test case: TC-08
- Device: Casper Remote U25 Series air-conditioner remote
- Status: Open
- Severity: Medium

## Steps To Reproduce

1. Turn on the air conditioner in Cool mode.
2. Set a configuration, for example temperature X and fan speed Y.
3. Press `iSAVE`.
4. Change the configuration to a different temperature/fan speed.
5. Press `iSAVE` again.
6. Observe which configuration is saved or restored.

## Expected Result

The remote/air conditioner should save or restore the configuration selected by the user according to the intended iSAVE behavior.

## Actual Result

iSAVE only keeps the first saved state. Pressing iSAVE later does not save the latest configuration.

## Evidence

- Local test record: `HW1/23127173/requirement/requirement3/requirement3.md`
- Video evidence: Not recorded yet for this defect.
- GitHub Issue URL: `https://github.com/HappyDuckCoder/Software-Testing/issues/1`
- GitHub Issue screenshot: `screenshot-defect/D01.png`

## Notes

The real GitHub Issue has been created. The screenshot evidence shows the GitHub username `HappyDuckCoder`.
