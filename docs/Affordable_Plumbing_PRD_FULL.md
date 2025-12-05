# AI AGENT PROMPT — MODULAR BUILD PLAN (Affordable Plumbing Website)

> Target Folder:
C:\Users\a\Desktop\Azure Projects\Individual apps\mobile\plumbing

> Stack:
Next.js (App Router) + TailwindCSS + Optional Framer Motion

> Design System:
Black / White / Gold, modern, luxury plumbing aesthetic

> Navigation Variants:
A — Simple
B — Dropdown Detailed
C — Minimal Modern (include all 3)

---

# PHASE 0 — PROJECT BOOTSTRAP

## Prompt to AI Agent
Create a new Next.js project named "plumbing-website" using the App Router.

Output folder:
C:\Users\a\Desktop\Azure Projects\Individual apps\mobile\plumbing

Requirements:
- TypeScript enabled
- Tailwind CSS installed
- Clean starter layout
- Responsive base styles
- Folder structure:

/app
  /layout.tsx
  /page.tsx
  /residential
  /commercial
  /about
  /guide
  /contact
/components
  /nav
  /hero
  /services
  /cta
  /forms
  /testimonials
  /footer
/styles
/public

Do NOT place any application logic yet.

---

# PHASE 1 — DESIGN SYSTEM

## Prompt to AI Agent
Create a global design system.

1. Configure Tailwind:
- Primary: Black
- Secondary: White
- Accent: Gold (#D4AF37)

2. Add typography:
- Headings: Poppins
- Body: Inter
- Buttons: Montserrat

3. Create utility classes:
- btn-primary
- btn-secondary
- section-padding
- container

4. Setup default animations:
- Fade-in
- Hover grow
- Slide modal animations (Framer Motion placeholder)

---

# PHASE 2 — NAVIGATION VARIANTS

## Prompt to AI Agent
Create navigation components.

Location:
/components/nav/

Files:
NavA.tsx — simple menu
NavB.tsx — dropdown menu
NavC.tsx — minimal modern menu

Details:
- Mobile responsive
- Sticky header
- Highlight active link
- CTA button: "Get Free Estimate"
- Mobile bottom "Call Now" button

---

# PHASE 3 — HOMEPAGE UI

## Prompt to AI Agent
Build homepage layout following PRD:

Hero:
- Clean modern kitchen/bath background
- Headline:
  "Affordable Plumbing — Reliable Plumbing for Home & Business"
- Subheadline:
  "Locally operated — Serving Suffolk County for 10+ years"
- Buttons:
  Call Now
  Schedule Appointment

Sections:
- Residential / Commercial cards
- Services grid
- About snapshot
- Testimonials slider
- Guide preview
- Contact strip
- Google Map embed
- Footer

---

# PHASE 4 — SERVICE LAYOUTS

## Prompt to AI Agent
Create service pages.

Pages:
/residential
/commercial

Each page:
- Description block
- Before/After gallery
- Related services
- CTA banner

No pricing shown.

---

# PHASE 5 — ABOUT PAGE

## Prompt to AI Agent
Create About page with:

- 10+ years experience
- Locally owned
- Mission Statement block
- Stock photos
- Guarantee section
- Trust badges

---

# PHASE 6 — CONTACT + SCHEDULING (UI ONLY)

## Prompt to AI Agent
Create contact page with:

Form fields:
- Name
- Phone
- Address
- Service type
- Date/time requested
- Message

Behavior (frontend only):
Prepare placeholders for:
- SMS trigger
- Email trigger
- Calendar integration
Do NOT implement backend.

---

# PHASE 7 — FAQ / GUIDE PAGE

## Prompt to AI Agent
Create Guide page:

- Accordion FAQ
- SEO paragraphs:
  * Simple Fixes
  * When to Call a Plumber
  * Preventive Maintenance

---

# PHASE 8 — POLISH

## Prompt to AI Agent
Add micro-interactions:

- Hover animations
- Scroll fades
- Section transitions
- Mobile responsive tests

---

# PHASE 9 — FINAL REVIEW

## Prompt to AI Agent
Audit checklist:

✅ All pages exist  
✅ Navigation variants work  
✅ Responsive verified  
✅ SEO headings present  
✅ Accessibility checked  
✅ Placeholder assets ready  
✅ Text and design match PRD  

---

# CLARIFYING QUESTIONS TO ANSWER BEFORE BUILDING:

1. Which Navigation should be default (A, B, or C)?
2. Should backend integrations (SMS/email/calendar) be coded now or later?
3. Hosting target (Vercel, Netlify, AWS, Azure)?
4. Do you want fake test data inserted?
5. Should animations be heavy or subtle?
6. Should blog system be static or CMS-ready?

---

END OF AGENT DOCUMENT

---

# IMPLEMENTATION NOTES (Decisions & Constraints)
- Default navigation: Variant C (Minimal Modern) as primary; keep Variants A and B available.
- Integrations scope: Frontend placeholders only for SMS/email/calendar triggers; no backend wiring yet.
- Contact delivery: Prepare hooks/placeholders for Outlook/Gmail SMTP (no SendGrid/Zapier/Airtable).
- CRM: Optional HubSpot Free CRM integration placeholders supported.
- Analytics: GA4 tracking hooks planned (lightweight).
- Content/data: Include sample/fake data for services/testimonials/FAQ.
- Animation style: Subtle (not heavy).
- Guide/blog: Static markdown-like pages for now.
