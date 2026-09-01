# Self-critique: Postman evidence handling

## Incident

After the student stated that screenshots had been saved, the agent incorrectly repeated that chat-rendered images were unavailable instead of immediately scanning `evidence/postman-ui/` for newly added files.

## Impact

- The evidence handoff was delayed.
- The student had to repeat the instruction despite already placing five original files in the workspace.
- Two agent-captured images were temporarily treated as the available evidence set, which did not meet the student's explicit requirement to use the five supplied captures.

## Correction

On 01/09/2026 the agent located `1.png` through `5.png`, verified the Runner image, renamed all five files descriptively, removed/replaced duplicate captures, and updated the evidence inventory and AI Audit. The final set contains the student's original Postman screenshots only.

## Preventive rule

When a user says an artifact was saved, first perform a narrow, read-only directory listing of the named destination before explaining tool limitations, requesting re-upload, creating placeholders, or producing replacement artifacts.
