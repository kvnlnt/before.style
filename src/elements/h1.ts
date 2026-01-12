import type { DocumentedElement } from "../types";

export const h1: DocumentedElement = {
  title: "h1",
  description: "Represents the highest level section heading.",
  example: [
    {
      title: "Page Heading",
      description: "The main heading of the page. Bold and large for clear hierarchy.",
      example: `<h1>Main Page Title</h1>`,
      code: `<h1>Main Page Title</h1>`,
    },
  ],
};
