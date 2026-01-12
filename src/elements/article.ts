import type { DocumentedElement } from "../types";

export const article: DocumentedElement = {
  title: "article",
  description: "Represents a self-contained composition intended for independent distribution or reuse.",
  example: [
    {
      title: "Article",
      description: "Self-contained content block with implicit padding.",
      example: `<article>\n  <h2>Article Title</h2>\n  <p>Article content goes here...</p>\n</article>`,
      code: `<article>\n  <h2>Title</h2>\n  <p>Content...</p>\n</article>`,
    },
  ],
};
