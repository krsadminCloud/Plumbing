"use client";

import Image from "next/image";
import { trackCall, trackCTA } from "@/lib/ga";

const services = [
  {
    title: "Residential",
    description: "Leaks, clogs, fixtures.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzcMrbH6MjyDnaKTx0gFWMK3ifBSl32KXZBICfjXDOIl4u7d0qIpNcJ08r4tEOy5FY5-YaJloL0qNE-wNDgEBaOId4SyTIg2EeLYU4sJmIfpl1pij5ffRk8xbHfmr34wO_B8S20mF7-t-WB00je7laQzGoJ_FVZsyH6JLJd4aMGvDcKaQ8cWhkVkaHrUD3LyGSfnR14xW7QN9vyjeOT17sbsm0O7TGewXb5tT72K6lps05dCpPPkpXzKuFaS4NoHP0YvbVT4BYnw",
    alt: "Residential plumbing work",
  },
  {
    title: "Commercial",
    description: "Restaurants, offices.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfxSGVn4ycktWNrz8y1WF5OzlnwTjVnXX5chtu4nOuk5DT6gq6nCkfsevHQGFgy3mw-WH-bl9qZlH1J3vl93PXtCRMyRORq7_SNcMbktpLe-dpv-Z5ZfMYUDmUqMwIYHto-ArMh3jYji3x5ZaEOxZdeL4PIKC6TvL42oDehw7T5vx-1XWksu3b95jerJAyrwrlwF2Gpe9TW1Mr70I0NASA8lgypKzgfm6qgu-CGIBMYskYmMm4z7wPt_X_lNOt__T8V9IZMHozPQ",
    alt: "Commercial plumbing kitchen",
  },
  {
    title: "Emergency",
    description: "After-hours support.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtA6xULyzISuZIczuu7D0LDcYEWphdBGE8bA0dhpoiUabrGtiAZuTfuZlD-O1ei4JEWYURKGlQPBamhQJ-SPv_SY0FHyJA4nzrPOVLuDb7a4TtdgGFKb63RAKs7TgD-YAaQDCL5UaoQ21PrOUCLP74ewbG4YxGO5zrtHv_elB0bJjhMBx8HLkcYSt0iDwtUjnC0L6luDuWM4PZU23Z1BYNrwPxNYyZvSNb1uQe5yPNpsGaFUVMnUcdtsTKEHSYbzzWEIhXQQAO2w",
    alt: "Emergency plumbing vehicle",
  },
];

const ServiceCards = () => {
  return (
    <section className="p-4">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Fast Response</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-lg shadow-sm"
            >
              <Image
                src={service.imageUrl}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
              <div className="relative z-10 p-3">
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm">
            <span className="text-3xl text-primary">🛡️</span>
            <h3 className="mt-2 text-base font-semibold text-primary">Licensed & Insured</h3>
            <p className="text-sm text-neutral-500">Trusted local team.</p>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg">
          <div className="relative h-48">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2olmj1BBWy2XVA2iz84poXvSxDy_y0WgzZHKID3e7qYnQi1P0puViC0xtR0zRiPg7AXFGVKEfVZCuOiHnvQkfRlABM_lB-ajge_CWHsrMIHb_IS5W9q_ujWqqAwcCtY5s0NUnhOAL7_oTKMvA6yuOjbp1TIE9iy5IsP3_5-tK5aTRLYMBkk69QncV7l_jSgXW3_yxRJuAEOOMFcV04mBGkOFqEOJhrBQqXxudZZJMX7-t8zdIiGrcQkm8oUax--gmvWlrr5_brA"
              alt="Plumber at water heater"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="w-full rounded-full bg-[#D4AF37] px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm transition hover:opacity-90 sm:w-auto"
            onClick={() => trackCTA("services")}
          >
            Schedule Appointment
          </a>
          <a
            href="tel:+1"
            className="w-full rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm transition hover:bg-neutral-100 sm:w-auto"
            onClick={() => trackCall("services")}
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
