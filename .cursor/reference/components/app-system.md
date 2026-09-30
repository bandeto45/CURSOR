# Components — App & system (mobile / PWA — when the Profile says app-ready)

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **Splash / Launch screen** | Logo + subtle progress; branded background | Shown only while boot data loads (< 1.5s target); no fake delay | Mobile/PWA only |
| **Onboarding screens** | 3–4 swipeable steps: illustration, headline, text, Skip/Next/Get started, dots | Skippable, shown once, resumable; permission asks happen in context, not here | Mobile: full-screen · Desktop: centered card |
| **Install prompt (PWA)** | `beforeinstallprompt` banner/sheet with benefits, Install/Not now | Dismiss remembered; iOS instruction variant | Mobile · Tablet |
| **Offline & sync state** | Offline banner, queued-actions indicator, retry, stale-data label | Detect via `online/offline` + failed requests; never lose form input | All classes |
| **Update available** | Snackbar/banner "Refresh to update" | Applies on user action; waits for idle | All |
| **Permission prompts** | Pre-permission explainer sheet (camera, location, notifications) → system prompt; denied recovery instructions | Ask at point of need; explain value; handle denied/blocked | Mobile primary |
| **Haptics & gestures** | `lib/platform/haptics` (light/medium/success/error); edge-swipe back, long-press menu | Feature-detected, off under reduced motion setting | Mobile |
