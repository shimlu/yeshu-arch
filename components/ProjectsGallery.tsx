import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";

export function ProjectsGallery() {
  return (
    <section
      id="projects"
      className="border-b border-hairline bg-chalk py-24 text-ink md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 items-end gap-8 border-b border-hairline pb-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label-mono text-limestone">
              04 &mdash; SELECTED PROJECTS
            </p>
            <div className="mt-4 h-px w-10 bg-bronze" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[34px] leading-[1.12] font-light tracking-[-0.01em] text-ink sm:text-[44px]">
              Spatial Installations
            </h2>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <p className="text-[13px] leading-relaxed text-limestone">
              Completed architectural commissions executed in collaboration with
              international practices.
            </p>
          </div>
        </div>

        {/* 2-Column Case Study Gallery */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-24">
          {PROJECTS.map((project) => (
            <article key={project.id} className="group flex flex-col">
              {/* Large moody installation photograph */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <span className="label-mono absolute left-4 top-4 border border-chalk/25 bg-basalt/80 px-3 py-1 text-chalk">
                  {project.index}
                </span>
              </div>

              {/* Clean 1px bottom border metadata row */}
              <div className="mt-6 border-b border-hairline pb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[26px] leading-snug font-light text-ink sm:text-[30px]">
                    {project.title}
                  </h3>
                  <span className="label-mono text-limestone">
                    {project.location} &nbsp;&middot;&nbsp; {project.year}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 border-t border-hairline/70 pt-4 sm:grid-cols-12">
                  <div className="sm:col-span-8">
                    <p className="label-mono text-limestone">
                      Scope / Materials
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink/85">
                      {project.scope}
                    </p>
                  </div>
                  <div className="sm:col-span-4 sm:text-right">
                    <p className="label-mono text-limestone">Area</p>
                    <p className="mt-1 font-mono text-[12px] text-ink">
                      {project.area}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

