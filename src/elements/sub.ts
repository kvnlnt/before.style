import type { DocumentedElement } from "../types";

export const sub: DocumentedElement = {
  title: "sub",
  description: "Represents subscript text.",
  example: [
    {
      title: "Subscript",
      description: "Text positioned below the baseline.",
      example: `<p>H<sub>2</sub>O is the chemical formula for water.</p>`,
      code: `H<sub>2</sub>O`,
    },
  ],
};
