import PlaceholderImage from "@/components/common/PlaceholderImage";

export default function ResidentialPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-2">
        <h1 className="heading-font text-3xl font-semibold">Residential Plumbing</h1>
        <p className="text-neutral-600">
          Trusted residential plumbing across Suffolk County—repairs, upgrades, and remodel support with clean workmanship.
        </p>
      </div>
      <div className="container grid gap-6 py-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="heading-font text-xl font-semibold">What we do</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Leak detection and repairs</li>
            <li>• Fixture installs (faucets, sinks, showers, toilets)</li>
            <li>• Water heater service and replacements</li>
            <li>• Drain and sewer clearing</li>
            <li>• Kitchen and bath remodel plumbing</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="heading-font text-xl font-semibold">Before / After (placeholder)</h2>
          <div className="grid grid-cols-2 gap-3">
            <PlaceholderImage
              label="Before"
              className="min-h-[110px]"
              src="/images/residential-before.jpg"
            />
            <PlaceholderImage
              label="After"
              className="min-h-[110px]"
              src="/images/residential-after.jpg"
            />
          </div>
          <p className="text-sm text-neutral-600">Gallery placeholder; will include captions and lightbox later.</p>
        </div>
      </div>
      <div className="container space-y-3 py-6">
        <h2 className="heading-font text-xl font-semibold">Related services</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {["Water quality", "Emergency calls", "Appliance hookups"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-neutral-200 bg-white p-3 text-sm font-semibold text-neutral-800"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
