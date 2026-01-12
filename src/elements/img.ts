import type { DocumentedElement } from "../types";

export const img: DocumentedElement = {
  title: "img",
  description: "Embeds an image into the document.",
  example: [
    {
      title: "Image",
      description: "Responsive image that scales to its container.",
      example: `<img src="https://picsum.photos/400/200" alt="Sample image">`,
      code: `<img src="image.jpg" alt="Description">`,
    },
  ],
};
