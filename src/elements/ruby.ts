import type { DocumentedElement } from "../types";

export const ruby: DocumentedElement = {
  title: "ruby",
  description:
    "Represents a ruby annotation for showing pronunciation of East Asian characters.",
  variant: [
    {
      title: "Ruby Annotation",
      description: "Shows pronunciation above characters.",
      example: `<ruby>\n  漢 <rp>(</rp><rt>kan</rt><rp>)</rp>\n  字 <rp>(</rp><rt>ji</rt><rp>)</rp>\n</ruby>`,
      code: `<ruby>\n  字 <rt>pronunciation</rt>\n</ruby>`,
    },
  ],
};
