import type { DocumentedElement } from "../types";

export const ins: DocumentedElement = {
  title: "ins",
  description: "Represents text that has been added to a document.",
  example: [
    {
      title: "Inserted Text",
      description: "Underlined to indicate newly added content.",
      example: `<p>We now offer <ins>free shipping</ins> on all orders.</p>`,
      code: `<ins>inserted text</ins>`,
    },
  ],
};
