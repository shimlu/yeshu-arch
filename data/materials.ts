export interface MaterialSpec {
  id: string;
  index: string;
  sku: string;
  name: string;
  category: string;
  shortNote: string;
  description: string;
  origin: string;
  thicknessModule: string;
  application: string;
  fireWeatherRating: string;
  leadTime: string;
  finish: string;
  swatchHex: string;
  imageUrl: string;
  imageAlt: string;
}

export const MATERIALS: MaterialSpec[] = [
  {
    id: "fluted-smoked-oak",
    index: "01",
    sku: "YM-CLD-014",
    name: "Fluted Smoked Oak",
    category: "Architectural Timber",
    shortNote: "Kiln-fumed European white oak, 18 mm pitch",
    description:
      "Quarter-sawn Slavonian oak fumed through the full section rather than surface-stained, then CNC-milled into a deep architectural flute that tempers grazing daylight and softens room acoustics.",
    origin: "Slavonia, Croatia / Milled in Veneto",
    thicknessModule: "24 mm / 600 × 3000 mm",
    application: "Interior Cladding, Millwork & Pivot Doors",
    fireWeatherRating: "EN 13501-1 B-s1,d0 (Treated)",
    leadTime: "6–8 Weeks",
    finish: "Raw matte oil, open-pore brushed",
    swatchHex: "#3A322B",
    imageUrl:
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Fluted smoked oak architectural millwork and wall cladding",
  },
  {
    id: "honed-roman-travertine",
    index: "02",
    sku: "YM-STN-021",
    name: "Honed Roman Travertine",
    category: "Monolithic Stone",
    shortNote: "Vein-cut Tivoli limestone, unfilled open pore",
    description:
      "Extracted from deep strata outside Tivoli and cut parallel to the sedimentary bed to reveal quiet horizontal striations. Left unfilled and honed to a dry, velvety lustre that absorbs glare.",
    origin: "Tivoli, Lazio, Italy",
    thicknessModule: "20 mm / 1200 × 2400 mm",
    application: "Interior Walls, Plinths & Exterior Facade",
    fireWeatherRating: "Euroclass A1 / Freeze-Thaw ASTM C666",
    leadTime: "8–10 Weeks",
    finish: "Unfilled honed, penetrating mineral sealer",
    swatchHex: "#D8D1C5",
    imageUrl:
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Honed vein-cut Roman travertine architectural interior",
  },
  {
    id: "brushed-anodized-bronze",
    index: "03",
    sku: "YM-MTL-032",
    name: "Brushed Anodized Bronze",
    category: "Architectural Metal",
    shortNote: "25-micron architectural anodization, linear grain",
    description:
      "Marine-grade architectural aluminum alloy subjected to directional micro-brushing and deep electrolytic bronze anodization. Engineered for razor-sharp shadow reveals, door jambs, and ventilated rain-screens.",
    origin: "Zurich, Switzerland",
    thicknessModule: "4 mm Solid / 1250 × 3200 mm",
    application: "Exterior Facade, Portals & Partition Frames",
    fireWeatherRating: "Euroclass A1 / Coastal C5-M Rated",
    leadTime: "5–6 Weeks",
    finish: "Directional hairline brush, low-sheen",
    swatchHex: "#5B4F43",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Brushed dark bronze architectural facade and louvered cladding",
  },
  {
    id: "architectural-micro-basalt",
    index: "04",
    sku: "YM-STN-048",
    name: "Architectural Micro-Basalt",
    category: "Volcanic Stone",
    shortNote: "Fine-grained lava stone, sandblasted charcoal",
    description:
      "Dense, non-porous volcanic basalt with micro-crystalline mineral flecking. Sandblasted and water-jet brushed to yield a tactile, deep-charcoal monolith suited to wet environments and exterior plinths.",
    origin: "Orvieto, Umbria, Italy",
    thicknessModule: "30 mm / 1000 × 2000 mm",
    application: "Exterior Facade, Wet Rooms & Hearths",
    fireWeatherRating: "Euroclass A1 / Slip Resistance R11",
    leadTime: "8–12 Weeks",
    finish: "Sandblasted & water-jet matte",
    swatchHex: "#262625",
    imageUrl:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Architectural micro-basalt monolithic interior surface",
  },
  {
    id: "raw-linen-acoustic-panel",
    index: "05",
    sku: "YM-ACS-055",
    name: "Raw Linen Acoustic Panel",
    category: "Acoustic Textile",
    shortNote: "Unbleached Belgian flax over mineral wool core",
    description:
      "Heavyweight unbleached Belgian flax tensioned across a high-density recycled mineral core with concealed aluminum perimeter channels. Achieves museum-grade reverberation control without visible perforations.",
    origin: "Kortrijk, Belgium / Assembled in Kyoto",
    thicknessModule: "42 mm / 1200 × 2700 mm",
    application: "Interior Acoustic Walls & Ceiling Baffles",
    fireWeatherRating: "ASTM E84 Class A / NRC 0.90",
    leadTime: "4–6 Weeks",
    finish: "Raw slubbed weave, zero-VOC backing",
    swatchHex: "#CFCAC0",
    imageUrl:
      "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Raw linen architectural acoustic surface texture",
  },
  {
    id: "charred-cedar-shikkui",
    index: "06",
    sku: "YM-CLD-063",
    name: "Yakisugi Charred Hinoki",
    category: "Japanese Timber",
    shortNote: "Kiln-carbonized cypress, wire-brushed & oiled",
    description:
      "Sustainably harvested Japanese cypress charred in controlled flame chambers to form a protective carbon layer that resists weathering, rot, and UV silvering while revealing a quiet obsidian grain.",
    origin: "Gifu Prefecture, Japan",
    thicknessModule: "22 mm / 135 × 3600 mm",
    application: "Exterior Rain-Screen & Feature Interiors",
    fireWeatherRating: "ASTM E84 Class B / Natural Weathering",
    leadTime: "7–9 Weeks",
    finish: "Wire-brushed carbon, camellia oil seal",
    swatchHex: "#1E1D1B",
    imageUrl:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Charred dark architectural timber grain detail",
  },
];

