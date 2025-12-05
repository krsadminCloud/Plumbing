# GA4 Setup Checklist (Affordable Plumbing)

1) Create property  
- In GA: Admin → Create Property → “Affordable Plumbing – Website” → Time zone: Eastern → Currency: USD.
- Create Web Data Stream with domain `AffordablePlumbing.com`; note Measurement ID (G-XXXXXXX).

2) Install base tag in Next.js  
- Add GA4 gtag snippet in `app/layout.tsx` via `next/script` (after we finalize IDs): load gtag.js with Measurement ID and init `gtag('config', 'G-XXXXXXX')` with `send_page_view: false` if we handle pageviews manually.
- Track route changes: hook into `next/navigation` events to send `page_view` on client navigation.

3) Consent and privacy  
- Add simple consent banner if needed; respect `ad_storage`/`analytics_storage` defaults; allow opt-out via localStorage flag.

4) Events to capture (aligns with Event Schema doc)  
- `page_view` (automatic or manual)  
- `call_click` (tel link taps)  
- `estimate_cta_click` (header/footer/home CTA)  
- `form_start` and `form_submit` (contact/scheduling form)  
- `map_click` (Google Map interaction if embedded)  
- `guide_read` (if user opens FAQ accordion or scrolls key sections)

5) Debug and verify  
- Use GA4 DebugView via `gtag('set', 'debug_mode', true)` in dev.  
- Validate events with Chrome GA Debugger and Network tab.

6) Publish  
- Ensure Measurement ID is injected via env (e.g., `NEXT_PUBLIC_GA_MEASUREMENT_ID`) and not hardcoded.  
- Add env to Azure Static Web Apps configuration before deploy.
