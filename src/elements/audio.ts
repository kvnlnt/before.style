import type { DocumentedElement } from "../types";

export const audio: DocumentedElement = {
  title: "audio",
  description: "Embeds sound content with controls for playback.",
  variant: [
    {
      title: "Audio Player",
      description: "Full-width audio player with native controls.",
      example: `<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Your browser does not support audio.\n</audio>`,
      code: `<audio controls src="audio.mp3"></audio>`,
    },
  ],
};
