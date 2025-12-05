# HubSpot Connection Guide (Free Tier)

Purpose: enable optional HubSpot Free CRM capture from the website.

Steps
1) Create HubSpot account (Free) and set portal ID.  
2) Create a Private App (Settings → Integrations → Private Apps):  
   - Scopes: `crm.objects.contacts.write`, `crm.objects.contacts.read`, `crm.schemas.contacts.read`, `crm.objects.deals.write` (optional).  
   - Copy the access token (treat as secret; store in env like `HUBSPOT_ACCESS_TOKEN`).  
3) Decide integration method:  
   - Option A: HubSpot Forms API endpoint (simpler; returns cookie-based tracking if hubspotutk present).  
   - Option B: CRM v3 Contacts API (more control).  
4) Map fields: name, phone, email, address, service_type, preferred_datetime, message, source_page.  
5) Client → backend pattern:  
   - Frontend collects form data and calls a server action/API route (not yet implemented).  
   - Backend sends: (a) SMTP email to office; (b) HubSpot API call to create/update contact with properties and a note.  
6) Testing:  
   - Use test submissions with unique emails.  
   - Verify contact appears in HubSpot with correct properties.  
   - Ensure rate limits respected (100 requests/10s per app).  
7) Security:  
   - Never expose the token to the client.  
   - Rotate tokens periodically; use environment variables in Azure Static Web Apps configuration.

Future enhancement
- Add Deal creation when service_type indicates larger jobs; auto-assign owner; add source = “Website”.
