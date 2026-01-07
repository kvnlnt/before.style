import type { DocumentedElement } from "../types";

export const i: DocumentedElement = {
  title: "i",
  description:
    "Represents text in an alternate voice or mood, such as technical terms or foreign phrases.",
  variant: [
    {
      title: "Italic",
      description: "Italic text for alternate voice or mood.",
      example: `<p>The word <i>café</i> is from French.</p>`,
      code: `<i>italic text</i>`,
    },
  ],
};
