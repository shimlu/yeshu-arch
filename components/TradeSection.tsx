"use client";

import React, { useState } from "react";
import { MATERIALS, MaterialSpec } from "@/data/materials";
import { SampleEntry } from "./SampleBoxDrawer";

interface TradeSectionProps {
  samples: SampleEntry[];
  onToggleMaterial: (material: MaterialSpec) => void;
  onRemoveSample: (id: string) => void;
  onClearSamples: () => void;
}

const TECHNICAL_RESOURCES = [
  {
    id: "cad-bim",
    index: "01",
    title: "2D / 3D CAD & BIM Library",
    meta: "DWG, RVT, IFC, 3DM — REV 2026.2",
    description:
      "Parametric Revit families, full-scale cladding section details, and acoustic pivot door assemblies.",
    actionLabel: "Request Library Access",
  },
  {
    id: "installation-guides",
    index: "02",
    title: "Installation & Sub-Frame Guides",
    meta: "DRY-JOINT & CONCEALED RAIL MANUALS",
    description:
      "Substrate tolerances, seismic undercut anchor engineering, and shadow-reveal junction drawings.",
    actionLabel: "Download Manual Index",
  },
  {
    id: "commercial-quotations",
    index: "03",
    title: "Commercial Project Quotations",
    meta: "DEDICATED SPECIFICATION DESK",
    description:
      "Volume slab reservations, quarry block matching, and custom fire-rating certification for hospitality & towers.",
    actionLabel: "Open Trade Desk Inquiry",
  },
];

