# Layout pattern catalog

> The AI picks the best fit per route (`REC-route-n`) and writes it to `route-layouts.mdc`. Rules and flow: `.cursor/rules/layout-strategy.mdc`.

| Pattern | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Dashboard** | Stacked KPI cards, one chart at a time, bottom tabs | 2-col grid, nav rail | 3–4-col grid, sidebar + top bar, dense widgets |
| **List → Detail** | List page; detail as new page (back) | Split pane | Split pane or table + right drawer, keyboard nav |
| **Data table** | **Card list** (key fields, tap to expand), filter sheet, sticky search | **Condensed table** (priority columns), row → side drawer, filter bar | **Full table**: sticky head, column controls, filter toolbar/sidebar, bulk actions, pagination |
| **Form / wizard** | One column, one step per screen, sticky bottom CTA | Centered card, 1–2 cols, stepper on top | Centered/two-col with live summary aside |
| **Settings / profile** | Grouped list → sub-page per group | Section list left + content | Left nav + content pane |
| **Auth** | Full-screen form, big targets | Centered card | Split screen (form + brand) or centered card |
| **Landing** | Single column, sticky CTA | 2-col sections | Full-width sections, max-width container |
| **Feed / gallery** | Single col / 2-col grid, infinite scroll | 2–3-col grid | 3–4-col grid/masonry, hover previews |
| **Detail / article** | Single column, sticky action bar | Reading width + optional aside | Reading column + sticky aside/TOC |
| **Checkout / confirm** | Stepped, collapsible summary, sticky pay CTA | Two-col (form + summary) | Two-col, sticky summary |
