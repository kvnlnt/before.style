import type { DocumentedElement } from "../types";

export const iframe: DocumentedElement = {
  title: "iframe",
  description: "Embeds another HTML page within the current page.",
  example: [
    {
      title: "Iframe",
      description: "Embedded frame with no border.",
      example: `<iframe src="https://example.com" title="Embedded page"></iframe>`,
      code: `<iframe src="url" title="Description"></iframe>`,
    },
  ],
};
