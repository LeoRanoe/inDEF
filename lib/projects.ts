export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  categories: string[];
  heroImage: string;
  heroAlt: string;
  description: string;
  year: string;
  location: string;
  scope: string;
  images: ProjectImage[];
}

export const allProjects: ProjectData[] = [
  {
    slug: "indigo-living-lofts",
    title: "Indigo Living Lofts",
    categories: ["Interior Design"],
    heroImage: "/projects/project-1/p1-overview.jpg",
    heroAlt:
      "Indigo Living Lofts — double-height open-plan living space with floating oak staircase and hardwood floors",
    description:
      "A voluminous double-height living space where rich hardwood floors meet bespoke contemporary furnishings. The open-plan layout seamlessly connects living, dining, and kitchen zones beneath a dramatic ceiling. Striking navy-blue cabinetry anchors the ground floor, contrasting warm wood tones and a floating staircase framed in steel — form and function in perfect equilibrium.",
    year: "2026",
    location: "Suriname",
    scope: "Interior Design",
    images: [
      {
        src: "/projects/project-1/p1-overview.jpg",
        alt: "Double-height open-plan living space with floating staircase and hardwood floors",
        caption: "Living Room Overview",
      },
      {
        src: "/projects/project-1/p1-kitchen-dining.jpg",
        alt: "Navy blue kitchen cabinetry with marble countertop and floating staircase beyond",
        caption: "Kitchen & Dining",
      },
      {
        src: "/projects/project-1/p1-living-room.jpg",
        alt: "Open-plan living room viewed from the staircase landing, contemporary furnishings",
        caption: "Living Room",
      },
      {
        src: "/projects/project-1/p1-staircase.jpg",
        alt: "Floating staircase with wood treads and steel balustrade, double-height void",
        caption: "Staircase Detail",
      },
    ],
  },
  {
    slug: "oasis-residences",
    title: "Oasis Residences",
    categories: ["Architecture", "Interior Design"],
    heroImage: "/projects/project-2/p2-exterior-front.jpg",
    heroAlt:
      "Oasis Residences — modern two-storey estate with flat roof, gated entrance, and tropical landscaping in Suriname",
    description:
      "Clean flat-roof volumes wrapped in refined stucco facade, framed by curated tropical landscaping. An elegant gated entrance and paver driveway set the tone for the premium lifestyle within. Interiors balance a soft palette of warm greys and natural stone with dramatic master suites — every detail engineered for life in Suriname.",
    year: "2026",
    location: "Suriname",
    scope: "Architecture & Interior Design",
    images: [
      {
        src: "/projects/project-2/p2-exterior-front.jpg",
        alt: "Modern two-storey estate with flat roof, tropical landscaping, and gated entrance, front elevation",
        caption: "Front Elevation",
      },
      {
        src: "/projects/project-2/p2-exterior-side.jpg",
        alt: "Two-storey estate with cantilevered overhangs, floor-to-ceiling glass, and covered terrace, side elevation",
        caption: "Side Elevation",
      },
      {
        src: "/projects/project-2/p2-dining.jpg",
        alt: "Open-plan dining and kitchen area with light grey palette, natural stone island, and abundant natural light",
        caption: "Dining & Kitchen",
      },
      {
        src: "/projects/project-2/p2-staircase-hall.jpg",
        alt: "Double-height staircase hall with wood treads, steel balustrade, and living area below",
        caption: "Staircase Hall",
      },
      {
        src: "/projects/project-2/p2-living.jpg",
        alt: "Living room with floor-to-ceiling windows, floating staircase, and wood feature wall",
        caption: "Living Room",
      },
      {
        src: "/projects/project-2/p2-bedroom.jpg",
        alt: "Master bedroom with bespoke channeled headboard, barn-door wardrobe system, and slate-blue ceiling",
        caption: "Master Bedroom",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return allProjects.find((p) => p.slug === slug);
}
