import type { DocumentedElement } from "../types";

export const ol: DocumentedElement = {
  title: "ol",
  description: "Represents an ordered list of items.",
  example: [
    {
      title: "Basic Ordered List",
      description: "A numbered list for sequential content.",
      example: `<ol>\n  <li>First step</li>\n  <li>Second step</li>\n  <li>Third step</li>\n</ol>`,
      code: `<ol>\n  <li>First step</li>\n  <li>Second step</li>\n  <li>Third step</li>\n</ol>`,
    },
  ],
};
