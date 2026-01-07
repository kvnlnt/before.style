import type { DocumentedElement } from "../types";

export const tfoot: DocumentedElement = {
  title: "tfoot",
  description: "Groups the footer content rows of a table.",
  variant: [
    {
      title: "Table Footer",
      description: "Container for table footer rows, often for totals.",
      example: `<table>\n  <thead><tr><th>Item</th><th>Cost</th></tr></thead>\n  <tbody><tr><td>Item 1</td><td>$5</td></tr></tbody>\n  <tfoot><tr><td>Total</td><td>$5</td></tr></tfoot>\n</table>`,
      code: `<tfoot>\n  <tr><td>Footer</td></tr>\n</tfoot>`,
    },
  ],
};
