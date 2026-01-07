import type { DocumentedElement } from "../types";

export const varElement: DocumentedElement = {
  title: "var",
  description:
    "Represents the name of a variable in a mathematical or programming context.",
  variant: [
    {
      title: "Variable",
      description: "Italic monospace for variable names.",
      example: `<p>Let <var>x</var> equal the number of items.</p>`,
      code: `<var>variableName</var>`,
    },
  ],
};
