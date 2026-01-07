import type { DocumentedElement } from "../types";

export const dl: DocumentedElement = {
  title: "dl",
  description: "Represents a description list of term-description pairs.",
  variant: [
    {
      title: "Description List",
      description:
        "A list of terms and their descriptions, perfect for glossaries or metadata.",
      example: `<dl>\n  <dt>Term</dt>\n  <dd>The definition or description of the term.</dd>\n  <dt>Another Term</dt>\n  <dd>Another definition.</dd>\n</dl>`,
      code: `<dl>\n  <dt>Term</dt>\n  <dd>Definition</dd>\n</dl>`,
    },
  ],
};
