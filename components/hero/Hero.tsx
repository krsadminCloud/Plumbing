"use client";

import { trackCTA, trackCall } from "@/lib/ga";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const handleSchedule = () => trackCTA("hero");
  const handleCall = () => trackCall("hero");
  const heroImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB7pmgzzjg1gX3CN7bdoWWPGP0c9591sW3vGTkw5gCdLc8xBQhkB2QjhE9PwE3ZUwa9IZQU0P82u9mDRagLXoTRwMPUVwr7p3nUtnDBnCOLCgnBkopt9ltexbA0yKxA8x6GGnJEk6f-ru-chMm4Nwndd8TYEkBYT_pvl1a5KXhHbXlUK8uZ0bJ1WNAjqI60zOtR0e5CRHcPniE_zyh249QlXR7ZQb9i8MwssrGqWJXu84CIO2M7S7KflFmmX7R0SLsO2oSKK6ZZbg";

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Plumbing background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#162B4E]/85 via-[#162B4E]/60 to-[#162B4E]/40" />
      </div>
      <div className="relative z-10 container flex flex-col items-center px-4 py-14 text-center md:py-16">
        <p className="text-sm font-medium text-gray-200">Locally operated • Suffolk County, NY</p>
        <h1 className="heading-font mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Affordable, Reliable Plumbing for Home & Business
        </h1>
        <p className="mt-3 max-w-xl text-sm text-gray-100 md:text-base">
          10+ years serving homeowners and businesses with fast, professional plumbing. Fair pricing, clean
          workmanship, and responsive service.
        </p>
        <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="w-full rounded-full bg-[#D4AF37] px-6 py-3 text-center text-sm font-semibold text-primary shadow-lg transition hover:opacity-90 sm:w-auto"
            onClick={handleSchedule}
          >
            Schedule Appointment
          </Link>
          <a
            href="tel:+1"
            className="w-full rounded-full bg-white/90 px-6 py-3 text-center text-sm font-semibold text-primary shadow-sm transition hover:bg-white sm:w-auto"
            onClick={handleCall}
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
