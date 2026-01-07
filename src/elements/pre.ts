import type { DocumentedElement } from "../types";

export const pre: DocumentedElement = {
  title: "pre",
  description:
    "Represents preformatted text preserving whitespace and line breaks.",
  variant: [
    {
      title: "Preformatted Text",
      description:
        "Preserves whitespace and uses monospace font with subtle background.",
      example: `<pre>Line 1\nLine 2\n  Indented line</pre>`,
      code: `<pre>Preformatted text here</pre>`,
    },
  ],
};
