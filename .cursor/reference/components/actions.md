# Components — Actions & feedback

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Layout |
|-----------|--------------------|-------------------|--------|
| **Button** | Sizes `sm` `md` `lg`; variants primary · secondary · ghost · danger · link; text · icon-only · icon+text; full-width | loading (inline spinner, width locked), disabled, no double-submit | Mobile: full-width primary in sticky footer · Desktop: auto width, right-aligned group |
| **Alert** | Inline · banner · toast; tones success/warning/danger/info; title + body + action + dismiss | `role="status"` (polite) / `role="alert"` (errors); auto-dismiss only for success toasts (≥5s, pausable) | Mobile: top/bottom toast full-width · Desktop: corner stack (max 3) |
| **Loader** | `Spinner` (button/tiny) · `Skeleton` (content-shaped) · `TopBar` progress (route change) · `Overlay` loader (blocking, rare) | `aria-busy`, min display time to avoid flash; skeleton matches final layout | Same all classes |
| **Progress** | Linear (determinate/indeterminate) · circular · segmented; label + value | `role="progressbar"` + `aria-valuenow/min/max`; announces at milestones | Mobile: thin bar top · Desktop: inline with label |
| **Stepper progress** | Horizontal/vertical steps: done · current · upcoming · error; optional labels | Clickable only for completed steps; `aria-current="step"` | Mobile: compact "Step 2 of 5" + bar · Tablet/Desktop: full stepper (vertical in side aside on wizards) |
| **Tooltip** | Short label on hover/focus/long-press; placement auto-flip | `role="tooltip"`, 300ms delay, never holds essential info | Touch: long-press or none (visible label instead) |
| **Banner** | Persistent strip: announcement · offline · update available · cookie consent · install app; dismissible/remembered | `role="region"`/`status`; one at a time by priority | Mobile: top or above tab bar · Desktop: top of page |
| **Undo snackbar** | Toast with action ("Undo", 6–8s) after destructive/soft actions | Action executes on timeout; stacked queue | Mobile: above tab bar · Desktop: bottom-left |
| **Pull-to-refresh** | Overscroll gesture with elastic indicator → refresh → confirm | Only at scroll top; disabled in inner scrollers; reduced-motion = button | Mobile only (desktop: refresh button) |
| **Swipe actions** | Row swipe reveals actions (archive, delete, more); full-swipe commits with undo | Threshold + haptic hint; keyboard alternative (menu) | Mobile only; desktop uses row menu |
| **Countdown / Timer** | Deadline countdown, OTP resend timer, session timeout warning | `aria-live` off (announce at milestones), tabular numbers, drift-corrected | Same all classes |
| **Badge / Counter** | Dot · number (99+) on icons/tabs | Text alternative ("3 unread") | Same |
