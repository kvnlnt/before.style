import type { DocumentedElement } from "../types";

export const summary: DocumentedElement = {
  title: "summary",
  description: "Specifies a visible heading for a details element.",
  example: [
    {
      title: "Summary",
      description: "Clickable heading that toggles the details content.",
      example: `<details>\n  <summary>Show more info</summary>\n  <p>Additional information here.</p>\n</details>`,
      code: `<summary>Toggle heading</summary>`,
    },
  ],
};
