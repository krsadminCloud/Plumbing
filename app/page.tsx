import ContactForm from "@/components/forms/ContactForm";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";
import Cta from "@/components/cta/Cta";
import ResidentialCommercial from "@/components/home/ResidentialCommercial";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import GuidePreview from "@/components/home/GuidePreview";
import ContactStrip from "@/components/home/ContactStrip";
import MapEmbed from "@/components/home/MapEmbed";
import ServiceCards from "@/components/home/ServiceCards";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-neutral-50">
        <ResidentialCommercial />
        <ServiceCards />
      </div>
      <AboutSnapshot />
      <TestimonialsSlider />
      <GuidePreview />
      <ContactStrip />
      <MapEmbed />
      <Testimonials />
      <Cta />
      <ContactForm />
    </>
  );
}
