# Components — Networking / marketing (only when the concept includes it — plans live in `concept-domain.mdc`)

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

Plan types: **unilevel** (unlimited width, levels deep), **binary** (2 legs: left/right, pairing), **matrix** (fixed width × depth, e.g. 3×7), **generation/breakaway**, **affiliate/referral** (flat or multi-tier commissions), **hybrid**. Money and identity data → server-side authz on every node access (IDOR rules in `security.mdc`).

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **NetworkTree** | Node = avatar · name · rank badge · volume/status · child count; modes `unilevel` · `binary` · `matrix` · `generation` | Lazy-load children per node (depth 2–3 at a time), expand/collapse, search-in-tree, "go to me/upline", zoom/pan, highlight empty slots (binary), `role="tree"` + arrows | Mobile: **indented collapsible list / drill-down** (one level per screen) · Tablet: horizontal scroll tree with zoom controls · Desktop: full canvas, pan/zoom, minimap, node popover |
| **LegSummary** | Binary left vs right: volume, carry-over, members, pairing status; balance bar | Updates per period; tooltips explain formulas | Mobile: stacked two cards · Desktop: side-by-side with balance meter |
| **TeamList** | Downline as table/list: level, member, join date, rank, volume, status; filters by level/status/date; export | Pagination, sort, per-level grouping, skeleton | Mobile: cards grouped by level · Tablet: condensed table · Desktop: full table + filters |
| **ReferralLink** | Personal link/code, copy, share sheet, QR, campaign tags, stats (clicks/signups/conversions) | Copy feedback, native share on mobile, link regeneration confirm | Mobile: native share · Desktop: copy + QR modal |
| **CommissionTable** | Rows: date, source (member/order), type (direct/level/pairing/bonus), level, amount, status (pending/approved/paid/reversed) | Filters by period/type/status, totals footer, export, empty state, immutable history | Mobile: card list with amount emphasized · Desktop: full table with totals |
| **EarningsSummary** | KPI cards (today/period/lifetime, pending, paid), trend sparkline, payout schedule, wallet balance + payout action | Period switcher, currency format, skeleton, "as of" timestamp | Mobile: swipeable KPI cards · Desktop: 4-col KPI grid + chart |
| **RankBadge / Progress** | Rank icon/name, progress to next rank (requirements checklist + `Progress`) | Locked/unlocked states | Same all classes |
| **Compensation plan page** | Plan explainer: tiers, percentages, examples, calculator | Static content; calculator validated server-side | Mobile: accordion · Desktop: table + calculator |
| **Wallet & Payout request** | Balance (available/pending), ledger list, payout form (method, amount, fees), history + status | Min/max rules from `concept-domain.mdc`, confirm step, server-side validation, immutable ledger | Mobile: balance card + form sheet · Desktop: balance + form + table |
| **Genealogy search & Invite** | Find member by name/ID/rank; invite via link/QR/SMS/email | Debounced, scoped to own downline (authz) | Mobile: search overlay · Desktop: inline |
