import type { DocumentedElement } from "../types";

export const header: DocumentedElement = {
  title: "header",
  description: "Represents introductory content or navigational aids for a section or page.",
  example: [
    {
      title: "Header",
      description: "Introductory content container.",
      example: `<header>\n  <h1>Site Title</h1>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n  </nav>\n</header>`,
      code: `<header>\n  <h1>Title</h1>\n</header>`,
    },
  ],
};
