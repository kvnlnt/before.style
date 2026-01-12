import type { DocumentedElement } from "../types";

export const hr: DocumentedElement = {
  title: "hr",
  description: "Represents a thematic break between paragraph-level elements.",
  example: [
    {
      title: "Horizontal Rule",
      description: "A subtle line to separate content sections.",
      example: `<p>Content above the break.</p>\n<hr>\n<p>Content below the break.</p>`,
      code: `<hr>`,
    },
  ],
};
