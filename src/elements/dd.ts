import type { DocumentedElement } from "../types";

export const dd: DocumentedElement = {
  title: "dd",
  description: "Provides the description or value for a term in a description list.",
  example: [
    {
      title: "Definition Description",
      description: "Indented description for a term.",
      example: `<dl>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>`,
      code: `<dd>Description text</dd>`,
    },
  ],
};
