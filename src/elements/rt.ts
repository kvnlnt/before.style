import type { DocumentedElement } from "../types";

export const rt: DocumentedElement = {
  title: "rt",
  description: "Specifies the ruby text component of a ruby annotation.",
  example: [
    {
      title: "Ruby Text",
      description: "Small annotation text above base character.",
      example: `<ruby>漢<rt>kan</rt></ruby>`,
      code: `<rt>annotation</rt>`,
    },
  ],
};
