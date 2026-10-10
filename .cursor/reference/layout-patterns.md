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
| **Landing** | **Getting-started slides.** One chosen section per step. Animated step progress (bar + `01 / n`). Swipe, side tap, and arrows. Those sections are the slides. Site `Footer` after the last step | Same slide deck as mobile (not a stretched desktop page) | Full-width sections in the **same order**, max-width container, in-page anchors. Site `Footer` under the last section |
| **Feed / gallery** | Single col / 2-col grid, infinite scroll | 2–3-col grid | 3–4-col grid/masonry, hover previews |
| **Detail / article** | Single column, sticky action bar | Reading width + optional aside | Reading column + sticky aside/TOC |
| **Checkout / confirm** | Stepped, collapsible summary, sticky pay CTA | Two-col (form + summary) | Two-col, sticky summary |

## Landing (the AI sets the sections)

The block list is not fixed. The AI chooses the sections that fit **this** concept and writes that list into the landing route in `route-layouts.mdc`. Mobile, tablet, and desktop use that same list. Do not drop a block on one class only.

Examples, not a required set: hero / getting started, about, marketing, reviews, blogs, contact. Use one only when the concept has that content. A shop may need offer and booking instead of blogs. A campus tool may need how-it-works instead of reviews.

Always:

- One primary step first (headline + one CTA)
- Site `Footer` last: links to the sections the AI chose, plus legal and social
- On mobile and tablet, each section is a slide. On desktop, each is a stacked section in that order

Slide chrome on mobile and tablet: animated progress (fills as the step changes; `prefers-reduced-motion` → instant), padded counter, next/back, hash `#n` so a step can be shared. The footer is the last step, not a bar floating over the copy.
