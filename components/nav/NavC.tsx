"use client";

import { useState } from "react";
import Link from "next/link";
import { trackCTA, trackCall } from "@/lib/ga";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/guide", label: "Guide" },
  { href: "/contact", label: "Contact" },
];

const NavC = () => {
  const handleCTAClick = () => trackCTA("header");
  const handleCallClick = () => trackCall("mobile-call");
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="flex items-center gap-3">
      <button
        className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-sm font-semibold text-neutral-900 transition duration-150 hover:-translate-y-0.5 active:translate-y-0 md:hidden"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        Menu
        <span className="text-neutral-400">{open ? "X" : "|||"} </span>
      </button>
      <div className="hidden items-center gap-4 text-sm font-medium md:flex md:gap-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-neutral-600">
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/contact" className="btn-primary text-sm" onClick={handleCTAClick}>
        Get Free Estimate
      </Link>
      <a
        href="tel:+1"
        className="fixed bottom-4 right-4 z-40 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg md:hidden"
        onClick={handleCallClick}
      >
        Call Now
      </a>
      <div
        className={`absolute left-0 top-full mt-3 w-full space-y-2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg transition-all duration-200 origin-top md:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-600" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="pt-2">
          <Link
            href="/contact"
            className="btn-primary text-sm w-full justify-center"
            onClick={() => {
              handleCTAClick();
              closeMenu();
            }}
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavC;
