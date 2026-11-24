"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CollectionItem } from "@/data/collections";

interface SpecDrawerProps {
  item: CollectionItem | null;
  onClose: () => void;
  onInquireSample: (item: CollectionItem) => void;
}

export function SpecDrawer({
  item,
  onClose,
  onInquireSample,
}: SpecDrawerProps) {
  const [cadRequested, setCadRequested] = useState(false);

  useEffect(() => {
    setCadRequested(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleDownloadSpec = () => {
    const content = [
      `YESHU ARCHITECTURAL — TECHNICAL SPECIFICATION SHEET`,
      `====================================================`,
      `System:        ${item.name}`,
      `SKU:           ${item.sku}`,
      `Category:      ${item.category}`,
      `Dimensions:    ${item.dimensions}`,
      `Pricing:       ${item.pricing}`,
      `Lead Time:     ${item.leadTime}`,
      `CAD / BIM:     ${item.cadFormats}`,
      ``,
      `OVERVIEW`,
      `${item.summary}`,
      ``,
      `AVAILABLE FINISHES`,
      ...item.availableFinishes.map((f) => `- ${f}`),
      ``,
      `TECHNICAL NOTES`,
      ...item.technicalNotes.map((n) => `- ${n}`),
      ``,
      `Showroom Concierge: concierge@yeshu-architectural.com`,
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${item.sku.toLowerCase()}-spec-sheet.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-drawer-title"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-[620px] flex-col overflow-y-auto border-l border-hairline bg-chalk text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-chalk px-6 py-5 sm:px-10">
          <span className="label-mono text-limestone">
            Specification Dossier &nbsp;/&nbsp; {item.sku}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="label-mono cursor-pointer border-b border-transparent pb-0.5 text-ink transition-colors duration-500 ease-out hover:border-ink"
          >
            Close [ESC]
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 px-6 py-8 sm:px-10 sm:py-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              fill
              sizes="620px"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-8 border-b border-hairline pb-6">
            <p className="label-mono text-bronze">{item.category}</p>
            <h3
              id="spec-drawer-title"
              className="mt-2 font-serif text-[32px] leading-tight font-light text-ink sm:text-[38px]"
            >
              {item.name}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-ink/80">
              {item.summary}
            </p>
          </div>

          {/* Core dimensions & ledger */}
          <dl className="divide-y divide-hairline border-b border-hairline">
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="label-mono text-limestone">Dimensions</dt>
              <dd className="font-mono text-[12px] text-ink">
                {item.dimensions}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="label-mono text-limestone">Guide Pricing</dt>
              <dd className="font-mono text-[12px] text-ink">
                {item.pricing}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="label-mono text-limestone">Production Lead</dt>
              <dd className="font-mono text-[12px] text-ink">
                {item.leadTime}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="label-mono text-limestone">CAD / BIM Package</dt>
              <dd className="font-mono text-[12px] text-ink">
                {item.cadFormats}
              </dd>
            </div>
          </dl>

          {/* Available Finishes */}
          <div className="mt-8">
            <p className="label-mono text-limestone">Available Finishes</p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {item.availableFinishes.map((finish) => (
                <li
                  key={finish}
                  className="border border-hairline bg-bone px-3.5 py-2.5 text-[13px] text-ink"
                >
                  {finish}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Notes */}
          <div className="mt-8">
            <p className="label-mono text-limestone">Technical Notes</p>
            <ul className="mt-4 space-y-3 border-t border-hairline pt-4">
              {item.technicalNotes.map((note, idx) => (
                <li
                  key={note}
                  className="flex items-baseline gap-4 text-[13px] leading-relaxed text-ink/85"
                >
                  <span className="label-mono text-limestone">
                    0{idx + 1}
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="mt-10 space-y-3 border-t border-hairline pt-8">
            <button
              type="button"
              onClick={() => onInquireSample(item)}
              className="w-full cursor-pointer border border-ink bg-ink px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-chalk uppercase transition-colors duration-500 ease-out hover:bg-basalt"
            >
              Inquire / Request Sample
            </button>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleDownloadSpec}
                className="cursor-pointer border border-ink/40 bg-transparent px-5 py-3.5 font-mono text-[11px] tracking-[0.15em] text-ink uppercase transition-colors duration-500 ease-out hover:border-ink hover:bg-bone"
              >
                Download Spec Sheet (PDF)
              </button>
              <button
                type="button"
                onClick={() => setCadRequested(true)}
                className="cursor-pointer border border-hairline bg-bone px-5 py-3.5 font-mono text-[11px] tracking-[0.15em] text-ink uppercase transition-colors duration-500 ease-out hover:border-bronze"
              >
                {cadRequested
                  ? "CAD Package Queued"
                  : "Request CAD / BIM Files"}
              </button>
            </div>

            {cadRequested && (
              <p className="pt-2 text-[12px] text-limestone">
                {item.cadFormats} files for {item.sku} have been queued. Proceed
                to the{" "}
                <a
                  href="#trade"
                  onClick={onClose}
                  className="border-b border-bronze text-ink"
                >
                  Trade Technical Library
                </a>{" "}
                or include your firm email below for direct dispatch.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

