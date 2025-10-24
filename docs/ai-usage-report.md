# AI Usage Report

## Tools used & use cases
- GPT-based coding assistant (AI) — generated example implementations and suggested code changes (greeting.js, form validation, loading state, accessibility improvements).
- Visual Studio Code — edit, test, and integrate files.
- Browser (Chrome/Edge/Firefox) — manual testing of UI, accessibility features, and smooth scrolling.
- Local dev servers (Python http.server / Live Server) — verify relative paths and browser behavior.

## Benefits & challenges
- Benefits:
  - Rapid prototyping of UI behaviors (time-based greeting, simulated loading).
  - Clear, ready-to-insert code snippets for validation and accessibility.
  - Suggestions for best practices (aria attributes, reduced DOM queries).
- Challenges:
  - Required manual review to ensure semantics, correct file paths (Windows backslashes vs forward slashes), and project-specific markup.
  - Some inline styling was suggested for quick demo; better to move to style.css for maintainability.
  - Accessibility and performance suggestions need developer judgement and testing on real assistive tech.

## Learning outcomes
- Practical experience adding a time-based greeting and integrating it unobtrusively.
- Implemented accessible client-side form validation with aria-invalid, aria-describedby, role="status", and aria-busy.
- Added an accessible artificial loading state and a confirmation pattern.
- Applied a lightweight performance improvement by caching DOM references and minimizing reflows.
- Learned to prefer CSS-based smooth scrolling for efficient in-page navigation.

## How you modified AI suggestions responsibly
- Reviewed and edited all generated code before insertion to ensure it fits the project structure and naming conventions.
- Removed unwanted functionality per user request (name-based greeting) and kept only the time-based greeting.
- Improved accessibility suggestions by adding aria attributes, focus management, and polite live regions; verified behavior manually.
- Avoided adding external dependencies and kept suggestions minimal and auditable.
- Kept sensitive data out of the repository and did not include copyrighted content.
- Noted remaining improvements (move inline styles to style.css, test with screen readers) for future work.