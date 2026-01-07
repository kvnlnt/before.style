import type { DocumentedElement } from "../types";

export const nav: DocumentedElement = {
  title: "nav",
  description: "Represents a section with navigation links.",
  variant: [
    {
      title: "Navigation",
      description: "Navigation block for site or page links.",
      example: `<nav>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</nav>`,
      code: `<nav>\n  <a href="#">Link</a>\n</nav>`,
    },
  ],
};
