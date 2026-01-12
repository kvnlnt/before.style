import type { DocumentedElement } from "../types";

export const data: DocumentedElement = {
  title: "data",
  description: "Links content with a machine-readable translation.",
  example: [
    {
      title: "Data",
      description: "Machine-readable value with human display.",
      example: `<p>Price: <data value="49.99">$49.99</data></p>`,
      code: `<data value="123">Display</data>`,
    },
  ],
};
