import type { DocumentedElement } from "../types";

export const footer: DocumentedElement = {
  title: "footer",
  description:
    "Represents the footer of a section or page, typically containing authorship or copyright.",
  variant: [
    {
      title: "Footer",
      description: "Footer content container.",
      example: `<footer>\n  <p>&copy; 2024 Company Name</p>\n</footer>`,
      code: `<footer>\n  <p>Footer content</p>\n</footer>`,
    },
  ],
};
