import type { DocumentedElement } from "../types";

export const h2: DocumentedElement = {
  title: "h2",
  description: "Represents a second-level section heading.",
  variant: [
    {
      title: "Heading 2",
      description: "Major section heading at 2rem size.",
      example: `<h2>Section Heading</h2>`,
      code: `<h2>Heading Text</h2>`,
    },
  ],
};
