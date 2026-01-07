import type { DocumentedElement } from "../types";

export const del: DocumentedElement = {
  title: "del",
  description: "Represents text that has been deleted from a document.",
  variant: [
    {
      title: "Deleted Text",
      description: "Strikethrough styling to indicate removed content.",
      example: `<p>Price: <del>$50</del> $30</p>`,
      code: `<del>deleted text</del>`,
    },
  ],
};
