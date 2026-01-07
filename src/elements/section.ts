import type { DocumentedElement } from "../types";

export const section: DocumentedElement = {
  title: "section",
  description: "Represents a standalone section of a document.",
  variant: [
    {
      title: "Section",
      description: "Thematic grouping of content.",
      example: `<section>\n  <h2>Section Heading</h2>\n  <p>Section content...</p>\n</section>`,
      code: `<section>\n  <h2>Heading</h2>\n  <p>Content...</p>\n</section>`,
    },
  ],
};
