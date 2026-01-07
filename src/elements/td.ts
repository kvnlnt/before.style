import type { DocumentedElement } from "../types";

export const td: DocumentedElement = {
  title: "td",
  description: "Represents a data cell in a table.",
  variant: [
    {
      title: "Table Data Cell",
      description: "Standard data cell with padding and border.",
      example: `<table>\n  <tr><th>Item</th><th>Price</th></tr>\n  <tr><td>Apple</td><td>$1.50</td></tr>\n  <tr><td>Banana</td><td>$0.75</td></tr>\n</table>`,
      code: `<td>Cell data</td>`,
    },
  ],
};
