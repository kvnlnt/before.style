import type { DocumentedElement } from "../types";

export const form: DocumentedElement = {
  title: "form",
  description: "Represents a section containing interactive controls for submitting information.",
  example: [
    {
      title: "Basic Form",
      description: "A simple form with inputs and a submit button.",
      example: `<form>\n  <label>Name</label>\n  <input type="text" placeholder="Your name">\n  <label>Email</label>\n  <input type="email" placeholder="you@example.com">\n  <button type="submit">Submit</button>\n</form>`,
      code: `<form>\n  <label>Name</label>\n  <input type="text">\n  <button type="submit">Submit</button>\n</form>`,
    },
  ],
};
