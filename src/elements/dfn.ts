import type { DocumentedElement } from "../types";

export const dfn: DocumentedElement = {
  title: "dfn",
  description: "Indicates the defining instance of a term.",
  variant: [
    {
      title: "Definition",
      description: "Italic styling for terms being defined.",
      example: `<p>A <dfn>pixel</dfn> is the smallest unit of a digital image.</p>`,
      code: `<dfn>term</dfn>`,
    },
  ],
};
