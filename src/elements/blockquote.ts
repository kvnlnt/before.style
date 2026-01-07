import type { DocumentedElement } from "../types";

export const blockquote: DocumentedElement = {
  title: "blockquote",
  description: "Indicates an extended quotation from another source.",
  variant: [
    {
      title: "Block Quote",
      description: "Indented with a left border to distinguish quoted content.",
      example: `<blockquote>\n  <p>The only way to do great work is to love what you do.</p>\n</blockquote>`,
      code: `<blockquote>\n  <p>Quoted text here.</p>\n</blockquote>`,
    },
  ],
};
