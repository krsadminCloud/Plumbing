# Event Schema (Calls, CTAs, Forms)

## Event Names
- `call_click` — user taps/clicks tel link.
- `estimate_cta_click` — user clicks primary CTA (header/footer/home).
- `form_start` — user focuses the first field or types.
- `form_submit` — form submitted; include success/fail.
- `map_click` — user interacts with map embed.
- `guide_read` — user opens FAQ accordion or scrolls guide section.

## Parameters (suggested)
- `page_path` (string) — e.g., `/contact`, `/`.
- `page_title` (string) — current page title.
- `cta_location` (string) — `header|hero|footer|contact-strip|mobile-call`.
- `service_type` (string|null) — selected service from form.
- `lead_status` (string) — `started|submitted|failed`.
- `form_error` (string|null) — validation or delivery error.
- `contact_method` (string|null) — `phone|email|sms`.
- `preferred_datetime` (string|null) — requested slot.
- `session_id` (string|null) — hashed client/session identifier if available.

## Trigger points (frontend plan)
- Tel links: add onClick to fire `call_click` with `cta_location`.
- CTAs: add onClick to fire `estimate_cta_click` with `cta_location`.
- Form: on first input → `form_start`; on submit → `form_submit` with status.
- Map: on iframe click or overlay click → `map_click`.
- Guide/FAQ: on accordion open → `guide_read`.

## Notes
- Keep PII out of analytics payloads; use service type and status only.
- Use `NEXT_PUBLIC_GA_MEASUREMENT_ID` to gate GA calls; no ID → skip events.
