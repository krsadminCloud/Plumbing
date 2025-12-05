 "use client";

export default function GuidePage() {
  return (
    <section className="section-padding">
      <div className="container space-y-6">
        <div className="space-y-2">
          <h1 className="heading-font text-3xl font-semibold">Guide & FAQ</h1>
          <p className="text-neutral-600">
            Static, markdown-like guide content with FAQs and SEO copy for Affordable Plumbing.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="heading-font text-2xl font-semibold">Quick Fixes (Simple Fixes)</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Know your main shutoff valve location and test it annually.</li>
            <li>• For a slow drain, try a plunger before chemicals to protect pipes.</li>
            <li>• Reset garbage disposals using the bottom reset button; clear jams with the hex key (power off first).</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="heading-font text-2xl font-semibold">When to Call a Plumber</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Burst pipes, sewer backups, persistent leaks behind walls or ceilings.</li>
            <li>• Repeated clogs that return quickly—could be deeper line or tree-root issues.</li>
            <li>• Low water pressure across fixtures, signs of water heater failure, or gas water heater issues.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="heading-font text-2xl font-semibold">Preventive Maintenance</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Replace faucet aerators and fridge/RO filters on schedule to maintain flow and quality.</li>
            <li>• Flush water heaters annually to reduce sediment and extend lifespan.</li>
            <li>• Seasonal prep: disconnect hoses before freezes; test sump pumps before rainy seasons.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="heading-font text-2xl font-semibold">FAQ</h2>
          <details className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <summary
              className="heading-font cursor-pointer text-sm font-semibold text-neutral-900"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "guide_read", { page_path: window.location.pathname });
                }
              }}
            >
              Do you offer emergency service?
            </summary>
            <p className="mt-2 text-sm text-neutral-700">
              Yes, we support after-hours calls for urgent leaks and backups. Call us for fastest response.
            </p>
          </details>
          <details className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <summary
              className="heading-font cursor-pointer text-sm font-semibold text-neutral-900"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "guide_read", { page_path: window.location.pathname });
                }
              }}
            >
              Are you licensed and insured?
            </summary>
            <p className="mt-2 text-sm text-neutral-700">
              We are fully licensed and insured in Suffolk County and perform code-compliant work.
            </p>
          </details>
          <details className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <summary
              className="heading-font cursor-pointer text-sm font-semibold text-neutral-900"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "guide_read", { page_path: window.location.pathname });
                }
              }}
            >
              Do you give estimates before starting?
            </summary>
            <p className="mt-2 text-sm text-neutral-700">
              Yes—transparent estimates are provided before work begins so you know the scope and pricing.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
