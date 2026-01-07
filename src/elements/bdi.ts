import type { DocumentedElement } from "../types";

export const bdi: DocumentedElement = {
  title: "bdi",
  description:
    "Isolates a span of text that might be formatted in a different direction from surrounding text.",
  variant: [
    {
      title: "Bidirectional Isolation",
      description: "Isolates text direction from surrounding content.",
      example: `<p>User: <bdi>محمد</bdi> - 5 posts</p>`,
      code: `<bdi>isolated text</bdi>`,
    },
  ],
};
