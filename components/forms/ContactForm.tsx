"use client";

import { useState } from "react";
import { trackFormStart, trackFormSubmit } from "@/lib/ga";

const ContactForm = () => {
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleStart = () => {
    if (started) return;
    setStarted(true);
    trackFormStart("contact-form");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const hasName = Boolean(formData.get("name"));
    const hasPhone = Boolean(formData.get("phone"));

    if (!hasName || !hasPhone) {
      trackFormSubmit("contact-form", "failed");
      alert("Please add your name and phone so we can reach you.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          address: formData.get("address"),
          service: formData.get("service"),
          preferred: formData.get("preferred"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      trackFormSubmit("contact-form", "submitted");
      form.reset();
      setStarted(false);
    } catch (err) {
      console.error(err);
      setStatus("error");
      trackFormSubmit("contact-form", "failed");
    }
  };

  return (
    <section className="section-padding fade-in">
      <div className="container space-y-4">
        <h2 className="heading-font text-2xl font-semibold">Contact & Scheduling</h2>
        <p className="text-neutral-600">
          UI placeholder only. Fields will connect to SMS/email/calendar hooks, Outlook/Gmail SMTP, and optional HubSpot.
        </p>
        <form
          className="grid gap-4 rounded-2xl border border-neutral-200 p-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
          aria-label="Contact and scheduling form"
        >
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-neutral-800">Name</span>
            <input
              name="name"
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
              placeholder="Your name"
              onFocus={handleStart}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-neutral-800">Phone</span>
            <input
              name="phone"
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
              placeholder="(555) 123-4567"
              onFocus={handleStart}
            />
          </label>
          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className="text-sm font-medium text-neutral-800">Address</span>
            <input
              name="address"
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
              placeholder="Street, City, ZIP"
              onFocus={handleStart}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-neutral-800">Service Type</span>
            <select
              name="service"
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
              defaultValue=""
              onFocus={handleStart}
            >
              <option value="" disabled>
                Select service
              </option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="emergency">Emergency</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-neutral-800">Preferred Date/Time</span>
            <input
              type="datetime-local"
              name="preferred"
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
              onFocus={handleStart}
            />
          </label>
          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className="text-sm font-medium text-neutral-800">Message</span>
            <textarea
              name="message"
              className="min-h-[100px] rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none"
              placeholder="Briefly describe the issue"
              onFocus={handleStart}
            />
          </label>
          <div className="sm:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-primary text-sm" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Submit (placeholder)"}
              </button>
              <div className="text-xs text-neutral-500">
                <p>Placeholder: will send via Outlook/Gmail SMTP and optionally push to HubSpot.</p>
                {status === "sent" && <p className="text-green-600">Received (placeholder response).</p>}
                {status === "error" && <p className="text-red-600">There was an issue submitting. Try again.</p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
