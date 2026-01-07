import type { DocumentedElement } from "../types";

export const tr: DocumentedElement = {
  title: "tr",
  description: "Represents a row of cells in a table.",
  variant: [
    {
      title: "Table Row",
      description: "Horizontal row containing table cells.",
      example: `<table>\n  <tr><th>Col 1</th><th>Col 2</th></tr>\n  <tr><td>A1</td><td>A2</td></tr>\n  <tr><td>B1</td><td>B2</td></tr>\n</table>`,
      code: `<tr><td>Cell</td></tr>`,
    },
  ],
};
