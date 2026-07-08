## Context

The Sobre page currently has a hero banner, institutional text, and contact info. We need to add an image gallery slider to showcase UVA campus photos. The project uses React 19, TypeScript, Tailwind CSS 4, and follows shadcn/ui component patterns.

## Goals / Non-Goals

**Goals:**
- Install `keen-slider` as a project dependency
- Create a reusable `Slider` component that accepts any children and renders them as slides
- Integrate the slider on the Sobre page with the 4 images from `public/uva/`

**Non-Goals:**
- No custom slider implementation from scratch (use keen-slider)
- No complex navigation patterns beyond arrows and dots
- No responsive breakpoint customization beyond what keen-slider offers by default

## Decisions

- **Library choice: keen-slider over react-slick or swiper**: keen-slider is lightweight (~7KB gzipped), has no dependencies, and provides a simple React hook (`useKeenSlider`) that composes naturally with React's component model. react-slick has more baggage; swiper is heavier for a simple gallery.
- **Generic component API**: The Slider component accepts `children` and optional `options` (keen-slider config). This makes it reusable for any content type (images, cards, divs) without coupling to image-specific logic.
- **Arrow navigation**: Custom prev/next arrow buttons positioned absolutely on the sides.
- **Dots navigation**: Optional dot indicators at the bottom for slide position context.
- **File structure**: Place the slider component under `src/components/image-slider/` following the existing component folder pattern with kebab-case naming.

## Risks / Trade-offs

- **keen-slider version compatibility** → Pin the version in package.json and verify it works with React 19
- **Images not optimized** → The 4 JPG images in `public/uva/` are used directly; no lazy loading or optimization in scope
