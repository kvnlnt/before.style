import type { DocumentedElement } from "../types";

export const small: DocumentedElement = {
  title: "small",
  description: "Represents side comments or small print.",
  variant: [
    {
      title: "Small Print",
      description: "Reduced font size for fine print or disclaimers.",
      example: `<p>Price: $99 <small>(plus tax)</small></p>`,
      code: `<small>fine print</small>`,
    },
  ],
};
