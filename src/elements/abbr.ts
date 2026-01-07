import type { DocumentedElement } from "../types";

export const abbr: DocumentedElement = {
  title: "abbr",
  description:
    "Represents an abbreviation or acronym with an optional title for the full description.",
  variant: [
    {
      title: "Abbreviation",
      description: "Dotted underline indicates hover for full text.",
      example: `<p>The <abbr title="World Wide Web">WWW</abbr> changed everything.</p>`,
      code: `<abbr title="Full text">ABBR</abbr>`,
    },
  ],
};
