# Design Guidelines: Hello World Website

## Design Approach

**Selected Approach:** Minimalist with Typographic Focus

This is a single-purpose page centered on displaying text. The design emphasizes clean typography, balanced spacing, and subtle visual interest without unnecessary complexity.

**Design Principles:**
- Typography as the primary visual element
- Generous whitespace for breathing room
- Subtle animations for polish
- Responsive scaling across all devices

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 8% (deep charcoal)
- Primary Text: 0 0% 98% (near-white)
- Accent: 200 95% 65% (vibrant cyan-blue for subtle visual interest)

**Light Mode:**
- Background: 0 0% 98% (off-white)
- Primary Text: 222 15% 15% (dark charcoal)
- Accent: 200 85% 55% (deep cyan-blue)

### B. Typography

**Primary Heading:**
- Font: 'Inter' or 'SF Pro Display' from Google Fonts
- Size: text-9xl (desktop), text-6xl (tablet), text-5xl (mobile)
- Weight: font-bold (700)
- Letter spacing: tracking-tight
- Line height: leading-none

**Supporting Elements (if any):**
- Font: Same family, lighter weight
- Size: text-xl to text-2xl

### C. Layout System

**Spacing:**
- Use Tailwind units: 4, 8, 16, 24 for consistent rhythm
- Viewport centering: flex items-center justify-center
- Minimum height: min-h-screen for full viewport coverage

**Container Strategy:**
- No max-width constraints - let text scale naturally
- Center-aligned: text-center
- Padding: px-4 (mobile), px-8 (desktop) for safe margins

### D. Component Library

**Main Display:**
- Single centered text element
- Optional: Subtle fade-in animation on load (animate-fade-in, duration-1000)
- Optional: Gentle pulsing glow effect on the accent color (subtle, slow)

**Optional Enhancement:**
- Subtle gradient background (linear gradient from primary background to slightly lighter/darker variant)
- Cursor-responsive subtle parallax or color shift on hover

### E. Animations

**Entry Animation:**
- Text fades in with slight upward movement (translate-y-4 to translate-y-0)
- Duration: 800ms
- Easing: ease-out
- Delay: 100ms after page load

**Hover State (Optional):**
- Very subtle color shift on hover
- Smooth transition (transition-colors duration-300)

---

## Implementation Notes

**Page Structure:**
- Single full-viewport container
- Centered content both vertically and horizontally
- No navigation, footer, or additional sections needed
- Clean HTML structure with minimal markup

**Typography Treatment:**
- "Hello World" rendered as a single `<h1>` element
- Consider splitting into styled `<span>` elements for "Hello" and "World" if adding subtle color variation
- Ensure text remains readable at all sizes

**Responsive Behavior:**
- Text scales smoothly across breakpoints
- Maintain centering at all viewport sizes
- Touch-friendly spacing on mobile (adequate padding)

**Accessibility:**
- High contrast ratios (WCAG AAA compliance)
- Semantic HTML (`<h1>` for main heading)
- Readable font sizes across devices

---

## Images

**No images required** - This is a typography-focused design where the text itself is the hero element.

---

## Design Distinction

This design stands out through:
- Bold, oversized typography that commands attention
- Sophisticated use of whitespace
- Subtle, tasteful animations that add polish without distraction
- Clean, focused execution of a simple concept

The simplicity is the strength - no clutter, just beautiful typography and thoughtful spacing.