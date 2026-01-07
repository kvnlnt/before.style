import type { DocumentedElement } from "../types";

export const output: DocumentedElement = {
  title: "output",
  description: "Container for the result of a calculation or user action.",
  variant: [
    {
      title: "Output",
      description: "Displays calculation results inline.",
      example: `<p>Total: <output>42</output></p>`,
      code: `<output>result</output>`,
    },
  ],
};
