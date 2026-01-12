import type { DocumentedElement } from "../types";

export const rp: DocumentedElement = {
  title: "rp",
  description: "Provides fallback parentheses for browsers that don't support ruby annotations.",
  example: [
    {
      title: "Ruby Parentheses",
      description: "Fallback parentheses for non-ruby browsers.",
      example: `<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>`,
      code: `<rp>(</rp>`,
    },
  ],
};
