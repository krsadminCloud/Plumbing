import PlaceholderImage from "@/components/common/PlaceholderImage";

const AboutSnapshot = () => {
  const reasons = [
    { title: "Local & Reliable", body: "Suffolk County-based, fast response." },
    { title: "Licensed & Insured", body: "Work done to code, safely." },
    { title: "Clean Work", body: "Protective prep and tidy cleanup." },
    { title: "Upfront Pricing", body: "No surprises — clear estimates." },
  ];

  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-500">About</p>
          <h2 className="heading-font text-2xl font-semibold">10+ Years Serving Suffolk County</h2>
          <p className="text-neutral-600">
            Locally owned, licensed, and insured. We focus on clear communication, punctual arrivals, and
            clean job sites—every time.
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>• Transparent estimates before work begins</li>
            <li>• Guaranteed workmanship on repairs and installs</li>
            <li>• Respect for your home or business—clean and careful</li>
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
          <p className="heading-font text-lg font-semibold">Why choose us</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
                <p className="text-sm font-semibold text-neutral-800">{item.title}</p>
                <p className="text-sm text-neutral-600">{item.body}</p>
              </div>
            ))}
          </div>
          <PlaceholderImage
            label="Team / trust badges"
            className="min-h-[140px]"
            src="/images/about.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
