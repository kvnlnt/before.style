import type { DocumentedElement } from "../types";

export const samp: DocumentedElement = {
  title: "samp",
  description: "Represents sample output from a computer program.",
  variant: [
    {
      title: "Sample Output",
      description: "Monospace font for computer output.",
      example: `<p>The error was: <samp>File not found</samp></p>`,
      code: `<samp>output text</samp>`,
    },
  ],
};
