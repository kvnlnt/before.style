import type { DocumentedElement } from "../types";

export const input: DocumentedElement = {
  title: "input",
  description: "Creates interactive form controls for accepting user data.",
  variant: [
    {
      title: "Text Input",
      description: "Standard text input with clean borders and focus state.",
      example: `<input type="text" placeholder="Enter text...">`,
      code: `<input type="text" placeholder="Enter text...">`,
    },
    {
      title: "Checkbox",
      description: "Checkbox input using system accent color.",
      example: `<label><input type="checkbox"> Accept terms</label>`,
      code: `<input type="checkbox">`,
    },
    {
      title: "Radio",
      description: "Radio button for single selection from a group.",
      example: `<label><input type="radio" name="option"> Option A</label>\n<label><input type="radio" name="option"> Option B</label>`,
      code: `<input type="radio" name="group">`,
    },
  ],
};
