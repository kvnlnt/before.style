import type { DocumentedElement } from "../types";

export const caption: DocumentedElement = {
  title: "caption",
  description: "Specifies the title of a table.",
  variant: [
    {
      title: "Table Caption",
      description: "Descriptive title displayed above the table.",
      example: `<table>\n  <caption>Monthly Sales Data</caption>\n  <tr><th>Month</th><th>Sales</th></tr>\n  <tr><td>Jan</td><td>$1,000</td></tr>\n</table>`,
      code: `<caption>Table title</caption>`,
    },
  ],
};
