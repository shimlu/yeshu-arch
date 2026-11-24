"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HERO_PLATES = [
  {
    index: "01",
    title: "Architectural Surfaces & Quiet Form.",
    descriptor:
      "Monolithic stone cladding, fumed European timber, and bespoke spatial furniture.",
    caption: "Plate 01 — Villa Aurelia Living Hall, Honed Travertine & Smoked Oak",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=2200&q=85",
    imageAlt:
      "Minimalist architectural living room with monolithic concrete, timber wall cladding, and natural shadow",
  },
  {
    index: "02",
    title: "Precision in Stone & Shadow.",
    descriptor:
      "Dry-joint volcanic basalt, brushed anodized bronze, and full-height architectural portals.",
    caption: "Plate 02 — The Obsidian Pavilion, Karuizawa",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85",
    imageAlt:
      "Dark architectural residence at dusk with warm interior illumination",
  },
  {
    index: "03",
    title: "Tactile Calm, Engineered.",
    descriptor:
      "Unbleached Belgian flax acoustics and kiln-fumed Slavonian oak milled to 0.5 mm tolerance.",
    caption: "Plate 03 — Meridian Seating & Acoustic Fluted Millwork",
    imageUrl:
      "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=2200&q=85",
    imageAlt:
      "Moody dark basalt interior lounge with sculpted low seating and arched architectural niche",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_PLATES.length);
    }, 8500);
    return () => window.clearInterval(timer);
  }, []);

  const current = HERO_PLATES[active];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-basalt text-chalk"
    >
      {/* Full-bleed architectural photography stack */}
      {HERO_PLATES.map((plate, idx) => (
        <div
          key={plate.index}
          aria-hidden={idx !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={plate.imageUrl}
            alt={plate.imageAlt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Subtle flat dark scrim for legibility — zero gradients */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      {/* Bottom architectural editorial bar */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 pt-28 md:px-12 md:pb-16">
        <div className="grid grid-cols-1 items-end gap-10 border-t border-chalk/20 pt-8 md:grid-cols-12">
          {/* Bottom-left editorial headline + descriptor + link */}
          <div className="md:col-span-8">
            <p className="label-mono mb-4 text-stone">
              {current.caption}
            </p>
            <h1 className="font-serif text-[40px] leading-[1.04] font-light tracking-[-0.015em] text-chalk sm:text-[56px] lg:text-[72px]">
              {current.title}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed font-light text-stone">
              {current.descriptor}
            </p>
            <div className="mt-8 flex items-center gap-8">
              <a
                href="#collections"
                className="group inline-flex items-center gap-4 border-b border-chalk/60 pb-1.5 font-mono text-[11px] tracking-[0.16em] text-chalk uppercase transition-colors duration-500 ease-out hover:border-bronze hover:text-stone"
              >
                <span>Explore Collections</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="#materials"
                className="hidden font-mono text-[11px] tracking-[0.16em] text-stone-dim uppercase transition-colors duration-500 ease-out hover:text-chalk sm:inline-block"
              >
                Material Lab
              </a>
            </div>
          </div>

          {/* Bottom-right index indicator & Scroll label */}
          <div className="flex items-end justify-between md:col-span-4 md:flex-col md:items-end md:gap-8">
            <div className="flex items-center gap-4">
              {HERO_PLATES.map((plate, idx) => (
                <button
                  key={plate.index}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`View plate ${plate.index}`}
                  className={`label-mono cursor-pointer pb-1 transition-colors duration-500 ease-out ${
                    idx === active
                      ? "border-b border-bronze text-chalk"
                      : "border-b border-transparent text-stone-dim/65 hover:text-chalk"
                  }`}
                >
                  {plate.index}
                </button>
              ))}
              <span className="label-mono text-stone-dim/60">
                / 0{HERO_PLATES.length}
              </span>
            </div>

            <a
              href="#philosophy"
              className="label-mono flex items-center gap-3 text-stone-dim transition-colors duration-500 ease-out hover:text-chalk"
            >
              <span>Scroll</span>
              <span className="inline-block h-px w-8 bg-chalk/40" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

