import type { DocumentedElement } from "../types";

export const textarea: DocumentedElement = {
  title: "textarea",
  description: "Represents a multi-line plain text editing control.",
  example: [
    {
      title: "Text Area",
      description: "Multi-line input with resizable height.",
      example: `<textarea placeholder="Enter your message..."></textarea>`,
      code: `<textarea placeholder="Enter text..."></textarea>`,
    },
  ],
};
