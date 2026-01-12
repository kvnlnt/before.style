import type { DocumentedComponent } from "../types";

export const accordion: DocumentedComponent = {
  title: "Accordion",
  description: "A vertically stacked set of interactive headings that each reveal a section of content.",
  example: [
    {
      title: "Basic Accordion",
      description:
        "A simple accordion using native details/summary elements with exclusive behavior via the name attribute.",
      preview: `<div role="region" aria-label="FAQ">
  <details name="accordion-basic">
    <summary>What is an accordion?</summary>
    <p>An accordion is a vertically stacked set of interactive headings that each reveal a section of content.</p>
  </details>
  <details name="accordion-basic">
    <summary>When should I use an accordion?</summary>
    <p>Use accordions when you have multiple sections of content that users may want to browse through without leaving the page.</p>
  </details>
  <details name="accordion-basic">
    <summary>Are accordions accessible?</summary>
    <p>Yes, when built with native details/summary elements, accordions are keyboard navigable and screen reader friendly.</p>
  </details>
</div>`,
      code: `<div role="region" aria-label="FAQ">
  <details name="accordion-group">
    <summary>Section Title</summary>
    <p>Section content...</p>
  </details>
  <details name="accordion-group">
    <summary>Another Section</summary>
    <p>More content...</p>
  </details>
</div>`,
    },
    {
      title: "Accordion with Default Open",
      description: "An accordion where one panel starts expanded using the open attribute.",
      preview: `<nav aria-label="Product categories">
  <details name="accordion-open" open>
    <summary>Electronics</summary>
    <ul>
      <li>Phones</li>
      <li>Laptops</li>
      <li>Tablets</li>
    </ul>
  </details>
  <details name="accordion-open">
    <summary>Clothing</summary>
    <ul>
      <li>Shirts</li>
      <li>Pants</li>
      <li>Shoes</li>
    </ul>
  </details>
  <details name="accordion-open">
    <summary>Home & Garden</summary>
    <ul>
      <li>Furniture</li>
      <li>Decor</li>
      <li>Plants</li>
    </ul>
  </details>
</nav>`,
      code: `<nav aria-label="Categories">
  <details name="nav-accordion" open>
    <summary>First Section (Open)</summary>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </details>
  <details name="nav-accordion">
    <summary>Second Section</summary>
    <ul>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </details>
</nav>`,
    },
    {
      title: "Nested Accordion",
      description: "Accordions can be nested to create hierarchical content structures.",
      preview: `<section aria-labelledby="docs-heading">
  <h3 id="docs-heading">Documentation</h3>
  <details name="accordion-nested">
    <summary>Getting Started</summary>
    <details>
      <summary>Installation</summary>
      <p>Run npm install to get started with the project.</p>
    </details>
    <details>
      <summary>Configuration</summary>
      <p>Edit the config file to customize your setup.</p>
    </details>
  </details>
  <details name="accordion-nested">
    <summary>API Reference</summary>
    <details>
      <summary>Components</summary>
      <p>Learn about available component APIs.</p>
    </details>
    <details>
      <summary>Utilities</summary>
      <p>Explore utility functions and helpers.</p>
    </details>
  </details>
</section>`,
      code: `<section aria-labelledby="section-title">
  <h3 id="section-title">Section Title</h3>
  <details name="parent-accordion">
    <summary>Parent Item</summary>
    <details>
      <summary>Child Item</summary>
      <p>Nested content...</p>
    </details>
  </details>
</section>`,
    },
  ],
};
