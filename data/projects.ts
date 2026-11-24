export interface ProjectCaseStudy {
  id: string;
  index: string;
  title: string;
  location: string;
  year: string;
  architect: string;
  scope: string;
  area: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "obsidian-pavilion",
    index: "01",
    title: "The Obsidian Pavilion",
    location: "Karuizawa, Japan",
    year: "2025",
    architect: "Studio Takahashi & Associates",
    scope: "Exterior Basalt Cladding, Yakisugi Facade, Custom Oak Millwork",
    area: "680 m²",
    summary:
      "A quiet cedar-and-basalt sanctuary set among larch trees, uniting deep overhanging bronze eaves with full-height acoustic timber interiors.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "The Obsidian Pavilion dark architectural residence at dusk",
  },
  {
    id: "villa-aurelia",
    index: "02",
    title: "Villa Aurelia Residence",
    location: "Lake Como, Italy",
    year: "2025",
    architect: "Atelier Bellini Architettura",
    scope: "Honed Roman Travertine, Kuro Pivot Portals, Meridian Seating",
    area: "920 m²",
    summary:
      "Cantilevered travertine planes and frameless glazed portals frame lake light across three terraced levels of uninterrupted gallery bone.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Villa Aurelia Residence minimalist concrete and timber living hall",
  },
  {
    id: "casa-monolito",
    index: "03",
    title: "Casa Monolito",
    location: "Zurich, Switzerland",
    year: "2024",
    architect: "Vogt & Lindemann",
    scope: "Ventilated Micro-Basalt Facade, Brushed Anodized Bronze Louvers",
    area: "540 m²",
    summary:
      "Monolithic dark stone volumes balanced by warm recessed timber soffits and precision-machined bronze fenestration.",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Casa Monolito architectural concrete and timber residence at twilight",
  },
  {
    id: "atelier-nord-gallery",
    index: "04",
    title: "Atelier Nord Private Gallery",
    location: "Copenhagen, Denmark",
    year: "2024",
    architect: "Krog Studio",
    scope: "Raw Linen Acoustic Systems, Linea Glazed Partitions, Bespoke Tables",
    area: "410 m²",
    summary:
      "A daylight-calibrated private art foundation featuring concealed acoustic linen walls and full-height blackened steel portals.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Atelier Nord concrete and blackened steel architectural gallery",
  },
];

