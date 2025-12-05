const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container flex flex-col gap-2 py-6 text-sm text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Affordable Plumbing. Suffolk County, NY.</p>
        <p className="text-neutral-500">Reliable plumbing for homes and businesses.</p>
      </div>
    </footer>
  );
};

export default Footer;
