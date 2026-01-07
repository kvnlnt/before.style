import type { DocumentedElement } from "../types";

export const em: DocumentedElement = {
  title: "em",
  description: "Marks text with stress emphasis.",
  variant: [
    {
      title: "Emphasized Text",
      description: "Italic text for stress emphasis.",
      example: `<p>I <em>really</em> mean it.</p>`,
      code: `<em>emphasized text</em>`,
    },
  ],
};
