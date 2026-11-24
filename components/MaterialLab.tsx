"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MATERIALS, MaterialSpec } from "@/data/materials";

interface MaterialLabProps {
  selectedSampleIds: string[];
  onToggleSample: (material: MaterialSpec) => void;
  onOpenSampleBox: () => void;
}

export function MaterialLab({
  selectedSampleIds,
  onToggleSample,
  onOpenSampleBox,
}: MaterialLabProps) {
  const [activeId, setActiveId] = useState<string>(MATERIALS[0].id);
  const active =
    MATERIALS.find((item) => item.id === activeId) ?? MATERIALS[0];
  const isInBox = selectedSampleIds.includes(active.id);

  return (
    <section
      id="materials"
      className="border-b border-chalk/10 bg-basalt py-24 text-chalk md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 border-b border-chalk/12 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label-mono text-stone-dim">
              02 &mdash; MATERIAL LAB
            </p>
            <div className="mt-4 h-px w-10 bg-bronze" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[34px] leading-[1.12] font-light tracking-[-0.01em] text-chalk sm:text-[44px]">
              Cladding &amp; Surface Finishes
            </h2>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <p className="text-[13px] leading-relaxed text-stone-dim">
              Select a substrate to inspect architectural tolerances and curate
              a physical swatch box.
            </p>
          </div>
        </div>

        {/* Split layout: Left preview frame / Right interactive index + ledger */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left 6 columns: Sharp-edged preview frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-chalk/12 bg-basalt-2">
              {MATERIALS.map((mat) => (
                <div
                  key={mat.id}
                  aria-hidden={mat.id !== active.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    mat.id === active.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={mat.imageUrl}
                    alt={mat.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 bg-black/15" />

              {/* Top-left minimal plate label */}
              <div className="absolute left-5 top-5 flex items-center gap-3 border border-chalk/20 bg-basalt/85 px-3.5 py-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 border border-chalk/30"
                  style={{ backgroundColor: active.swatchHex }}
                />
                <span className="label-mono text-chalk">{active.sku}</span>
              </div>
            </div>

            {/* Quiet caption row under preview */}
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4 border-b border-chalk/12 pb-4">
              <p className="label-mono text-stone-dim">{active.category}</p>
              <p className="text-[13px] text-stone">{active.finish}</p>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed font-light text-stone-dim">
              {active.description}
            </p>
          </div>

          {/* Right 6 columns: Interactive vertical index + technical ledger */}
          <div className="flex flex-col justify-between lg:col-span-6">
            {/* Vertical material index */}
            <div role="tablist" aria-label="Architectural Materials">
              {MATERIALS.map((mat) => {
                const selected = mat.id === active.id;
                const queued = selectedSampleIds.includes(mat.id);
                return (
                  <button
                    key={mat.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(mat.id)}
                    className={`group flex w-full cursor-pointer items-baseline justify-between gap-6 border-b py-5 text-left transition-colors duration-500 ease-out ${
                      selected
                        ? "border-bronze text-chalk"
                        : "border-chalk/12 text-stone-dim hover:border-chalk/35 hover:text-chalk"
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`label-mono transition-colors duration-500 ${
                          selected ? "text-bronze" : "text-stone-dim/60"
                        }`}
                      >
                        {mat.index}
                      </span>
                      <div>
                        <span className="font-serif text-[22px] font-light tracking-[-0.005em] sm:text-[26px]">
                          {mat.name}
                        </span>
                        <p className="mt-0.5 text-[12px] text-stone-dim/80">
                          {mat.shortNote}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      {queued && (
                        <span className="label-mono text-bronze">
                          In Box
                        </span>
                      )}
                      <span
                        aria-hidden="true"
                        className="inline-block h-3.5 w-3.5 border border-chalk/25"
                        style={{ backgroundColor: mat.swatchHex }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Crisp Technical Ledger */}
            <div className="mt-10 border border-chalk/15 bg-basalt-2 p-6 sm:p-8">
              <div className="mb-6 flex items-baseline justify-between border-b border-chalk/12 pb-4">
                <span className="label-mono text-stone-dim">
                  Technical Specification Ledger
                </span>
                <span className="label-mono text-bronze">{active.sku}</span>
              </div>

              <dl className="divide-y divide-chalk/10">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                  <dt className="label-mono text-stone-dim sm:col-span-5">
                    Origin
                  </dt>
                  <dd className="text-[13px] text-chalk sm:col-span-7">
                    {active.origin}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                  <dt className="label-mono text-stone-dim sm:col-span-5">
                    Thickness / Module
                  </dt>
                  <dd className="font-mono text-[12px] text-chalk sm:col-span-7">
                    {active.thicknessModule}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                  <dt className="label-mono text-stone-dim sm:col-span-5">
                    Application
                  </dt>
                  <dd className="text-[13px] text-chalk sm:col-span-7">
                    {active.application}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                  <dt className="label-mono text-stone-dim sm:col-span-5">
                    Fire / Weather Rating
                  </dt>
                  <dd className="font-mono text-[12px] text-chalk sm:col-span-7">
                    {active.fireWeatherRating}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:gap-4">
                  <dt className="label-mono text-stone-dim sm:col-span-5">
                    Lead Time
                  </dt>
                  <dd className="font-mono text-[12px] text-chalk sm:col-span-7">
                    {active.leadTime}
                  </dd>
                </div>
              </dl>

              {/* Sample Box Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => onToggleSample(active)}
                  className={`cursor-pointer border px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-500 ease-out ${
                    isInBox
                      ? "border-bronze bg-bronze/15 text-chalk hover:bg-bronze/25"
                      : "border-chalk bg-chalk text-basalt hover:bg-transparent hover:text-chalk"
                  }`}
                >
                  {isInBox ? "Remove from Sample Box" : "Add to Sample Box"}
                </button>

                {selectedSampleIds.length > 0 && (
                  <button
                    type="button"
                    onClick={onOpenSampleBox}
                    className="label-mono cursor-pointer border-b border-chalk/40 pb-1 text-stone transition-colors duration-500 ease-out hover:border-bronze hover:text-chalk"
                  >
                    Review Sample Box (
                    {String(selectedSampleIds.length).padStart(2, "0")}) &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

