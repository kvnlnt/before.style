import type { DocumentedElement } from "../types";

export const datalist: DocumentedElement = {
  title: "datalist",
  description:
    "Contains a set of option elements representing predefined options for an input.",
  variant: [
    {
      title: "Datalist",
      description: "Provides autocomplete options for an input.",
      example: `<input list="browsers" placeholder="Choose a browser">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n  <option value="Safari">\n</datalist>`,
      code: `<datalist id="list">\n  <option value="Option">\n</datalist>`,
    },
  ],
};
