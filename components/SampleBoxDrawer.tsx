"use client";

import React, { useEffect, useState } from "react";

export interface SampleEntry {
  id: string;
  sku: string;
  name: string;
  category: string;
  swatchHex?: string;
}

interface SampleBoxDrawerProps {
  open: boolean;
  items: SampleEntry[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function SampleBoxDrawer({
  open,
  items,
  onClose,
  onRemove,
  onClear,
}: SampleBoxDrawerProps) {
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
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
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    onClear();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/55"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-box-title"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-[520px] flex-col overflow-y-auto border-l border-hairline bg-chalk text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-chalk px-6 py-5 sm:px-8">
          <span id="sample-box-title" className="label-mono text-ink">
            Physical Sample Box ({String(items.length).padStart(2, "0")})
          </span>
          <button
            type="button"
            onClick={onClose}
            className="label-mono cursor-pointer border-b border-transparent pb-0.5 text-limestone transition-colors duration-500 hover:border-ink hover:text-ink"
          >
            Close [ESC]
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-8 sm:px-8">
          {submitted ? (
            <div className="border border-hairline bg-bone p-8">
              <p className="label-mono text-bronze">Dispatch Confirmed</p>
              <h3 className="mt-3 font-serif text-3xl font-light text-ink">
                Your Sample Box is Scheduled.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink/80">
                Our Milan &amp; Tokyo material archivists will prepare your
                selected architectural swatches and dispatch tracking details to{" "}
                <span className="font-mono text-[12px]">{email}</span> within 48
                hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-8 border border-ink px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-ink uppercase transition-colors duration-500 hover:bg-ink hover:text-chalk"
              >
                Return to Showroom
              </button>
            </div>
          ) : (
            <>
              <p className="text-[14px] leading-relaxed text-ink/80">
                Complimentary architectural swatches (150 &times; 150 mm) packed
                in a linen-bound presentation box for registered studios and
                private commissions.
              </p>

              {/* Selected items */}
              <div className="mt-6 border-t border-hairline">
                {items.length === 0 ? (
                  <div className="py-10 text-center">
                    <p className="label-mono text-limestone">
                      No materials selected
                    </p>
                    <p className="mt-2 text-[13px] text-limestone">
                      Add substrates from the Material Lab or Collections
                      catalog.
                    </p>
                  </div>
                ) : (
                  <ul className="divide-y divide-hairline">
                    {items.map((entry) => (
                      <li
                        key={entry.id}
                        className="flex items-center justify-between gap-4 py-4"
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            aria-hidden="true"
                            className="inline-block h-4 w-4 shrink-0 border border-hairline"
                            style={{
                              backgroundColor: entry.swatchHex ?? "#262625",
                            }}
                          />
                          <div>
                            <p className="text-[14px] text-ink">{entry.name}</p>
                            <p className="label-mono text-limestone">
                              {entry.sku} &nbsp;/&nbsp; {entry.category}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(entry.id)}
                          className="label-mono cursor-pointer text-limestone transition-colors duration-500 hover:text-ink"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Dispatch form */}
              {items.length > 0 && (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6 border-t border-hairline pt-8"
                >
                  <p className="label-mono text-limestone">
                    Courier Dispatch Details
                  </p>
                  <div>
                    <label
                      htmlFor="sb-name"
                      className="label-mono block text-limestone"
                    >
                      Full Name *
                    </label>
                    <input
                      id="sb-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Elena Rostova"
                      className="field-line"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sb-firm"
                      className="label-mono block text-limestone"
                    >
                      Architecture Practice / Studio
                    </label>
                    <input
                      id="sb-firm"
                      type="text"
                      value={firm}
                      onChange={(e) => setFirm(e.target.value)}
                      placeholder="Studio Rostova Architects"
                      className="field-line"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sb-email"
                      className="label-mono block text-limestone"
                    >
                      Work Email *
                    </label>
                    <input
                      id="sb-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@studiorostova.com"
                      className="field-line"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sb-address"
                      className="label-mono block text-limestone"
                    >
                      Shipping Address &amp; Project City
                    </label>
                    <input
                      id="sb-address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Via Solferino 18, 20121 Milano"
                      className="field-line"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer border border-ink bg-ink px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-chalk uppercase transition-colors duration-500 ease-out hover:bg-basalt"
                  >
                    Request Physical Sample Box
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

