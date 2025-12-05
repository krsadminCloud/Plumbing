import Link from "next/link";
import NavC from "@/components/nav/NavC";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight heading-font">
          Affordable Plumbing
        </Link>
        <NavC />
      </div>
    </header>
  );
};

export default Header;
