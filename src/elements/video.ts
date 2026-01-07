import type { DocumentedElement } from "../types";

export const video: DocumentedElement = {
  title: "video",
  description: "Embeds video content with playback controls.",
  variant: [
    {
      title: "Video Player",
      description: "Responsive video with native controls.",
      example: `<video controls>\n  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
" type="video/mp4">\n  Your browser does not support video.\n</video>`,
      code: `<video controls src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
"></video>`,
    },
  ],
};
