"use client";

import React, { useEffect, useState } from "react";
import { YeshuMark } from "./YeshuMark";

interface HeaderProps {
  sampleCount: number;
  onOpenSampleBox: () => void;
}

const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Materials", href: "#materials" },
  { label: "Projects", href: "#projects" },
  { label: "Trade", href: "#trade" },
];

export function Header({ sampleCount, onOpenSampleBox }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ease-out ${
        solid
          ? "border-b border-hairline bg-bone text-ink"
          : "border-b border-transparent bg-transparent text-chalk"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
        {/* Left: Wide-tracked uppercase studio wordmark */}
        <a
          href="#hero"
          className="group flex items-center gap-3.5 transition-opacity duration-500 ease-out hover:opacity-75"
        >
          <YeshuMark className="h-[18px] w-[22px] shrink-0" />
          <span className="font-brand text-[12px] font-medium tracking-[0.28em] uppercase">
            YESHU ARCHITECTURAL
          </span>
        </a>

        {/* Center: 4 sparse links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[12px] tracking-[0.14em] uppercase transition-colors duration-500 ease-out ${
                solid
                  ? "text-ink/75 hover:text-ink"
                  : "text-chalk/80 hover:text-chalk"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Quiet sample count + sharp 1px bordered Book Showroom */}
        <div className="hidden items-center gap-7 lg:flex">
          {sampleCount > 0 && (
            <button
              type="button"
              onClick={onOpenSampleBox}
              className={`label-mono cursor-pointer border-b pb-0.5 transition-colors duration-500 ease-out ${
                solid
                  ? "border-bronze text-ink hover:text-bronze"
                  : "border-stone-dim text-chalk hover:text-stone"
              }`}
            >
              Sample Box ({String(sampleCount).padStart(2, "0")})
            </button>
          )}
          <a
            href="#appointment"
            className={`border px-5 py-2.5 text-[11px] font-mono tracking-[0.16em] uppercase transition-colors duration-500 ease-out ${
              solid
                ? "border-ink text-ink hover:bg-ink hover:text-chalk"
                : "border-chalk/70 text-chalk hover:bg-chalk hover:text-basalt"
            }`}
          >
            Book Showroom
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-5 lg:hidden">
          {sampleCount > 0 && (
            <button
              type="button"
              onClick={onOpenSampleBox}
              className="label-mono border-b border-bronze pb-0.5"
            >
              Box ({String(sampleCount).padStart(2, "0")})
            </button>
          )}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="label-mono cursor-pointer py-2"
          >
            {mobileOpen ? "Close" : "Index"}
          </button>
        </div>
      </div>

      {/* Mobile full-width architectural dropdown */}
      {mobileOpen && (
        <div className="border-t border-hairline bg-bone px-6 py-8 text-ink lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline justify-between border-b border-hairline pb-4"
              >
                <span className="font-serif text-2xl font-light tracking-tight">
                  {link.label}
                </span>
                <span className="label-mono text-limestone">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center border border-ink bg-ink px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-chalk uppercase transition-colors duration-500 ease-out hover:bg-basalt"
            >
              Book Private Showroom
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

