import type { DocumentedElement } from "../types";

export const optgroup: DocumentedElement = {
  title: "optgroup",
  description: "Groups related options within a select element.",
  example: [
    {
      title: "Option Group",
      description: "Groups options with a bold label.",
      example: `<select>\n  <optgroup label="Fruits">\n    <option>Apple</option>\n    <option>Banana</option>\n  </optgroup>\n  <optgroup label="Vegetables">\n    <option>Carrot</option>\n  </optgroup>\n</select>`,
      code: `<optgroup label="Group">\n  <option>Item</option>\n</optgroup>`,
    },
  ],
};
