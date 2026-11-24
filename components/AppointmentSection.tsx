"use client";

import React, { useState } from "react";

const SCOPES = [
  "Residential",
  "Hospitality",
  "Commercial Facade",
  "Bespoke Furniture",
];

export function AppointmentSection() {
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState(SCOPES[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="appointment"
      className="bg-chalk py-24 text-ink md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left 5 columns: Showroom address, viewing hours, concierge, monochrome map link */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="label-mono text-limestone">
                06 &mdash; PRIVATE VIEWING
              </p>
              <div className="mt-4 h-px w-10 bg-bronze" />
              <h2 className="mt-8 font-serif text-[34px] leading-[1.12] font-light tracking-[-0.01em] text-ink sm:text-[44px]">
                Showroom Consultation
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink/75">
                Experience full-scale stone monoliths, fumed oak panels, and
                calibrated daylight rooms in private with our architectural
                specialists.
              </p>

              <dl className="mt-12 space-y-8 border-t border-hairline pt-8">
                <div>
                  <dt className="label-mono text-limestone">
                    Flagship Showroom
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink">
                    Via Solferino 24, Brera District
                    <br />
                    20121 Milano MI, Italy
                  </dd>
                </div>

                <div>
                  <dt className="label-mono text-limestone">
                    Private Viewing Hours
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink">
                    Monday &ndash; Friday: 09:30 &ndash; 18:30
                    <br />
                    Saturday: By Private Appointment Only
                  </dd>
                </div>

                <div>
                  <dt className="label-mono text-limestone">
                    Direct Concierge
                  </dt>
                  <dd className="mt-2 space-y-1 font-mono text-[12px] text-ink">
                    <p>+39 02 8941 2040</p>
                    <p>concierge@yeshu-architectural.com</p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Clean monochrome map link */}
            <div className="mt-12 border-t border-hairline pt-6">
              <a
                href="https://maps.google.com/?q=Via+Solferino+24+Milano"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border-b border-ink/50 pb-1.5 font-mono text-[11px] tracking-[0.16em] text-ink uppercase transition-colors duration-500 hover:border-bronze hover:text-bronze"
              >
                <span>Open Coordinates &mdash; 45.4754° N, 9.1869° E</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right 7 columns: Bottom-border-only consultation form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-hairline bg-bone p-8 sm:p-12">
              {submitted ? (
                <div className="py-10">
                  <p className="label-mono text-bronze">
                    Appointment Requested
                  </p>
                  <h3 className="mt-3 font-serif text-[32px] font-light text-ink">
                    We Await Your Visit, {name}.
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink/80">
                    Our Brera concierge has logged your{" "}
                    <span className="text-ink">{scope}</span> consultation
                    {preferredDate ? ` for ${preferredDate}` : ""} and will
                    confirm your private salon slot via{" "}
                    <span className="font-mono text-[12px]">{email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setFirm("");
                      setEmail("");
                      setPreferredDate("");
                    }}
                    className="mt-8 cursor-pointer border border-ink px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-ink uppercase transition-colors duration-500 hover:bg-ink hover:text-chalk"
                  >
                    New Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b border-hairline pb-4">
                    <p className="label-mono text-limestone">
                      Private Salon Reservation
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="appt-name"
                      className="label-mono block text-limestone"
                    >
                      Name *
                    </label>
                    <input
                      id="appt-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="field-line"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="appt-firm"
                      className="label-mono block text-limestone"
                    >
                      Firm / Individual
                    </label>
                    <input
                      id="appt-firm"
                      type="text"
                      value={firm}
                      onChange={(e) => setFirm(e.target.value)}
                      placeholder="Practice name or Private Client"
                      className="field-line"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="appt-email"
                      className="label-mono block text-limestone"
                    >
                      Email *
                    </label>
                    <input
                      id="appt-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@practice.com"
                      className="field-line"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="appt-scope"
                        className="label-mono block text-limestone"
                      >
                        Project Scope
                      </label>
                      <select
                        id="appt-scope"
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        className="field-line cursor-pointer"
                      >
                        {SCOPES.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="appt-date"
                        className="label-mono block text-limestone"
                      >
                        Preferred Date
                      </label>
                      <input
                        id="appt-date"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="field-line"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full cursor-pointer border border-ink bg-ink px-8 py-4 font-mono text-[11px] tracking-[0.18em] text-chalk uppercase transition-colors duration-500 ease-out hover:bg-basalt"
                    >
                      Request Private Viewing
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

