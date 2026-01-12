import type { DocumentedElement } from "../types";

export const hgroup: DocumentedElement = {
  title: "hgroup",
  description: "Groups a heading with related content such as subheadings.",
  example: [
    {
      title: "Heading Group",
      description: "Groups heading with subtitle, reduced spacing between.",
      example: `<hgroup>\n  <h1>Main Title</h1>\n  <p>Subtitle or tagline</p>\n</hgroup>`,
      code: `<hgroup>\n  <h1>Title</h1>\n  <p>Subtitle</p>\n</hgroup>`,
    },
  ],
};
