 "use client";

import PlaceholderImage from "@/components/common/PlaceholderImage";

const MapEmbed = () => {
  const handleMapClick = () => {
    // GA stub for map interactions if needed later
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "map_click", {
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <section className="section-padding border-b border-neutral-200 fade-in">
      <div className="container space-y-3">
        <p className="text-sm font-medium text-neutral-500">Service area</p>
        <h2 className="heading-font text-2xl font-semibold">Based in Suffolk County, NY</h2>
        <p className="text-neutral-600 max-w-2xl">
          Serving nearby towns across Suffolk County. Map embed placeholder below-will swap to live Google Map.
        </p>
        <PlaceholderImage label="Service area map" className="aspect-video" src="/images/map.jpg" onClick={handleMapClick} />
      </div>
    </section>
  );
};

export default MapEmbed;
