import type { DocumentedElement } from "../types";

export const picture: DocumentedElement = {
  title: "picture",
  description:
    "Contains source elements and one img element for responsive images.",
  variant: [
    {
      title: "Picture",
      description: "Responsive image container for multiple sources.",
      example: `<picture>\n  <source srcset="https://picsum.photos/seed/button/800/400" media="(min-width: 800px)">\n  <img src="https://picsum.photos/seed/button/400/200" alt="Responsive image">\n</picture>`,
      code: `<picture>\n  <source srcset="https://picsum.photos/seed/button/800/400.webp" type="image/webp">\n  <img src="https://picsum.photos/seed/button/400/200" alt="Alt">\n</picture>`,
    },
  ],
};
