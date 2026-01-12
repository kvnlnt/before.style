import type { DocumentedElement } from "../types";

export const tbody: DocumentedElement = {
  title: "tbody",
  description: "Groups the body content rows of a table.",
  example: [
    {
      title: "Table Body",
      description: "Container for table body rows.",
      example: `<table>\n  <thead>\n    <tr><th>Name</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td></tr>\n    <tr><td>Bob</td></tr>\n  </tbody>\n</table>`,
      code: `<tbody>\n  <tr><td>Data</td></tr>\n</tbody>`,
    },
  ],
};
