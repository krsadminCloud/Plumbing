 "use client";

import Link from "next/link";
import { trackCTA, trackCall } from "@/lib/ga";

const ContactStrip = () => {
  const handleCTA = () => trackCTA("contact-strip");
  const handleCall = () => trackCall("contact-strip");

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container flex flex-col items-start gap-3 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="heading-font text-lg font-semibold">Need service now?</p>
          <p className="text-sm text-neutral-600">Fast, local response across Suffolk County.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/contact" className="btn-primary text-sm" onClick={handleCTA}>
            Schedule Appointment
          </Link>
          <a href="tel:+1" className="btn-secondary text-sm" onClick={handleCall}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
