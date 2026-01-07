import type { DocumentedElement } from "../types";

export const s: DocumentedElement = {
  title: "s",
  description: "Represents text that is no longer accurate or relevant.",
  variant: [
    {
      title: "Strikethrough",
      description: "Text with line through indicating outdated content.",
      example: `<p>Price: <s>$50</s> $35</p>`,
      code: `<s>old text</s>`,
    },
  ],
};
