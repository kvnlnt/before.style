import type { DocumentedElement } from "../types";

export const u: DocumentedElement = {
  title: "u",
  description: "Represents text with an unarticulated annotation, such as misspelled words.",
  example: [
    {
      title: "Underline",
      description: "Wavy underline for annotated text like spelling errors.",
      example: `<p>Check the <u>speling</u> of this word.</p>`,
      code: `<u>annotated text</u>`,
    },
  ],
};
