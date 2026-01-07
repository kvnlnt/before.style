import type { DocumentedElement } from "../types";

export const option: DocumentedElement = {
  title: "option",
  description: "Represents an option in a select element or datalist.",
  variant: [
    {
      title: "Option",
      description: "Selectable item within a dropdown.",
      example: `<select>\n  <option value="1">First option</option>\n  <option value="2">Second option</option>\n</select>`,
      code: `<option value="val">Label</option>`,
    },
  ],
};
