// Placeholder integration hooks (no backend wire-up yet)
// Outline SMTP via Outlook/Gmail and optional HubSpot contact creation.

export type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  service?: string;
  preferred?: string;
  message?: string;
};

export const sendViaSMTP = async (payload: ContactPayload) => {
  // TODO: Implement server-side SMTP send using Outlook/Gmail creds from env.
  // Example env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO.
  void payload;
  return { ok: false, reason: "SMTP not wired yet (placeholder)" };
};

export const pushToHubSpot = async (payload: ContactPayload) => {
  // TODO: Implement HubSpot Free CRM contact creation via Private App token (env: HUBSPOT_ACCESS_TOKEN).
  // Map fields to contact properties; never expose the token client-side.
  void payload;
  return { ok: false, reason: "HubSpot not wired yet (placeholder)" };
};

export const triggerSMSPlaceholder = async (payload: ContactPayload) => {
  // TODO: Add SMS trigger via provider of choice (Twilio or similar) on the server side.
  void payload;
  return { ok: false, reason: "SMS not wired yet (placeholder)" };
};
