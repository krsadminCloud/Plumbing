import Link from "next/link";

const ResidentialCommercial = () => {
  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Tailored for every property</p>
          <h2 className="heading-font text-2xl font-semibold">Residential & Commercial</h2>
          <p className="text-neutral-600 max-w-2xl">
            Trusted by homeowners and business owners across Suffolk County for clean workmanship and responsive service.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/residential"
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-transparent to-white opacity-80" />
            <div className="relative space-y-2">
              <p className="heading-font text-xl font-semibold">Residential</p>
              <p className="text-sm text-neutral-600">
                Leak repairs, fixture installs, water heaters, and remodel support for kitchens and baths.
              </p>
              <span className="text-sm font-semibold text-neutral-800">Explore →</span>
            </div>
          </Link>
          <Link
            href="/commercial"
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-transparent to-white opacity-80" />
            <div className="relative space-y-2">
              <p className="heading-font text-xl font-semibold">Commercial</p>
              <p className="text-sm text-neutral-600">
                Restaurants, offices, retail—code-compliant installs, maintenance, and emergency response.
              </p>
              <span className="text-sm font-semibold text-neutral-800">Explore →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCommercial;
