"use client";

import { useEffect, useRef, useState } from "react";
import { trackCTA, trackTestimonialSlide } from "@/lib/ga";

const slides = [
  {
    name: "Lisa M.",
    role: "Homeowner",
    text: "They fixed our kitchen leak same day and left everything spotless. Clear pricing and great communication.",
  },
  {
    name: "James R.",
    role: "Cafe Owner",
    text: "Reliable commercial partner for our cafe—fast response and compliant installs.",
  },
  {
    name: "Patricia S.",
    role: "Homeowner",
    text: "Professional, on time, and fair. Explained options before starting. Highly recommend.",
  },
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    const next = (index + 1) % slides.length;
    setIndex(next);
    trackTestimonialSlide("next", next);
    setDirection("next");
  };
  const handlePrev = () => {
    const prev = (index - 1 + slides.length) % slides.length;
    setIndex(prev);
    trackTestimonialSlide("prev", prev);
    setDirection("prev");
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % slides.length;
        trackTestimonialSlide("next", next);
        return next;
      });
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const threshold = 40;
    if (diff > threshold) {
      handlePrev();
    } else if (diff < -threshold) {
      handleNext();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const current = slides[index];

  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Testimonials</p>
          <h2 className="heading-font text-2xl font-semibold">What locals say</h2>
        </div>
        <div
          className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`space-y-3 transition duration-300 ${
              direction === "next" ? "animate-[slide-left_0.3s_ease]" : "animate-[slide-right_0.3s_ease]"
            }`}
          >
            <p className="text-sm text-neutral-700">&ldquo;{current.text}&rdquo;</p>
            <p className="text-sm font-semibold text-neutral-900">
              {current.name} - <span className="text-neutral-500">{current.role}</span>
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === index ? "bg-neutral-900" : "bg-neutral-300"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="rounded-full border border-neutral-200 px-3 py-1 text-sm font-semibold text-neutral-800"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                className="rounded-full border border-neutral-200 px-3 py-1 text-sm font-semibold text-neutral-800"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Slider is lightweight; can add swipe/autoplay + GA events later.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-primary text-sm" href="/contact" onClick={() => trackCTA("testimonials")}>
            Book a visit
          </a>
          <a className="btn-secondary text-sm" href="tel:+1" onClick={() => trackCTA("testimonials-call")}>
            Call now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
