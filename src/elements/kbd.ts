import type { DocumentedElement } from "../types";

export const kbd: DocumentedElement = {
  title: "kbd",
  description: "Represents user keyboard input.",
  variant: [
    {
      title: "Keyboard Key",
      description:
        "Styled like a physical keyboard key with border and shadow.",
      example: `<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>`,
      code: `<kbd>Ctrl</kbd>`,
    },
  ],
};
