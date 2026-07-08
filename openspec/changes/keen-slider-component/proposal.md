## Why

The Sobre page needs a visual gallery to showcase photos of the university campus. Currently the page has only text content and a hero banner. A slider/carousel of UVA campus images will make the page more engaging and visually appealing.

## What Changes

- Install `keen-slider` as a project dependency
- Create a reusable generic `Slider` component that accepts any children (images, divs, cards, etc.)
- Integrate the slider on the Sobre page (`src/pages/sobre-page.tsx`) with the images from `public/uva/`

## Capabilities

### New Capabilities
- `image-slider`: Reusable slider/carousel component built on keen-slider that accepts arbitrary children and renders them as slides

### Modified Capabilities
- `sobre-page`: Add an image slider gallery section to the Sobre page layout

## Impact

- **New dependency**: `keen-slider` added to `package.json`
- **New component**: `src/components/image-slider/slider.tsx` — reusable slider component
- **Modified page**: `src/pages/sobre-page.tsx` — add slider section with UVA images
