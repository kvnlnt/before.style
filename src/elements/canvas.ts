import type { DocumentedElement } from "../types";

export const canvas: DocumentedElement = {
  title: "canvas",
  description: "Container for graphics drawn via scripting (usually JavaScript).",
  example: [
    {
      title: "Canvas",
      description: "Drawing surface with responsive sizing.",
      example: `<canvas width="300" height="150">\n  Your browser does not support canvas.\n</canvas>`,
      code: `<canvas width="300" height="150"></canvas>`,
    },
  ],
};
