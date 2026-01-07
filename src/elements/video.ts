import type { DocumentedElement } from "../types";

export const video: DocumentedElement = {
  title: "video",
  description: "Embeds video content with playback controls.",
  variant: [
    {
      title: "Video Player",
      description: "Responsive video with native controls.",
      example: `<video controls>\n  <source src="video.mp4" type="video/mp4">\n  Your browser does not support video.\n</video>`,
      code: `<video controls src="video.mp4"></video>`,
    },
  ],
};
