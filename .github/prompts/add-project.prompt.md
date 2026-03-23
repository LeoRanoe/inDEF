---
description: "Voeg een nieuw project toe aan het inDEF portfolio (projectpagina + afbeeldingen + data)"
name: "Nieuw Project Toevoegen"
argument-hint: "Naam van het project en de map met afbeeldingen"
agent: "agent"
---

Voeg een nieuw project toe aan het inDEF portfolio website.

## Projectgegevens (vul dit zelf in)

- **Projectnaam**: <!-- bijv. "Blue Ridge Villa" -->
- **Slug**: <!-- bijv. "blue-ridge-villa" (kleine letters, koppeltekens) -->
- **Categorieën**: <!-- "Architecture" / "Interior Design" / beide -->
- **Jaar**: <!-- 2025 of 2026 -->
- **Locatie**: <!-- bijv. "Paramaribo, Suriname" -->
- **Scope**: <!-- bijv. "Architecture & Interior Design" -->
- **Beschrijving**: <!-- 2-3 zinnen over het project -->
- **Afbeeldingenmap**: <!-- bijv. public/projects/project-3/ -->

## Afbeeldingen

Lijst de afbeeldingsbestanden op die al in de map staan:

| Bestandsnaam | Caption (bijv. "Front Elevation") |
|---|---|
| <!-- bijv. p3-exterior.jpg --> | <!-- beschrijving --> |
| | |

---

## Instructies voor de agent

1. **Kopieer de afbeeldingen** naar `public/projects/<slug>/` met nette namen:
   - Extern/voorgevel → `p<nr>-exterior-front.jpg`
   - Extern/zijkant → `p<nr>-exterior-side.jpg`
   - Woonkamer → `p<nr>-living-room.jpg`
   - Keuken/eetkamer → `p<nr>-kitchen-dining.jpg`
   - Slaapkamer → `p<nr>-bedroom.jpg`
   - Trap → `p<nr>-staircase.jpg`
   - Hal → `p<nr>-hall.jpg`
   - Badkamer → `p<nr>-bathroom.jpg`
   - Overig → `p<nr>-<beschrijving>.jpg`
   Waarbij `<nr>` het volgnummer is van het project (3, 4, 5...).

2. **Voeg het project toe aan [lib/projects.ts](../../lib/projects.ts)** als nieuw object in de `allProjects` array. Gebruik dit formaat:

```ts
{
  slug: "<slug>",
  title: "<Projectnaam>",
  categories: ["Architecture", "Interior Design"], // pas aan
  heroImage: "/projects/<slug>/<hoofd-afbeelding>.jpg",
  heroAlt: "<Projectnaam> — <korte beschrijving van de hero-afbeelding>",
  description: "<volledige beschrijving>",
  year: "<2025 of 2026>",
  location: "<locatie>",
  scope: "<scope>",
  images: [
    {
      src: "/projects/<slug>/<bestand>.jpg",
      alt: "<beschrijving voor screenreaders>",
      caption: "<Caption zoals in de tabel hierboven>",
    },
    // ... alle afbeeldingen
  ],
},
```

3. **Controleer** dat elk afbeeldingspad in `images[]` overeenkomt met een bestand dat fysiek bestaat in `public/projects/<slug>/`.

4. **Geen andere bestanden hoeven gewijzigd te worden** — de `ProjectsSection` en de `[slug]` pagina picken het nieuwe project automatisch op.

5. **Verifieer** daarna de types door te checkken of er TypeScript-fouten zijn in `lib/projects.ts`.

---

## Projectenlogboek

| # | Slug | Titel | Jaar | Categorieën |
|---|------|--------|------|-------------|
| 1 | `indigo-living-lofts` | Indigo Living Lofts | 2024 | Interior Design |
| 2 | `oasis-residences` | Oasis Residences | 2024 | Architecture, Interior Design |
| 3 | *(nieuw project hier)* | | 2025/2026 | |
