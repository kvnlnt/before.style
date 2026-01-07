import type { DocumentedElement } from "../types";

export const br: DocumentedElement = {
  title: "br",
  description: "Produces a line break in text.",
  variant: [
    {
      title: "Line Break",
      description: "Forces a line break within text.",
      example: `<p>Line one<br>Line two</p>`,
      code: `<br>`,
    },
  ],
};
