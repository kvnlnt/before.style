import type { DocumentedElement } from "../types";

export const aside: DocumentedElement = {
  title: "aside",
  description: "Represents content tangentially related to the main content, often used for sidebars.",
  example: [
    {
      title: "Aside",
      description: "Sidebar or supplementary content with subtle styling.",
      example: `<aside>\n  <h3>Related Links</h3>\n  <ul>\n    <li><a href="#">Link one</a></li>\n    <li><a href="#">Link two</a></li>\n  </ul>\n</aside>`,
      code: `<aside>\n  <!-- supplementary content -->\n</aside>`,
    },
  ],
};
