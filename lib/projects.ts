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
  video?: string;
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
    video: "/projects/project-1/walkthrough.mp4",
    images: [
      {
        src: "/projects/project-1/p1-overview.jpg",
        alt: "Exterior house overview with driveway and tropical landscaping",
        caption: "Exterior Overview",
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
        alt: "Exterior house detail with gates and tropical landscaping",
        caption: "Exterior Detail",
      },
    ],
  },
  {
    slug: "oasis-residences",
    title: "Oasis Residences",
    categories: ["Architecture", "Interior Design"],
    heroImage: "/projects/project-2/p2-exterior-front.jpg",
    heroAlt:
      "Oasis Residences — modern two-storey residence with horizontal volumes, double garage, and lush tropical setting",
    description:
      "A striking contemporary residence featuring clean horizontal lines with a white and sage-green facade. The design showcases cantilevered overhangs and expansive floor-to-ceiling glazing that seamlessly connects interior living spaces with tropical landscaping. The interior design features an open-plan dining and kitchen area with a waterfall island, a dramatic double-height staircase with floating wood treads and steel balustrades, and a sophisticated master suite with a dramatic slate-blue ceiling and custom cabinetry.",
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
        alt: "Master bedroom with wood sliding door, tall windows, and modern furnishings",
        caption: "Master Bedroom",
      },
      {
        src: "/projects/project-2/p2-living.jpg",
        alt: "Double-height staircase with wood treads, steel balustrade, and wood feature wall",
        caption: "Staircase Wall",
      },
      {
        src: "/projects/project-2/p2-bedroom.jpg",
        alt: "Bright bedroom space with high ceilings, natural light, and minimalist design",
        caption: "Living Room",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return allProjects.find((p) => p.slug === slug);
}
