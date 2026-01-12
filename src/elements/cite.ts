import type { DocumentedElement } from "../types";

export const cite: DocumentedElement = {
  title: "cite",
  description: "Represents the title of a creative work being referenced.",
  example: [
    {
      title: "Citation",
      description: "Italic text for referencing creative works.",
      example: `<p>My favorite book is <cite>The Great Gatsby</cite>.</p>`,
      code: `<cite>Work Title</cite>`,
    },
  ],
};
