import type { DocumentedElement } from "../types";

export const a: DocumentedElement = {
  title: "a",
  description: "Anchor element that creates a hyperlink to other pages, files, or locations.",
  example: [
    {
      title: "Default Link",
      description: "A standard hyperlink with underline styling that inherits the current text color.",
      example: `<a href="#">Click here to learn more</a>`,
      code: `<a href="#">Click here to learn more</a>`,
    },
    {
      title: "Visited Link",
      description: "Links that have been visited maintain the current color with slightly reduced opacity.",
      example: `<a href="#visited-example">Previously visited link</a>`,
      code: `<a href="/previously-visited-page">Previously visited link</a>`,
    },
    {
      title: "External Link",
      description: 'Links with target="_blank" automatically display an external link indicator (↗).',
      example: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>`,
      code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>`,
    },
    {
      title: "Download Link",
      description: "Links with the download attribute display a download indicator (↓) before the text.",
      example: `<a href="/files/document.pdf" download>Download PDF</a>`,
      code: `<a href="/files/document.pdf" download>Download PDF</a>`,
    },
    {
      title: "Email Link",
      description: "Links with mailto: protocol display an email icon (✉) before the text.",
      example: `<a href="mailto:hello@example.com">hello@example.com</a>`,
      code: `<a href="mailto:hello@example.com">hello@example.com</a>`,
    },
    {
      title: "Phone Link",
      description: "Links with tel: protocol display a phone icon (📞) before the text.",
      example: `<a href="tel:+1234567890">+1 (234) 567-890</a>`,
      code: `<a href="tel:+1234567890">+1 (234) 567-890</a>`,
    },
    {
      title: "Disabled Link",
      description: 'Use aria-disabled="true" to visually disable a link while maintaining accessibility.',
      example: `<a href="#" aria-disabled="true">Unavailable link</a>`,
      code: `<a href="#" aria-disabled="true">Unavailable link</a>`,
    },
    {
      title: "Current Page Link",
      description:
        'Use aria-current="page" to indicate the current page in navigation. The link appears bold without underline.',
      example: `<nav>
  <a href="/">Home</a>
  <a href="/about" aria-current="page">About</a>
  <a href="/contact">Contact</a>
</nav>`,
      code: `<a href="/about" aria-current="page">About</a>`,
    },
    {
      title: "Skip Link",
      description: "A hidden link that becomes visible on focus, allowing keyboard users to skip to main content.",
      example: `<a href="#main-content">Skip to main content</a>
<main id="main-content">Main content here...</main>`,
      code: `<a href="#main-content">Skip to main content</a>`,
    },
  ],
};
