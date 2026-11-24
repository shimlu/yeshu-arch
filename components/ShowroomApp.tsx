"use client";

import React, { useCallback, useState } from "react";
import { CollectionItem } from "@/data/collections";
import { MaterialSpec } from "@/data/materials";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Philosophy } from "./Philosophy";
import { MaterialLab } from "./MaterialLab";
import { CollectionsCatalog } from "./CollectionsCatalog";
import { ProjectsGallery } from "./ProjectsGallery";
import { TradeSection } from "./TradeSection";
import { AppointmentSection } from "./AppointmentSection";
import { Footer } from "./Footer";
import { SpecDrawer } from "./SpecDrawer";
import { SampleBoxDrawer, SampleEntry } from "./SampleBoxDrawer";

export function ShowroomApp() {
  const [samples, setSamples] = useState<SampleEntry[]>([]);
  const [activeCollection, setActiveCollection] =
    useState<CollectionItem | null>(null);
  const [sampleDrawerOpen, setSampleDrawerOpen] = useState(false);

  const handleToggleMaterial = useCallback((material: MaterialSpec) => {
    setSamples((prev) => {
      const exists = prev.some((entry) => entry.id === material.id);
      if (exists) {
        return prev.filter((entry) => entry.id !== material.id);
      }
      return [
        ...prev,
        {
          id: material.id,
          sku: material.sku,
          name: material.name,
          category: material.category,
          swatchHex: material.swatchHex,
        },
      ];
    });
  }, []);

  const handleInquireCollectionSample = useCallback((item: CollectionItem) => {
    setSamples((prev) => {
      if (prev.some((entry) => entry.id === item.id)) return prev;
      return [
        ...prev,
        {
          id: item.id,
          sku: item.sku,
          name: item.name,
          category: item.category,
          swatchHex: "#8C7355",
        },
      ];
    });
    setActiveCollection(null);
    setSampleDrawerOpen(true);
  }, []);

  const handleRemoveSample = useCallback((id: string) => {
    setSamples((prev) => prev.filter((entry) => entry.id !== id));
  }, []);

  const handleClearSamples = useCallback(() => {
    setSamples([]);
  }, []);

  return (
    <div className="min-h-screen bg-bone text-ink">
      <Header
        sampleCount={samples.length}
        onOpenSampleBox={() => setSampleDrawerOpen(true)}
      />

      <main>
        <Hero />
        <Philosophy />
        <MaterialLab
          selectedSampleIds={samples.map((s) => s.id)}
          onToggleSample={handleToggleMaterial}
          onOpenSampleBox={() => setSampleDrawerOpen(true)}
        />
        <CollectionsCatalog onSelectCollection={setActiveCollection} />
        <ProjectsGallery />
        <TradeSection
          samples={samples}
          onToggleMaterial={handleToggleMaterial}
          onRemoveSample={handleRemoveSample}
          onClearSamples={handleClearSamples}
        />
        <AppointmentSection />
      </main>

      <Footer />

      <SpecDrawer
        item={activeCollection}
        onClose={() => setActiveCollection(null)}
        onInquireSample={handleInquireCollectionSample}
      />

      <SampleBoxDrawer
        open={sampleDrawerOpen}
        items={samples}
        onClose={() => setSampleDrawerOpen(false)}
        onRemove={handleRemoveSample}
        onClear={handleClearSamples}
      />
    </div>
  );
}

