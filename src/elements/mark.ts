import type { DocumentedElement } from "../types";

export const mark: DocumentedElement = {
  title: "mark",
  description:
    "Represents text marked or highlighted for reference or notation.",
  variant: [
    {
      title: "Highlighted Text",
      description: "Yellow highlight for marking relevant content.",
      example: `<p>Search results: The <mark>quick brown fox</mark> jumps over the lazy dog.</p>`,
      code: `<mark>highlighted text</mark>`,
    },
  ],
};
