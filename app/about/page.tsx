export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container space-y-2">
        <h1 className="heading-font text-3xl font-semibold">About Affordable Plumbing</h1>
        <p className="text-neutral-600">
          Locally owned, licensed, and insured plumbing team serving Suffolk County for over a decade.
        </p>
      </div>
      <div className="container grid gap-6 py-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="heading-font text-xl font-semibold">Our Mission</h2>
          <p className="text-sm text-neutral-700">
            Deliver reliable, clean, and transparent plumbing service for homes and businesses—protecting your
            property and your time.
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Upfront estimates before work starts</li>
            <li>• Clean job sites and respectful crews</li>
            <li>• Code-compliant, insured workmanship</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="heading-font text-xl font-semibold">Trust badges</h2>
          <div className="grid grid-cols-2 gap-3">
            {["Licensed & Insured", "Local Suffolk County", "10+ Years Experience", "Upfront Pricing"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-200 bg-white p-3 text-sm font-semibold text-neutral-800"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
