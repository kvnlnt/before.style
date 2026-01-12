import type { DocumentedElement } from "../types";

export const div: DocumentedElement = {
  title: "div",
  description: "A generic container for flow content with no semantic meaning.",
  example: [
    {
      title: "Div Container",
      description: "Generic block-level container.",
      example: `<div>\n  <p>Content inside a div.</p>\n</div>`,
      code: `<div>content</div>`,
    },
  ],
};
