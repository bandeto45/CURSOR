# Components — Inputs & selection (base controls: `forms.mdc`)

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **Forms** | `Form` + `FormField` (label, control, help, error) + `FormActions` | Validation per `validation.mdc`; dirty guard; submit loading | Mobile: one column, sticky actions · Tablet: 1–2 cols · Desktop: 2 cols + aside |
| **Calendar picker UI** | Input + popover month grid; single date · range · multi; min/max, disabled dates, today, week start; presets (Today, Last 7 days) | Grid `role="grid"`; arrows move day, PgUp/PgDn month, Home/End week; typed entry parsed; locale formats | Mobile: full-screen/bottom-sheet calendar · Desktop: popover (range shows 2 months) |
| **Time picker UI** | Input + list/wheel; 12h/24h by locale; minute step (5/15/30); range from–to | Arrow keys change segment; typed entry; validates ordering | Mobile: wheel or scroll list in sheet · Desktop: dropdown list or segmented input |
| **Date-time** | Calendar + time in one popover/sheet | Timezone shown when relevant | as above |
| **Search** | Input + icon + clear; scopes; recent searches; results page/live panel | Debounced (250–300ms), min chars, Enter submits, `role="search"` | Mobile: expands full-width in header/overlay · Desktop: inline in navbar with `/` shortcut |
| **Autocomplete** | `combobox` + listbox; async source; highlight match; empty + loading + error rows; free-text or must-select | `role="combobox"`, `aria-activedescendant`, arrows/Enter/Esc; debounced; cancels stale requests | Mobile: opens full-screen search sheet · Desktop: anchored listbox (max 8 rows, scroll) |
| **Dropdown selection** | Custom select: single/multi, search-in-list, groups, clear; chips for multi | `role="listbox"`; typeahead; matches input height | Mobile: bottom sheet list · Desktop: anchored menu |
| **Selection page** | Full page/sheet to choose one option (long lists, countries, categories): search on top, grouped rows, check on selected, sticky "Done" | Returns to caller with value; back keeps previous | Mobile: full page · Tablet/Desktop: modal or side panel |
| **Checkbox page** | Same as selection page but multi-select; "Select all", count in header, sticky Apply/Clear | Indeterminate state for groups | as above |
| **Selection list** | Inline list, single choice (radio-like rows: title + description + trailing check) | `role="radiogroup"`; arrows move & select | Mobile: full-width rows · Desktop: bordered card list |
| **Checkbox list** | Inline list, multi choice (rows with checkbox; optional select-all) | `role="group"`; Space toggles; count summary | as above |
| **Stepper (numeric)** | − / value / + with min/max/step (`forms.mdc`) | Hold to repeat; clamps | Same all classes |
| **Upload / Camera** | see Media | — | — |
| **Switch / Toggle** | Label + track/thumb; on/off with text | `role="switch"`, Space; immediate-effect vs form-submit variants | Row trailing on mobile · inline on desktop |
| **Segmented control** | 2–4 mutually exclusive options (view toggle, period) | Radio-group semantics; arrows | Full-width mobile · auto desktop |
| **OTP / PIN input** | N boxes, auto-advance, paste, backspace, masked option, resend timer | `autocomplete="one-time-code"`, numeric keypad, error shake (reduced-motion safe) | Mobile: large boxes · Desktop: compact |
| **Tag / Chip input** | Type + Enter/comma to add chips, remove, suggestions, max count | Backspace removes last, duplicate guard, validation | Same |
| **Phone / Country input** | Country code select + formatted number; validation by country | Search in country list, default from locale | Mobile: sheet list · Desktop: dropdown |
| **Currency / Number input** | Locale formatting, min/max/step, unit prefix/suffix; `inputmode=decimal` | Formats on blur, raw value on focus | Same |
| **Password strength** | Meter + requirement checklist + show/hide | Live, non-blocking; policy from `validation.mdc` | Same |
| **Color picker** | Swatches + custom (hex/HSL) + opacity | Contrast warning vs background; keyboard adjustable | Mobile: sheet · Desktop: popover |
| **Rating input / display** | Stars/emoji, half steps, read-only, count | `role="radiogroup"`, arrows; text value | Same |
| **Rich text editor** | Toolbar (bold/italic/list/link/heading), paste cleanup, mentions optional | Sanitized output; mobile toolbar above keyboard | Mobile: compact scrolling toolbar · Desktop: full toolbar |
| **Signature pad** | Draw area, clear, undo, export PNG/SVG | Touch/pen/mouse, prevents page scroll while drawing, required/empty validation | Mobile: full-width landscape hint · Desktop: fixed canvas |
| **Location picker & Map** | Address autocomplete + draggable pin + "use my location"; static/interactive map | Permission states, geocode errors, keyboard address fallback | Mobile: full-screen map sheet · Desktop: inline map + list |
| **Filter bar / sheet & Sort** | Chips for active filters, "More filters" panel, sort select, clear all, result count | URL-synced, applied count badge, saved views optional | Mobile: bottom-sheet filters (Apply/Reset) · Tablet: top bar + popover · Desktop: side panel or top toolbar |
| **Payment inputs** | Card number/expiry/CVC (provider-hosted fields), wallet buttons, billing address | Never store card data; inline validation; `autocomplete` tokens | Mobile: one column, wallet first · Desktop: two-column with summary |
