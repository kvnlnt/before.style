import type { DocumentedElement } from "../types";

export const bdo: DocumentedElement = {
  title: "bdo",
  description: "Overrides the current text directionality.",
  variant: [
    {
      title: "Bidirectional Override",
      description: "Forces text direction override.",
      example: `<p><bdo dir="rtl">This text is reversed</bdo></p>`,
      code: `<bdo dir="rtl">text</bdo>`,
    },
  ],
};
