import React from "react";
import { YeshuMark } from "./YeshuMark";

export function Footer() {
  return (
    <footer className="bg-basalt text-chalk">
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-20 md:px-12 md:pt-28">
        {/* Minimal 3-column index */}
        <div className="grid grid-cols-1 gap-12 border-b border-chalk/12 pb-16 sm:grid-cols-3">
          <div>
            <p className="label-mono text-stone-dim">Index</p>
            <ul className="mt-5 space-y-3 text-[14px] text-stone">
              <li>
                <a
                  href="#philosophy"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Material Lab
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Selected Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono text-stone-dim">Trade &amp; Technical</p>
            <ul className="mt-5 space-y-3 text-[14px] text-stone">
              <li>
                <a
                  href="#trade"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Physical Sample Box
                </a>
              </li>
              <li>
                <a
                  href="#trade"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  2D / 3D CAD &amp; BIM Library
                </a>
              </li>
              <li>
                <a
                  href="#trade"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Installation Manuals
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="transition-colors duration-500 hover:text-chalk"
                >
                  Private Showroom
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono text-stone-dim">Studios</p>
            <ul className="mt-5 space-y-3 text-[14px] text-stone">
              <li>Milan &mdash; Via Solferino 24</li>
              <li>Kyoto &mdash; Nakagyo-ku Atelier</li>
              <li>Zurich &mdash; Talstrasse Trade Desk</li>
              <li className="pt-1 font-mono text-[11px] tracking-[0.12em] text-stone-dim">
                concierge@yeshu-architectural.com
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized subtle studio wordmark across full width */}
        <div className="flex items-center justify-between gap-6 border-b border-chalk/12 py-12 md:py-16">
          <div className="flex w-full items-center justify-between gap-6">
            <span className="font-brand select-none text-[clamp(2.75rem,11.5vw,10.5rem)] leading-none font-normal tracking-[0.22em] text-chalk/12 uppercase">
              YESHU
            </span>
            <YeshuMark className="hidden h-16 w-20 shrink-0 text-chalk/15 md:block lg:h-24 lg:w-28" />
          </div>
        </div>

        {/* Quiet copyright row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="label-mono text-stone-dim">
            &copy; {new Date().getFullYear()} Yeshu Architectural Studio. All
            Rights Reserved.
          </p>
          <p className="label-mono text-stone-dim/75">
            Architectural Surfaces &middot; Cladding &middot; Bespoke Form
          </p>
        </div>
      </div>
    </footer>
  );
}

