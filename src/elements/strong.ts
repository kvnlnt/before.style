import type { DocumentedElement } from "../types";

export const strong: DocumentedElement = {
  title: "strong",
  description: "Indicates text with strong importance or urgency.",
  variant: [
    {
      title: "Strong Text",
      description: "Bold text for emphasis and importance.",
      example: `<p>This is <strong>very important</strong> information.</p>`,
      code: `<strong>important text</strong>`,
    },
  ],
};
