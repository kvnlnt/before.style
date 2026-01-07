import type { DocumentedElement } from "../types";

export const q: DocumentedElement = {
  title: "q",
  description: "Represents a short inline quotation.",
  variant: [
    {
      title: "Inline Quote",
      description: "Automatically wrapped with quotation marks.",
      example: `<p>She said, <q>This is amazing!</q></p>`,
      code: `<q>Quoted text</q>`,
    },
  ],
};
