type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
};

const PlaceholderImage = ({ label, className = "", onClick, src, alt }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-gradient-to-br from-neutral-100 via-neutral-50 to-white text-sm font-medium text-neutral-500 shadow-inner transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? label}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          loading="lazy"
        />
      ) : null}
      <span className="relative pointer-events-none select-none rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-600 shadow-sm">
        {label}
      </span>
    </div>
  );
};

export default PlaceholderImage;
