## Why

The site lacks a newsletter signup mechanism, making it difficult to build an email audience and retain readers. A dedicated newsletter section with a compelling CTA will grow the subscriber base directly from the homepage.

## What Changes

- Add a newsletter subscription section to the homepage
- Include a gradient background (45deg, bright red to dark red) for visual impact
- CTA heading: "A ética que move o Jornalismo"
- Email input + submit button that POSTs to `/newsletter/register`
- Success/error feedback states

## Capabilities

### New Capabilities
- `newsletter-section`: Newsletter signup UI with gradient styling, email input, and API integration

### Modified Capabilities
- none

## Impact

- New component: `src/components/newsletter-section/` directory
- New API integration: POST to `/newsletter/register`
- Homepage will need to import and render the new section
