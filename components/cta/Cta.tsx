"use client";

import { trackCTA, trackCall } from "@/lib/ga";

const Cta = () => {
  const handleSchedule = () => trackCTA("cta-banner");
  const handleCall = () => trackCall("cta-banner");

  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="heading-font text-xl font-semibold">Need a plumber?</h3>
          <p className="text-neutral-600">CTA banner placeholder.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a className="btn-primary text-sm" href="/contact" onClick={handleSchedule}>
            Schedule Appointment
          </a>
          <a className="btn-secondary text-sm" href="tel:+1" onClick={handleCall}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
