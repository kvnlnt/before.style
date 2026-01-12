import type { DocumentedElement } from "../types";

export const progress: DocumentedElement = {
  title: "progress",
  description: "Displays the completion progress of a task.",
  example: [
    {
      title: "Progress Bar",
      description: "Visual progress indicator using the primary color.",
      example: `<progress value="70" max="100"></progress>`,
      code: `<progress value="70" max="100"></progress>`,
    },
  ],
};
