# Free-Only CRM Workflow (Affordable Plumbing)

Goals: keep costs $0, route leads fast, maintain light tracking.

Stack pieces
- Forms: Next.js frontend; deliver via Outlook or Gmail SMTP.
- CRM: HubSpot Free CRM (contacts + deals).
- Analytics: GA4 events (see GA4 checklist + Event Schema).

Lead flow (recommended)
1) User submits form → frontend calls SMTP send (later backend) to send notification to office inbox (Outlook/Gmail).  
2) Optional: also POST to HubSpot Forms or CRM API to create/update contact + note.  
3) Fire GA4 `form_submit` event with status (success/fail) and source (page/CTA).  
4) Internally log to lightweight store (later) if needed for audits.

Data to capture (minimal)
- Name, phone, email (optional), address, service type, preferred date/time, freeform message, source page, user agent.

Routing tips
- Use a dedicated inbox folder/label for leads.
- Set an autoresponder from Outlook/Gmail acknowledging receipt (no PII in subject).
- If using HubSpot: set lifecycle stage = Lead, add owner if known.

Notes/Constraints
- No SendGrid/Zapier/Airtable per requirement.
- Keep all secrets in environment variables; never commit tokens.
