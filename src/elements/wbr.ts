import type { DocumentedElement } from "../types";

export const wbr: DocumentedElement = {
  title: "wbr",
  description: "Represents an optional line break opportunity.",
  variant: [
    {
      title: "Word Break Opportunity",
      description: "Suggests where a line break may occur.",
      example: `<p>super<wbr>cali<wbr>fragilistic</p>`,
      code: `long<wbr>word`,
    },
  ],
};
