import type { DocumentedElement } from "../types";

export const details: DocumentedElement = {
  title: "details",
  description: "Creates a disclosure widget from which the user can obtain additional information.",
  example: [
    {
      title: "Disclosure Widget",
      description: "Expandable content with toggle control.",
      example: `<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content revealed when expanded.</p>\n</details>`,
      code: `<details>\n  <summary>Title</summary>\n  <p>Content...</p>\n</details>`,
    },
  ],
};
