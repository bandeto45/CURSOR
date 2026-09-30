# Components — Functional components & hooks (`lib/hooks`, `lib/`)

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Name | Job |
|------|-----|
| `useViewClass()` | Returns `mobile \| tablet \| desktop` from breakpoints (`layout-strategy.mdc`); SSR-safe |
| `useDisclosure()` | open/close/toggle state for modal, popover, drawer, menu |
| `useClickOutside()` / `useFocusTrap()` / `useEscape()` | Overlay behavior |
| `useDebounce()` / `useThrottle()` | Search, autocomplete, resize |
| `useInfiniteScroll()` | Sentinel + fetch-next + dedupe + error/retry |
| `usePagination()` | Page/size/total, URL-synced |
| `useToast()` | Queue + dismiss for `Alert` toasts |
| `useForm()` / `validators` | Field state, errors mapped from API (`validation.mdc`) |
| `useLocalPref()` | Persist theme/filters/last view (try/catch storage) |
| `cn()` | `twMerge(clsx(...))` — later classes win (§1b); plus `formatDate/Number/Currency` locale helpers |
| `PageTransition` · `Presence` · `useNavDirection()` · `useReducedMotion()` · `useSwipeBack()` · `usePullToRefresh()` | Transition system — `transitions.mdc` |
| `useOnline()` · `useMediaQuery()` · `useScrollLock()` · `useCopy()` · `useShare()` | Network state, breakpoints, body-scroll lock, clipboard, native share |
