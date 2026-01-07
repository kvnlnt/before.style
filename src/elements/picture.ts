import type { DocumentedElement } from "../types";

export const picture: DocumentedElement = {
  title: "picture",
  description:
    "Contains source elements and one img element for responsive images.",
  variant: [
    {
      title: "Picture",
      description: "Responsive image container for multiple sources.",
      example: `<picture>\n  <source srcset="large.jpg" media="(min-width: 800px)">\n  <img src="small.jpg" alt="Responsive image">\n</picture>`,
      code: `<picture>\n  <source srcset="img.webp" type="image/webp">\n  <img src="img.jpg" alt="Alt">\n</picture>`,
    },
  ],
};
