import type { DocumentedElement } from "../types";

export const span: DocumentedElement = {
  title: "span",
  description: "A generic inline container for phrasing content.",
  example: [
    {
      title: "Span",
      description: "Generic inline container.",
      example: `<p>This is <span>inline content</span> in a paragraph.</p>`,
      code: `<span>inline</span>`,
    },
  ],
};
