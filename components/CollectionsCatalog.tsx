"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  COLLECTION_CATEGORIES,
  COLLECTIONS,
  CollectionCategory,
  CollectionItem,
} from "@/data/collections";

interface CollectionsCatalogProps {
  onSelectCollection: (item: CollectionItem) => void;
}

export function CollectionsCatalog({
  onSelectCollection,
}: CollectionsCatalogProps) {
  const [activeCategory, setActiveCategory] =
    useState<CollectionCategory>("All");

  const filtered =
    activeCategory === "All"
      ? COLLECTIONS
      : COLLECTIONS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="collections"
      className="border-b border-hairline bg-bone py-24 text-ink md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label-mono text-limestone">
              03 &mdash; COLLECTIONS
            </p>
            <div className="mt-4 h-px w-10 bg-bronze" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[34px] leading-[1.12] font-light tracking-[-0.01em] text-ink sm:text-[44px]">
              Curated Architectural Catalog
            </h2>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <p className="label-mono text-limestone">
              {String(filtered.length).padStart(2, "0")} Systems Shown
            </p>
          </div>
        </div>

        {/* Category filter bar with thin bottom-border active state */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-hairline">
          {COLLECTION_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`-mb-px cursor-pointer border-b pb-4 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-500 ease-out ${
                  isActive
                    ? "border-bronze text-ink"
                    : "border-transparent text-limestone hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Magazine Grid: alternate 7-col hero & 5-col vertical */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-28">
          {filtered.map((item, idx) => {
            const isWide = item.layout === "wide";
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";
            const verticalOffset =
              !isWide && idx % 2 === 1 ? "lg:mt-20" : "";
            const aspectClass = isWide
              ? "aspect-[16/10]"
              : "aspect-[4/5]";

            return (
              <article
                key={item.id}
                className={`${colSpan} ${verticalOffset} group cursor-pointer`}
                onClick={() => onSelectCollection(item)}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCollection(item);
                  }}
                  className="block w-full cursor-pointer text-left"
                >
                  {/* Sharp-edged architectural frame */}
                  <div
                    className={`relative w-full overflow-hidden bg-stone ${aspectClass}`}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      fill
                      sizes={
                        isWide
                          ? "(max-width: 1024px) 100vw, 58vw"
                          : "(max-width: 1024px) 100vw, 42vw"
                      }
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Minimal metadata below image ONLY: Name + Category + Monospace dimensions & quiet price */}
                  <div className="mt-5 flex flex-col gap-2 border-t border-hairline pt-4 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-serif text-[24px] leading-snug font-light text-ink transition-colors duration-500 ease-out group-hover:text-bronze">
                        {item.name}
                      </h3>
                      <p className="mt-1 label-mono text-limestone">
                        {item.category} &nbsp;/&nbsp; {item.dimensions}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                      <span className="label-mono text-ink/80">
                        {item.pricing}
                      </span>
                      <span className="label-mono text-limestone opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                        Specification &rarr;
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

