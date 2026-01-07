import type { DocumentedElement } from "../types";

export const legend: DocumentedElement = {
  title: "legend",
  description: "Represents a caption for a fieldset.",
  variant: [
    {
      title: "Fieldset Legend",
      description: "Caption displayed on fieldset border.",
      example: `<fieldset>\n  <legend>Account Info</legend>\n  <label>Email</label>\n  <input type="email">\n</fieldset>`,
      code: `<legend>Group Title</legend>`,
    },
  ],
};
