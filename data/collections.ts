export type CollectionCategory =
  | "All"
  | "Wall Cladding"
  | "Acoustic Systems"
  | "Bespoke Furniture"
  | "Architectural Doors";

export interface CollectionItem {
  id: string;
  sku: string;
  name: string;
  category: Exclude<CollectionCategory, "All">;
  dimensions: string;
  pricing: string;
  layout: "wide" | "vertical";
  imageUrl: string;
  imageAlt: string;
  summary: string;
  technicalNotes: string[];
  availableFinishes: string[];
  leadTime: string;
  cadFormats: string;
}

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  "All",
  "Wall Cladding",
  "Acoustic Systems",
  "Bespoke Furniture",
  "Architectural Doors",
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "solis-monolith-cladding",
    sku: "YS-WC-101",
    name: "Solis Monolith Wall System",
    category: "Wall Cladding",
    dimensions: "W 600 × H 3200 × D 28 mm",
    pricing: "Upon Request",
    layout: "wide",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Solis Monolith timber and cast stone architectural wall system",
    summary:
      "Full-height dry-joint architectural cladding combining book-matched smoked oak panels with recessed 6 mm shadow reveals and concealed aluminum sub-framing.",
    technicalNotes: [
      "Concealed anodized aluminum Z-clip rail system with +/- 4 mm micro-leveling",
      "Integrated recessed service channels for low-voltage architectural lighting",
      "Acoustic fleece backing option increases absorption to NRC 0.65",
    ],
    availableFinishes: [
      "Fluted Smoked Oak",
      "Honed Roman Travertine",
      "Architectural Micro-Basalt",
      "Yakisugi Charred Hinoki",
    ],
    leadTime: "8–10 Weeks",
    cadFormats: "DWG, RVT (BIM), 3DM, STEP",
  },
  {
    id: "kuro-pivot-portal",
    sku: "YS-AD-204",
    name: "Kuro Architectural Pivot Door",
    category: "Architectural Doors",
    dimensions: "W 1400 × H 3000 × D 62 mm",
    pricing: "From $11,400",
    layout: "vertical",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Kuro full-height steel and architectural glass pivot portal",
    summary:
      "Floor-to-ceiling frameless architectural pivot door engineered around a hydraulic concealed closer calibrated for silent 90-degree hold-open and soft self-closing.",
    technicalNotes: [
      "Concealed FritsJurgens System M+ pivot rated up to 500 kg leaf load",
      "Flush-mounted extruded anodized bronze jamb with zero visible architrave",
      "Acoustic perimeter drop-seal rated to Rw 42 dB",
    ],
    availableFinishes: [
      "Brushed Anodized Bronze",
      "Fluted Smoked Oak",
      "Smoked Laminated Glass",
      "Micro-Basalt Veneer",
    ],
    leadTime: "10–12 Weeks",
    cadFormats: "DWG, RVT (BIM), IFC, STEP",
  },
  {
    id: "shizuka-acoustic-baffle",
    sku: "YS-AC-308",
    name: "Shizuka Linear Acoustic System",
    category: "Acoustic Systems",
    dimensions: "W 1200 × H 2800 × D 48 mm",
    pricing: "From $4,800",
    layout: "vertical",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Shizuka minimal architectural timber acoustic wall panels",
    summary:
      "Precision-slotted timber and unbleached flax acoustic wall modules designed for galleries, listening rooms, and serene private residences.",
    technicalNotes: [
      "Verified broadband absorption NRC 0.90 (ISO 354 reverberation chamber)",
      "Zero-formaldehyde mineral wool acoustic core wrapped in black scrim",
      "Removable magnetic access modules for concealed HVAC and AV speakers",
    ],
    availableFinishes: [
      "Raw Linen Acoustic Panel",
      "Natural White Oak",
      "Fluted Smoked Oak",
      "Chalk Mineral Plaster",
    ],
    leadTime: "6–8 Weeks",
    cadFormats: "DWG, RVT (BIM), SKP",
  },
  {
    id: "meridian-low-sofa",
    sku: "YS-BF-412",
    name: "Meridian Architectural Sofa",
    category: "Bespoke Furniture",
    dimensions: "W 3400 × D 1080 × H 690 mm",
    pricing: "From $14,200",
    layout: "wide",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Meridian low-profile architectural sofa in warm bone interior",
    summary:
      "Grounded monolithic seating resting on a recessed blackened steel plinth. Multi-density architectural foam and washed linen upholstery maintain crisp geometric planes.",
    technicalNotes: [
      "Kiln-dried beech and structural steel internal chassis with 25-year warranty",
      "Recessed 12 mm bronze or matte black anodized architectural plinth",
      "Modular bay configurations from 2400 mm to 5400 mm with integrated stone trays",
    ],
    availableFinishes: [
      "Belgian Raw Linen — Bone",
      "Brushed Wool Boucle — Travertine",
      "Aniline Saddle Leather — Espresso",
      "Honed Travertine Side Plinth",
    ],
    leadTime: "10–12 Weeks",
    cadFormats: "DWG, 3DM, OBJ, RVT (BIM)",
  },
  {
    id: "monolith-cantilever-table",
    sku: "YS-BF-419",
    name: "Tecton Travertine Lounge",
    category: "Bespoke Furniture",
    dimensions: "W 2800 × D 1000 × H 730 mm",
    pricing: "Upon Request",
    layout: "wide",
    imageUrl:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Tecton minimalist seating and architectural stone portal",
    summary:
      "A study in proportion and negative space. Custom-proportioned seating and stone monolith tables built to exact room axes and architectural sightlines.",
    technicalNotes: [
      "Hand-selected solid stone blocks cored internally to reduce dead load by 35%",
      "Precision mitered 45-degree waterfall edges with 1 mm micro-chamfer",
      "Bespoke sizing to +/- 5 mm of architectural floorplan requirements",
    ],
    availableFinishes: [
      "Honed Roman Travertine",
      "Architectural Micro-Basalt",
      "Fluted Smoked Oak",
      "Charcoal Wool Felt",
    ],
    leadTime: "10–14 Weeks",
    cadFormats: "DWG, 3DM, RVT (BIM), STEP",
  },
  {
    id: "linea-corridor-system",
    sku: "YS-AC-315",
    name: "Linea Acoustic Partition",
    category: "Acoustic Systems",
    dimensions: "W 1000 × H 3400 × D 86 mm",
    pricing: "Upon Request",
    layout: "vertical",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Linea dark anodized acoustic partition and architectural corridor",
    summary:
      "Double-glazed and solid-core demountable architectural partition wall engineered for executive galleries, boardrooms, and private studios.",
    technicalNotes: [
      "Double-laminated 12.8 mm acoustic glazing achieving STC 48 / Rw 46 dB",
      "Ultra-slim 26 mm anodized bronze or obsidian structural sightlines",
      "Seamless flush integration with Kuro full-height pivot and sliding doors",
    ],
    availableFinishes: [
      "Brushed Anodized Bronze",
      "Matte Obsidian Aluminum",
      "Low-Iron Smoked Glass",
      "Raw Linen Acoustic Core",
    ],
    leadTime: "8–10 Weeks",
    cadFormats: "DWG, RVT (BIM), IFC",
  },
  {
    id: "vetro-flush-portal",
    sku: "YS-AD-211",
    name: "Vetro Flush Pocket System",
    category: "Architectural Doors",
    dimensions: "W 1100 × H 2900 × D 54 mm",
    pricing: "From $7,600",
    layout: "vertical",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Vetro full-height architectural black-framed folding and pocket doors",
    summary:
      "Concealed-track sliding and folding architectural portals that disappear cleanly into plaster or stone wall cavities without floor tracks.",
    technicalNotes: [
      "Ceiling-recessed stainless steel carriage rated for 240 kg silent glide",
      "Zero floor track interruption; continuous travertine or timber flooring",
      "Integrated magnetic soft-open and soft-close dampers at both stops",
    ],
    availableFinishes: [
      "Matte Obsidian Steel",
      "Brushed Anodized Bronze",
      "Fluted Smoked Oak",
      "Clear Extra-White Glass",
    ],
    leadTime: "8–10 Weeks",
    cadFormats: "DWG, RVT (BIM), STEP",
  },
  {
    id: "basalto-rainscreen-facade",
    sku: "YS-WC-118",
    name: "Basalto Ventilated Cladding",
    category: "Wall Cladding",
    dimensions: "W 1000 × H 2000 × D 30 mm",
    pricing: "Upon Request",
    layout: "wide",
    imageUrl:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Basalto architectural concrete and warm timber cladding interior",
    summary:
      "Engineered interior and exterior stone-and-timber cladding assembly featuring crisp horizontal datum lines and seismic-rated concealed undercut anchors.",
    technicalNotes: [
      "Keil undercut stainless steel rear anchors for zero face penetrations",
      "Tested to ASTM E330 wind load and Euroclass A1 non-combustibility",
      "Pre-assembled factory corners with precision 45-degree structural miters",
    ],
    availableFinishes: [
      "Architectural Micro-Basalt",
      "Honed Roman Travertine",
      "Fluted Smoked Oak",
      "Brushed Anodized Bronze",
    ],
    leadTime: "10–12 Weeks",
    cadFormats: "DWG, RVT (BIM), IFC, 3DM",
  },
];

