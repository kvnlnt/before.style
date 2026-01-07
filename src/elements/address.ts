import type { DocumentedElement } from "../types";

export const address: DocumentedElement = {
  title: "address",
  description:
    "Provides contact information for the nearest article or body ancestor.",
  variant: [
    {
      title: "Address",
      description: "Italic contact information block.",
      example: `<address>\n  Contact: <a href="mailto:info@example.com">info@example.com</a><br>\n  123 Main St, City\n</address>`,
      code: `<address>Contact info</address>`,
    },
  ],
};
