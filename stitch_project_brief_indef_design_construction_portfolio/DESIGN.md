# Design System Document

## 1. Overview & Creative North Star: The Architectural Monolith
This design system is built upon the concept of **"The Architectural Monolith."** It treats the digital interface not as a collection of flat elements, but as a structural environment defined by depth, material weight, and precision. We move beyond generic templates by embracing intentional asymmetry—using the "Diagonal Section Divider" to create a sense of forward momentum and structural dynamism. 

The experience is rooted in high-end editorial aesthetics: dramatic scale shifts in typography, layered surfaces that mimic stacked blueprints, and a "No-Line" philosophy that relies on light and shadow rather than borders to define space. This system conveys authority, precision, and an uncompromising commitment to luxury construction.

---

## 2. Colors
Our palette is anchored in deep, structural tones contrasted by premium metallic accents.

### Palette Roles
*   **Primary (`#1A5276`) & Secondary (`#2E86C1`):** Represents the "Steel and Sky." Use these for core structural elements and primary branding.
*   **Tertiary/Gold (`#B8860B`):** The "Premium Mark." Reserved for highlights, thin accent lines under headers, and high-value CTAs.
*   **Surface/Dark (`#061423`):** The "Foundation." A near-black blue that provides more tonal depth than pure hex black.
*   **Teal Highlights (`#148F77`):** Use sparingly for technical details or "success" states to maintain an architectural blueprint feel.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** 
Boundaries must be defined solely through background color shifts. For instance, a `surface-container-low` section should sit against a `surface` background. To separate content, use the Spacing Scale or tonal transitions.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the surface-container tiers to create depth:
1.  **Base Layer:** `surface` (#061423)
2.  **Raised Sections:** `surface-container-low` (#0F1C2C)
3.  **Interactive Cards:** `surface-container-high` (#1E2B3B)

### The Glass & Gradient Rule
To achieve a signature look, apply **Glassmorphism** to floating navigation or modal elements. Use a semi-transparent `surface-variant` with a `backdrop-filter: blur(20px)`. Main CTAs should utilize a subtle linear gradient from `primary` to `primary-container` to provide a "brushed metal" finish.

---

## 3. Typography
The typographic voice is a dialogue between classical elegance and technical precision.

*   **Display/Headlines (Cormorant Garamond):** Used for large-scale editorial statements. The high-contrast serif evokes traditional luxury and heritage.
*   **Subheadings (Barlow Condensed):** A technical, sans-serif font that mimics architectural notation. It provides a "blueprint" feel that balances the serif’s softness.
*   **Body (DM Sans / Plus Jakarta Sans):** Highly legible and modern. Used for all long-form content to ensure clarity.
*   **Labels (Space Grotesk):** Used for technical metadata and small UI labels, reinforcing the precision of the construction industry.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** and physics-based light simulation.

*   **The Layering Principle:** Stack containers using the surface-fixed tokens. A `surface-container-highest` card placed on a `surface-container` background creates natural lift without the clutter of lines.
*   **Ambient Shadows:** For floating elements (e.g., Lead Generation Modals), use "Architectural Shadows."
    *   *Blur:* 40px - 80px.
    *   *Opacity:* 4% - 8%.
    *   *Color:* Use a tinted version of `on-surface` (#D6E4F9) rather than black to simulate natural light reflecting off materials.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Blueprint Textures:** Apply a fine `px` grid texture (using `outline-variant` at 5% opacity) to background surfaces to mimic drafting paper.

---

## 5. Components

### Buttons: The Structural Anchor
*   **Primary:** Sharp corners (`0px` roundedness). Gradient fill (`primary` to `primary-container`). Typography: `label-md` in all caps.
*   **Secondary:** "Ghost" style. No fill, `outline-variant` (20% opacity) border, Gold `tertiary` text.
*   **Tertiary:** Text-only with a Gold (`#B8860B`) underline that expands on hover.

### Inputs: The Drafting Field
Text fields should not be boxes. Use a "Bottom-Line Only" approach using the `outline` token, mimicking a signature line on a contract. On focus, the line transitions to `tertiary` (Gold).

### Cards: The Monoliths
*   **Styling:** Zero border-radius.
*   **Interaction:** On hover, the card should transition from `surface-container-low` to `surface-container-high` with a subtle vertical shift (-4px).
*   **Header Accents:** Every card or section header must feature a 2px high Gold (`tertiary`) accent line, offset to the left, exactly 40px wide.

### Additional Components: The Blueprint Overlay
*   **Diagonal Dividers:** Section breaks should utilize a 3-degree diagonal tilt to break the horizontal "grid-lock."
*   **Structural Progress Bars:** For project tracking, use thin, 2px Teal (`#148F77`) lines that look like laser-levels.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use extreme white space (`spacing-24`) to separate major architectural concepts.
*   **Do** overlap elements. Let an image of a building bleed over a `surface-container` to create a 3D architectural layout.
*   **Do** use "Diagonal Dividers" to transition between high-contrast dark and light sections.

### Don’t:
*   **Don't** use rounded corners. This system is built on "Sharp Precision"; everything is `0px` radius.
*   **Don't** use standard drop shadows. If it looks like a "default shadow," it is too heavy.
*   **Don't** use divider lines between list items. Use a `spacing-4` vertical gap or a subtle color shift (`surface-dim` vs `surface-bright`).
*   **Don't** use pure white. Always use `on-surface` (#D6E4F9) or Off-white (#F5F7FA) to prevent clinical, "cheap" screen glare.