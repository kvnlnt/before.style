import type { DocumentedElement } from "../types";

export const code: DocumentedElement = {
  title: "code",
  description: "Displays a fragment of computer code.",
  variant: [
    {
      title: "Inline Code",
      description: "Inline code with subtle background for visibility.",
      example: `<p>Use the <code>console.log()</code> function to debug.</p>`,
      code: `<code>console.log()</code>`,
    },
    {
      title: "Code Block",
      description: "Wrap code in pre for multi-line code blocks.",
      example: `<pre><code>function greet(name) {\n  return \"Hello, \" + name;\n}</code></pre>`,
      code: `<pre><code>function greet(name) {\n  return "Hello, " + name;\n}</code></pre>`,
    },
  ],
};
