import type { DocumentedElement } from "../types";

export const th: DocumentedElement = {
  title: "th",
  description: "Represents a header cell in a table.",
  example: [
    {
      title: "Table Header",
      description: "Bold header cell with bottom border.",
      example: `<table>\n  <tr><th>Name</th><th>Age</th><th>City</th></tr>\n  <tr><td>Alice</td><td>30</td><td>NYC</td></tr>\n</table>`,
      code: `<th>Header</th>`,
    },
  ],
};
