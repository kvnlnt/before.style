import type { DocumentedElement } from "../types";

export const ul: DocumentedElement = {
  title: "ul",
  description: "Represents an unordered list of items.",
  variant: [
    {
      title: "Basic Unordered List",
      description: "A bullet list with proper spacing and indentation.",
      example: `<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>`,
      code: `<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>`,
    },
    {
      title: "Nested List",
      description: "Lists can be nested for hierarchical content.",
      example: `<ul>\n  <li>Parent item\n    <ul>\n      <li>Child item</li>\n      <li>Another child</li>\n    </ul>\n  </li>\n  <li>Another parent</li>\n</ul>`,
      code: `<ul>\n  <li>Parent item\n    <ul>\n      <li>Child item</li>\n    </ul>\n  </li>\n</ul>`,
    },
  ],
};
