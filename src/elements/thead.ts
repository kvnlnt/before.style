import type { DocumentedElement } from "../types";

export const thead: DocumentedElement = {
  title: "thead",
  description: "Groups the header content rows of a table.",
  example: [
    {
      title: "Table Head",
      description: "Container for table header rows.",
      example: `<table>\n  <thead>\n    <tr><th>Product</th><th>Price</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Widget</td><td>$10</td></tr>\n  </tbody>\n</table>`,
      code: `<thead>\n  <tr><th>Header</th></tr>\n</thead>`,
    },
  ],
};
