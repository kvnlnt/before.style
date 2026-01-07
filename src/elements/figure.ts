import type { DocumentedElement } from "../types";

export const figure: DocumentedElement = {
  title: "figure",
  description: "Represents self-contained content with an optional caption.",
  variant: [
    {
      title: "Figure with Caption",
      description: "Image container with descriptive caption below.",
      example: `<figure>\n  <img src="https://picsum.photos/400/200" alt="Sample">\n  <figcaption>A descriptive caption for the image.</figcaption>\n</figure>`,
      code: `<figure>\n  <img src="image.jpg" alt="Alt">\n  <figcaption>Caption</figcaption>\n</figure>`,
    },
  ],
};
