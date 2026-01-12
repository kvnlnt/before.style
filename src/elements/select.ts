import type { DocumentedElement } from "../types";

export const select: DocumentedElement = {
  title: "select",
  description: "Represents a control providing a menu of options.",
  example: [
    {
      title: "Select Dropdown",
      description: "Dropdown menu for selecting from predefined options.",
      example: `<select>\n  <option>Choose an option</option>\n  <option>Option 1</option>\n  <option>Option 2</option>\n  <option>Option 3</option>\n</select>`,
      code: `<select>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>`,
    },
  ],
};
