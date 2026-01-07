import type { DocumentedElement } from "../types";

export const body: DocumentedElement = {
  title: "body",
  description: "Represents the content of an HTML document.",
  variant: [
    {
      title: "Default Body",
      description:
        "Clean, readable defaults with system fonts, comfortable line height, and responsive max-width for optimal reading.",
      example: `<p>The body element provides the foundation for all content. It uses system fonts for fast loading and familiar appearance.</p>`,
      code: `<body>\n  <h1>Page Title</h1>\n  <p>Content goes here.</p>\n</body>`,
    },
  ],
};
