# Templates (proposal: `.cursor/rules/proposal.mdc` · CI/deploy: `.cursor/rules/environments.mdc`)

| Template | Use | Notes |
|----------|-----|-------|
| `deck-native/index.html` | Proposal presentation — **Native** (plain HTML/CSS/JS, no build) | Open in a browser; print = PDF |
| `deck-react/` | Proposal presentation — **React.js** (Vite) | Edit `src/slides.js`; `npm run dev` / `build` |
| `proposal-doc/proposal.html` | Proposal document — **US Letter 8.5 × 11 in**, print-ready | Print → Save as PDF |
| `guide/GUIDE.md` | Project guide (dev + user) | Skeleton in P1, finished in P5 |
| `error-console/` | Dev error popup (UI · API · status), redaction, Copy for AI, server contract | Off by default; never in production (`error-log.mdc`) |
| `ci/ci.yml` · `ci/deploy-ftp.yml` · `ci/deploy-ssh.yml` | GitHub Actions: PR checks, and staging (`develop`) / production (`main`, approval) deploy over FTP or SSH | Used by `/deploy setup`; copy to `.github/workflows/` |

Copy a template into the project's `docs/` folder, replace every `{{placeholder}}`, and take colors/fonts only from the approved design direction. Structure trees per surface: `.cursor/rules/project-structure.mdc`.