export function TradeSection({
  samples,
  onToggleMaterial,
  onRemoveSample,
  onClearSamples,
}: TradeSectionProps) {
  const [contactName, setContactName] = useState("");
  const [practice, setPractice] = useState("");
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [boxSubmitted, setBoxSubmitted] = useState(false);
  const [activeResourceNote, setActiveResourceNote] = useState<string | null>(
    null
  );

  const handleBoxSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !email.trim()) return;
    setBoxSubmitted(true);
    onClearSamples();
  };

  const handleResourceClick = (id: string) => {
    if (id === "installation-guides") {
      const text = [
        "YESHU ARCHITECTURAL — INSTALLATION & SUB-FRAME MANUAL INDEX",
        "01. Solis Dry-Joint Z-Clip Cladding Rail System (Tolerance +/- 4 mm)",
        "02. Basalto Undercut Anchor Facade Assembly (ASTM E330 / Euroclass A1)",
        "03. Kuro Concealed Pivot Portal Floor & Header Preparation",
        "04. Shizuka Magnetic Acoustic Baffle & Service Cavity Specification",
        "",
        "For full engineering drawings contact trade@yeshu-architectural.com",
      ].join("\n");
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "yeshu-installation-manual-index.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setActiveResourceNote("installation-guides");
      return;
    }

    if (id === "commercial-quotations") {
      setActiveResourceNote("commercial-quotations");
      const el = document.getElementById("appointment");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setActiveResourceNote("cad-bim");
  };

  return (
    <section
      id="trade"
      className="border-b border-hairline bg-bone py-24 text-ink md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label-mono text-limestone">
              05 &mdash; ARCHITECTS &amp; TRADE
            </p>
            <div className="mt-4 h-px w-10 bg-bronze" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[34px] leading-[1.12] font-light tracking-[-0.01em] text-ink sm:text-[44px]">
              Trade Desk &amp; Sample Dispatch
            </h2>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <p className="label-mono text-limestone">
              B2B Specification Program
            </p>
          </div>
        </div>

        {/* Clean 2-column bordered grid */}
        <div className="grid grid-cols-1 border border-hairline bg-chalk lg:grid-cols-2">
          {/* Left Column: Physical Sample Box Request */}
          <div className="border-b border-hairline p-8 sm:p-12 lg:border-b-0 lg:border-r">
            <div className="flex items-baseline justify-between border-b border-hairline pb-5">
              <div>
                <p className="label-mono text-bronze">Physical Swatches</p>
                <h3 className="mt-2 font-serif text-[28px] font-light text-ink">
                  Sample Box Request
                </h3>
              </div>
              <span className="label-mono text-limestone">
                {String(samples.length).padStart(2, "0")} Selected
              </span>
            </div>

            {boxSubmitted ? (
              <div className="mt-8 border border-hairline bg-bone p-8">
                <p className="label-mono text-bronze">Request Logged</p>
                <h4 className="mt-2 font-serif text-2xl font-light text-ink">
                  Curated Swatch Box Reserved.
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/80">
                  Confirmation and courier waybill details will be sent to{" "}
                  <span className="font-mono text-[12px]">{email}</span> within
                  one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setBoxSubmitted(false)}
                  className="mt-6 cursor-pointer border-b border-ink pb-1 font-mono text-[11px] tracking-[0.15em] text-ink uppercase"
                >
                  Prepare Another Box
                </button>
              </div>
            ) : (
              <>
                {/* Selected materials list */}
                <div className="mt-6">
                  {samples.length > 0 ? (
                    <ul className="divide-y divide-hairline border-b border-hairline">
                      {samples.map((entry) => (
                        <li
                          key={entry.id}
                          className="flex items-center justify-between gap-4 py-3.5"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className="inline-block h-3.5 w-3.5 border border-hairline"
                              style={{
                                backgroundColor: entry.swatchHex ?? "#262625",
                              }}
                            />
                            <div>
                              <p className="text-[14px] text-ink">
                                {entry.name}
                              </p>
                              <p className="label-mono text-limestone">
                                {entry.sku}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveSample(entry.id)}
                            className="label-mono cursor-pointer text-limestone transition-colors duration-500 hover:text-ink"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="border border-hairline bg-bone p-5">
                      <p className="label-mono text-limestone">
                        Quick-Select Core Swatches
                      </p>
                      <p className="mt-1.5 text-[13px] text-ink/75">
                        Add materials from the Material Lab above or select
                        below to assemble your presentation box:
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {MATERIALS.slice(0, 4).map((mat) => (
                          <button
                            key={mat.id}
                            type="button"
                            onClick={() => onToggleMaterial(mat)}
                            className="cursor-pointer border border-hairline bg-chalk px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-ink uppercase transition-colors duration-500 hover:border-bronze"
                          >
                            + {mat.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Shipping / Project form */}
                <form
                  onSubmit={handleBoxSubmit}
                  className="mt-8 space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="trade-name"
                        className="label-mono block text-limestone"
                      >
                        Architect / Contact *
                      </label>
                      <input
                        id="trade-name"
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Kenji Sato"
                        className="field-line"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="trade-firm"
                        className="label-mono block text-limestone"
                      >
                        Practice / Firm
                      </label>
                      <input
                        id="trade-firm"
                        type="text"
                        value={practice}
                        onChange={(e) => setPractice(e.target.value)}
                        placeholder="Sato Spatial Workshop"
                        className="field-line"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="trade-email"
                        className="label-mono block text-limestone"
                      >
                        Studio Email *
                      </label>
                      <input
                        id="trade-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="studio@satoworkshop.jp"
                        className="field-line"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="trade-address"
                        className="label-mono block text-limestone"
                      >
                        Courier Destination
                      </label>
                      <input
                        id="trade-address"
                        type="text"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        placeholder="Minato-ku, Tokyo / Project Ref"
                        className="field-line"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full cursor-pointer border border-ink bg-ink px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-chalk uppercase transition-colors duration-500 ease-out hover:bg-basalt"
                  >
                    Dispatch Sample Box (
                    {String(samples.length).padStart(2, "0")})
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column: Technical Library & Trade Account */}
          <div className="flex flex-col justify-between p-8 sm:p-12">
            <div>
              <div className="border-b border-hairline pb-5">
                <p className="label-mono text-bronze">Documentation</p>
                <h3 className="mt-2 font-serif text-[28px] font-light text-ink">
                  Technical Library &amp; Trade Account
                </h3>
              </div>

              <div className="divide-y divide-hairline">
                {TECHNICAL_RESOURCES.map((res) => (
                  <div key={res.id} className="py-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="label-mono text-limestone">
                        {res.index} &mdash; {res.meta}
                      </span>
                    </div>
                    <h4 className="mt-2 font-serif text-[23px] font-light text-ink">
                      {res.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/75">
                      {res.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleResourceClick(res.id)}
                      className="group mt-4 inline-flex cursor-pointer items-center gap-3 border-b border-ink/50 pb-1 font-mono text-[11px] tracking-[0.15em] text-ink uppercase transition-colors duration-500 hover:border-bronze hover:text-bronze"
                    >
                      <span>{res.actionLabel}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </button>

                    {activeResourceNote === res.id && res.id === "cad-bim" && (
                      <p className="mt-3 text-[12px] text-bronze">
                        Direct CAD/BIM portal credentials are issued within 4
                        hours via trade@yeshu-architectural.com.
                      </p>
                    )}
                    {activeResourceNote === res.id &&
                      res.id === "installation-guides" && (
                        <p className="mt-3 text-[12px] text-bronze">
                          Manual index downloaded. Full DWG section assemblies
                          available on trade login.
                        </p>
                      )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-hairline pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className="label-mono text-limestone">Direct Trade Line</p>
                <a
                  href="mailto:trade@yeshu-architectural.com"
                  className="font-mono text-[12px] text-ink underline-offset-4 hover:underline"
                >
                  trade@yeshu-architectural.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

