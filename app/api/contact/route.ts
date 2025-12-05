import { NextRequest, NextResponse } from "next/server";
import { pushToHubSpot, sendViaSMTP, triggerSMSPlaceholder } from "@/lib/integrations";

export async function POST(req: NextRequest) {
  // Placeholder only. Do not expose secrets client-side.
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // TODO: Validate fields and call integrations server-side.
  const results = {
    smtp: await sendViaSMTP(body),
    hubspot: await pushToHubSpot(body),
    sms: await triggerSMSPlaceholder(body),
  };

  // Placeholder: always return 202 accepted to indicate queued/placeholder.
  return NextResponse.json({ ok: false, placeholder: true, results }, { status: 202 });
}
