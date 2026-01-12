import type { DocumentedElement } from "../types";

export const fieldset: DocumentedElement = {
  title: "fieldset",
  description: "Groups related elements within a form.",
  example: [
    {
      title: "Form Group",
      description: "Bordered container for grouping related form fields.",
      example: `<fieldset>\n  <legend>Personal Info</legend>\n  <label>Name</label>\n  <input type="text">\n  <label>Email</label>\n  <input type="email">\n</fieldset>`,
      code: `<fieldset>\n  <legend>Group Title</legend>\n  <!-- form fields -->\n</fieldset>`,
    },
  ],
};
