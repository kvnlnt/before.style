import type { DocumentedElement } from "../types";

export const figcaption: DocumentedElement = {
  title: "figcaption",
  description: "Represents a caption or legend for a figure.",
  example: [
    {
      title: "Figure Caption",
      description: "Smaller, muted text for describing figure content.",
      example: `<figcaption>Photo by Jane Doe, 2024</figcaption>`,
      code: `<figcaption>Caption text</figcaption>`,
    },
  ],
};
