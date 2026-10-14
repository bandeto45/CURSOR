# Component implementation

> The behavior every shared component follows once it is finished. Anatomy tables: the group files in this folder. Spec header and `className` contract: `ui-components.mdc`. This file is the implementation. Copy is the product's own. Do not reuse another product's labels, names, or sample rows.

## Shared chrome

- One file, one component, under `components/ui/<group>/`. Variants are props.
- Root carries `data-component="<Name>"`.
- `className` merges last through `cn()`.
- Interactive controls: `min-h-11`, `rounded-lg`, `focus-visible:outline` 2px offset using `outline-ring`. Icon-only hits are `h-11 w-11`.
- Pressables use `motion-press`. Reduced motion turns motion off.
- Disabled and loading use `opacity-50` and `disabled`. Loading also sets `aria-busy`.
- Color, radius, and shadow come from tokens (`bg-card`, `bg-action`, `text-action-label`, `border-border`, `text-foreground`, `text-muted-foreground`, `text-destructive`, `bg-primary`). No raw hex.
- Fields use `text-base` so mobile browsers do not zoom on focus.
- Shell bars are `fixed`, not `sticky`. The shell reserves `--header-height` (and the tab-bar height) so content is not hidden under them. `z-20` for bars, `z-40` for overlays.

## Component page (`/_components`)

Dev only. Excluded from production builds and SEO.

1. **Finished for the routes** comes first. Each finished component is a pair: light surface and dark surface, stacked under the desktop breakpoint and side by side from desktop. The heading is the file name. A line under it is the **route name** the layouts use when it differs.
2. **Remaining** components stay in a second grid, still light and dark, until they are finished and move up.
3. A component is done when its finished entry shows every variant and state the routes use, on both surfaces.

Route name → file (use these names in `route-layouts.mdc`; implement the file):

| Route name | File |
|---|---|
| Button | `Button` |
| Badge | `Badge` |
| InlineNotice | `Alert` |
| Stepper | `StepperProgress` |
| TextField | `Input` |
| MapPanel | `LocationPickerMap` |
| Dialog | `Modal` |
| Sheet | `BottomSheet` |
| BottomNav | `TabBar` |
| Carousel | `Slides` |

## Overlays

`useDialog(open, onClose)`: focus the dialog, trap Tab, Esc closes, restore the previous focus on close.

`useOverlayMotion(open, ms)`: keep the node mounted for the exit. Return `{ present, active }`. Set `data-open` from `active`. Default exit is about 280–320ms. Two animation frames before `active` becomes true, so the enter transition runs.

Scrim is a button (`aria-label` “Close …”) covering the viewport at `bg-primary/40`, class `overlay-scrim`.

| Component | Placement | Chrome |
|---|---|---|
| **Modal** | Mobile: docked to the bottom edge. Tablet and desktop: centered, `max-w-md` | `role="dialog"` `aria-modal` `aria-labelledby`. `rounded-2xl`, card surface, `overlay-center`. Closed: screen-reader text only, no empty box |
| **Bottom sheet** | Anchored to the bottom, `max-h-[80vh]`, `rounded-t-2xl`, class `overlay-sheet` | Grabber (decorative), title, body, close. Same focus trap as Modal |
| **Navbar menu** | Drops under the bar, `overlay-pop` | `aria-expanded` + `aria-controls`. Closes when a link is chosen |

## Finished behaviors

**Button.** Variants `primary` `secondary` `ghost` `danger`. `type="button"` unless the caller sets `submit`. Loading disables the button, sets `aria-busy`, and replaces the label with “Working…”.

**Input.** The label wraps the field. Error sets `aria-invalid` and `aria-describedby`. The message is `role="alert"`.

**Select, Switch, Segmented control.** Same field chrome as Input. Segmented control is a radio group, full width on mobile. Switch is `role="switch"`.

**Filter bar.** Search field, then a wrap of status chips. The active chip is `aria-pressed` and uses the action color. Controlled when `onQuery` / `onStatus` are passed; otherwise it keeps its own state.

**Calendar picker.** Never a native date input. Opens on the year grid, then month, then day. Modes: single, range, multiple. Year pages run from 1900 through 2099. Date math lives in `CalendarPicker.logic` and is unit-tested without the DOM. Opening the panel resets the page before paint (`useLayoutEffect`) so the previous month does not flash. Esc and a click outside close it. A value that is already set opens on the day view.

**Stepper.** Always prints “Step n of N · current label”. Horizontal also draws a `progressbar`. Markers: done (filled), current (action border), upcoming (muted). Only a done step is a button, and only when `onStep` is passed. Horizontal row scrolls. Vertical puts the connector under the marker. `aria-current="step"` on the current item.

**Card.** `outlined` (border), `elevated` (border + shadow), `interactive` (anchor, press motion, slight lift on hover). Title row, body, optional footer.

**Data table.** Below 768: one card per row, “Header. value” lines. From tablet: a real `<table>`, sticky header, caption for screen readers only. Empty copy is one sentence, not a blank box.

**Timeline.** Ordered list. Each item: title and time. Current item marked.

**Accordion.** One panel open. Header is a button with the expand icon. Panel content is the answer, not a second page.

**Tabs.** In-page tab list. Arrow keys move. The selected panel is the only one shown.

**Tab bar.** Fixed to the bottom, safe-area padding, icon above the label, `aria-current="page"`. At most five items. The active item uses the primary color.

**Navbar.** Fixed. Mobile: back, truncated title, menu button that opens the link panel. Tablet: logo, search, condensed links. Desktop: logo, links, search, sign-in. `heroTransparent` (only when the route says so) stays clear until the page scrolls past about one header, then turns solid.

**Footer.** Last region. Links to the sections the route chose, then legal and social. On a slide landing it is the last slide, not a bar over the copy.

**Slides.** Variants: `scroll`, `autoplay`, `progress`, `parallax`, `gallery`, `hero`. Effects: `fade`, `slide`, `rise`, `zoom`, `wipe`. Controls (previous, next, progress, dots, play) each default on and can be turned off. Reduced motion jumps with no animation. Dots are a named group.

**Chart.** A figure with a caption, a visual series, and a screen-reader list of the same points. The date range that filters the page filters this series too.

**Code block.** Preformatted text, horizontal scroll inside the block, copy control with a focus ring. Not a second editor.

**File input.** Label, native file control styled as the field chrome, chosen file name, error slot. No second upload widget.

**Location picker.** Address field plus a map panel. Permission denied, geocode error, and a keyboard address fallback are states, not alerts dumped on the page.

**Page transition.** The moving layer is the full page, edge to edge, not the inner content or a context panel. Forward and back are different directions. Both pages stay mounted for the transition; the leaving page is `absolute inset-0` and the entering page fills the same viewport. Each page root has an opaque background (`bg-background`, or the background that route names) so nothing shows through. A shared navbar or tab bar stays fixed above the pages and does not slide. Reduced motion is instant.
