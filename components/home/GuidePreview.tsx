import Link from "next/link";

const GuidePreview = () => {
  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Guide & FAQ</p>
          <h2 className="heading-font text-2xl font-semibold">Plumbing tips & preventive care</h2>
          <p className="text-neutral-600 max-w-2xl">
            Learn quick fixes, when to call a pro, and how to prevent issues before they start.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="heading-font text-lg font-semibold">Simple Fixes</p>
            <p className="text-sm text-neutral-600">Shutoff valves, plunging basics, disposal resets.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="heading-font text-lg font-semibold">When to Call</p>
            <p className="text-sm text-neutral-600">Burst pipes, sewer backups, persistent leaks.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="heading-font text-lg font-semibold">Preventive Care</p>
            <p className="text-sm text-neutral-600">Filter changes, seasonal prep, drain maintenance.</p>
          </div>
        </div>
        <Link href="/guide" className="btn-secondary text-sm w-fit">
          Read the Guide
        </Link>
      </div>
    </section>
  );
};

export default GuidePreview;
