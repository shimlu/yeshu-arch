import React from "react";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="border-b border-hairline bg-bone py-28 text-ink md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 3 columns: tracked monospace index */}
          <div className="lg:col-span-3">
            <p className="label-mono text-limestone">01 &mdash; PHILOSOPHY</p>
            <div className="mt-4 h-px w-10 bg-bronze" />
          </div>

          {/* Right 7 columns (offset 1 on large): architectural monograph statement */}
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="font-serif text-[28px] leading-[1.32] font-light tracking-[-0.01em] text-ink sm:text-[36px] lg:text-[42px]">
              Architecture endures through the honesty of its surfaces. We
              quarry, mill, and fabricate stone, fumed timber, and anodized
              metal to millimeter tolerances so rooms register as unified
              monoliths rather than assembled ornament.
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-hairline pt-8 sm:grid-cols-3">
              <div>
                <p className="label-mono text-limestone">Fabrication</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/85">
                  Milan, Veneto &amp; Kyoto partner workshops. Direct quarry
                  block selection for every residential or hospitality
                  commission.
                </p>
              </div>
              <div>
                <p className="label-mono text-limestone">Tolerance</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/85">
                  0.5 mm dry-joint reveals, concealed mechanical sub-frames, and
                  acoustic integration engineered alongside project architects.
                </p>
              </div>
              <div>
                <p className="label-mono text-limestone">Permanence</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/85">
                  Unfilled travertine, full-section smoked oak, and solid
                  anodized bronze selected to patina with quiet authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

