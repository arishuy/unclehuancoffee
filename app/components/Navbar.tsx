"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-primary/90 backdrop-blur-md text-on-primary sticky top-0 z-50 shadow-sm transition-all duration-300 ${scrolled ? "h-16" : "h-20"
        }`}
    >
      <div className="flex justify-between items-center px-4 md:px-16 w-full max-w-[1280px] mx-auto h-full">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-[32px] leading-[40px] font-bold text-on-primary"
        >
          Uncle Huan Coffee
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold transition-colors duration-300 ${isActive
                  ? "text-on-primary border-b-2 border-tertiary-container pb-1"
                  : "text-on-primary/80 hover:text-tertiary-fixed"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Order Now Button */}
        {/* <Link
          href="/menu"
          className="hidden md:block bg-tertiary-fixed text-on-tertiary-fixed px-6 py-2 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:scale-105 active:scale-95 transition-transform"
        >
          Order Now
        </Link> */}

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-on-primary">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-white/10 absolute top-full left-0 w-full shadow-xl">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold py-3 px-4 rounded-lg transition-colors ${isActive
                    ? "text-tertiary-fixed bg-white/10"
                    : "text-on-primary/80 hover:text-on-primary hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/menu"
              onClick={() => setMobileOpen(false)}
              className="bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-[0.75rem] font-sans text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-center mt-2"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
