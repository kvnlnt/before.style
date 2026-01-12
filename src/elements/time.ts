import type { DocumentedElement } from "../types";

export const time: DocumentedElement = {
  title: "time",
  description: "Represents a specific period in time or a machine-readable datetime.",
  example: [
    {
      title: "Time",
      description: "Machine-readable date/time with human display.",
      example: `<p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>`,
      code: `<time datetime="2024-01-15">Jan 15</time>`,
    },
  ],
};
