const testimonials = [
  {
    name: "Lisa M.",
    text: "They fixed our kitchen leak same day and left everything spotless. Clear pricing and great communication.",
  },
  {
    name: "James R.",
    text: "Reliable commercial partner for our cafe—fast response and compliant installs.",
  },
  {
    name: "Patricia S.",
    text: "Professional, on time, and fair. Explained options before starting. Highly recommend.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Testimonials</p>
          <h2 className="heading-font text-2xl font-semibold">Neighbors trust us</h2>
          <p className="text-neutral-600 max-w-2xl">
            Snapshot of local feedback. Full slider coming soon.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm text-neutral-700">“{t.text}”</p>
              <p className="mt-3 text-sm font-semibold text-neutral-900">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-dashed border-neutral-300 p-4 text-sm text-neutral-600">
          Slider placeholder: will include autoplay, swipe on mobile, and GA events for slide interactions.
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
