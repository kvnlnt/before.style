import type { DocumentedElement } from "../types";

export const p: DocumentedElement = {
  title: "p",
  description: "Represents a paragraph of text.",
  example: [
    {
      title: "Basic Paragraph",
      description: "Standard paragraph with comfortable line height and spacing.",
      example: `<p>This is a paragraph of text. It has comfortable line height for readability and proper spacing between consecutive paragraphs.</p>
<p>This is a second paragraph demonstrating the vertical rhythm between paragraphs.</p>`,
      code: `<p>This is a paragraph of text.</p>`,
    },
  ],
};
