import type { DocumentedElement } from "../types";

export const li: DocumentedElement = {
  title: "li",
  description: "Represents an item in a list.",
  variant: [
    {
      title: "List Item",
      description: "Individual list items with comfortable spacing.",
      example: `<ul>\n  <li>A single list item with proper vertical rhythm</li>\n</ul>`,
      code: `<li>List item content</li>`,
    },
  ],
};
