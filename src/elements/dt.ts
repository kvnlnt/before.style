import type { DocumentedElement } from "../types";

export const dt: DocumentedElement = {
  title: "dt",
  description: "Specifies a term in a description list.",
  variant: [
    {
      title: "Definition Term",
      description: "Bold term in a definition list.",
      example: `<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>`,
      code: `<dt>Term</dt>`,
    },
  ],
};
