import type { DocumentedElement } from "../types";

export const label: DocumentedElement = {
  title: "label",
  description: "Represents a caption for an item in a user interface.",
  example: [
    {
      title: "Form Label",
      description: "Block-level label with subtle weight.",
      example: `<label>Username</label>\n<input type="text">`,
      code: `<label>Field label</label>`,
    },
  ],
};
