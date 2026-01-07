import type { DocumentedElement } from "../types";

export const main: DocumentedElement = {
  title: "main",
  description: "Represents the dominant content of the body of a document.",
  variant: [
    {
      title: "Main Content",
      description: "Primary content area of the document.",
      example: `<main>\n  <h1>Page Title</h1>\n  <p>Main content goes here...</p>\n</main>`,
      code: `<main>\n  <!-- primary content -->\n</main>`,
    },
  ],
};
