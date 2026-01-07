import type { DocumentedElement } from "../types";

export const b: DocumentedElement = {
  title: "b",
  description:
    "Represents text stylistically offset from normal text without conveying extra importance.",
  variant: [
    {
      title: "Bold",
      description: "Bold text for stylistic offset.",
      example: `<p>The <b>quick</b> brown fox jumps.</p>`,
      code: `<b>bold text</b>`,
    },
  ],
};
