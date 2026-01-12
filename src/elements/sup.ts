import type { DocumentedElement } from "../types";

export const sup: DocumentedElement = {
  title: "sup",
  description: "Represents superscript text.",
  example: [
    {
      title: "Superscript",
      description: "Text positioned above the baseline.",
      example: `<p>E = mc<sup>2</sup> is Einstein's famous equation.</p>`,
      code: `x<sup>2</sup>`,
    },
  ],
};
