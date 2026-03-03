# Madhab Health Care

## Current State
A wellness clinic website with:
- Navbar, Hero (photo background with blob shapes)
- Services section (3 circular icon badges: Acupressure, Ayurvedic, Stress Therapy)
- Testimonials carousel
- Booking form (two-column: Google Maps + form)
- FAQ accordion
- Footer (slim bar)
- WhatsApp floating button

App.tsx renders: Hero → Services → Testimonials → BookingForm → FAQ → Footer

## Requested Changes (Diff)

### Add
- New `AcupuncturePoints` section placed between Services and Testimonials
- 5 acupuncture point cards, each containing:
  - Generated image (medical illustration of the point)
  - Point code + name (e.g. "LI4 – He Gu")
  - Body location (e.g. "Back of hand, between thumb and index finger")
  - 2–3 key health benefits
- Section heading: "Key Acupuncture Points"
- Navigation anchor: `#acupuncture-points`

### Modify
- App.tsx: import and insert `<AcupuncturePoints />` between `<Services />` and `<Testimonials />`
- Navbar: optionally add "Acupuncture Points" nav link pointing to `#acupuncture-points`

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/components/AcupuncturePoints.tsx`
   - Data array of 5 points: LI4, ST36, GV20, PC6, LV3 with code, name, location, benefits
   - Each card uses the generated image from `/assets/generated/`
   - Card layout: image top (rounded), code badge, name, location line, benefits list
   - Use a horizontal scroll or a 3+2 responsive grid
   - Apply reveal animation matching the rest of the site
   - Add `data-ocid` markers on each card
2. Update `App.tsx` to include `<AcupuncturePoints />` between Services and Testimonials
