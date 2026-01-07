const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const doc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OEM Style</title>
    <link rel="stylesheet" href="oem.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
    <style>
      body { padding: 2rem; }
      section { margin-bottom: 5rem; }
      section > div { margin-bottom: 3rem; }
    </style>
    </head>
  <body>
   <section>
      <h1>OEM Style</h1>
      <p>A classless CSS framework.</p>
    </section>
    <section>
      <h2>Philosophy & Principles</h2>
      <p>
       A classless, semantic style reset that styles HTML5 elements directly, providing accessible defaults without relying on
<a target="_blank" href="https://css-tricks.com/different-ways-to-write-css/">utility-first CSS libraries</a> or overly complex frameworks.
It is themeable (via <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</a>) and designed for
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement">progressive enhancement</a>, allowing further customization through classes, components, or frameworks when desired.
By targeting <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_html">semantic HTML</a>, it provides a rock-solid, long-term foundation.
All components are implemented according to the
<a href="https://www.w3.org/WAI/ARIA/apg/patterns/">ARIA Authoring Practices Guide (APG)</a>, ensuring they are accessible, predictable, and keyboard-friendly, so your semantic HTML remains usable for everyone.
      </p>
    </section>
    <section>
      <h2>Getting Started</h2>
      <ul>
        <li><a target="_blank" href="https://github.com/kvnlnt/oem.css">Repo</a></li>
        <li><a href="#elements">Elements</a></li>
        <li><a href="#components">Components</a></li>
      </ul>
      <p>
        To get started, simply copy/paste the <code>oem.css</code> file into
        your project and link to it in the head of your HTML document.
      </p>
    </section>
    <section id="elements">
      <h2>Elements</h2>
      <p>
        The following HTML5 elements are styled by OEM Style:
      </p>
      <ul style="list-style-type: none; display: flex; flex-wrap: wrap; row-gap: 0rem; column-gap: 1rem; padding: 0; margin: 0;">
${ELEMENTS.map(
  (el) => `
       <li><a href="#${el.title}" style="padding-left:5px">${el.title}</a></li>
        `
).join("")}
      </ul>
      
    </section>
    ${ELEMENTS.map(
      (element: DocumentedElement) => `
      <section id="${element.title}">
        <h1>${element.title}</h1>
        <p>${element.description}</p>
      <ul style="list-style-type: none; display: flex; flex-wrap: wrap; row-gap: 0rem; column-gap: 1rem; padding: 0; margin: 0 0 1rem;">
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${
          element.title
        }" target="_blank" rel="noopener noreferrer">MDN</a></li>
        <li><a href="#elements" target="_self">Elements</a></li>
        <li><a href="#top" target="_self">Top</a></li>
      </ul>
        ${
          element.variant
            ? element.variant
                .map(
                  (variant) => `
          <div>
            <h3>${variant.title}</h3>
            ${variant.description ? `<p>${variant.description}</p>` : ""}
            ${
              variant.example
                ? `
              <h4>Example</h4>
              <div class="example-preview">
                ${variant.example}
              </div>
            `
                : ""
            }
            ${
              variant.code
                ? `
              <h4>Code</h4>
              <pre class="language-html"><code class="language-html">${escapeHtml(
                variant.code
              )}</code></pre>
            `
                : ""
            }
          </div>
        `
                )
                .join("")
            : ""
        }
      </section>
    `
    ).join("")}
     <section id="components">
      <h1>Components</h1>
      <a href="#top">Back to top</a>
      <p>
        The following ARIA components are styled by OEM Style:
      </p>
    </section>
    ${COMPONENTS.map(
      (component: DocumentedComponent) => `
      <section>
        <h2>${component.title}</h2>
        ${component.description ? `<p>${component.description}</p>` : ""}
        ${
          component.variant
            ? component.variant
                .map(
                  (variant) => `
          <div>
            <h3>${variant.title}</h3>
            ${variant.description ? `<p>${variant.description}</p>` : ""}
            ${
              variant.example
                ? `
              <h4>Example</h4>
              <div class="example-preview">
                ${variant.example}
              </div>
            `
                : ""
            }
            ${
              variant.code
                ? `
              <h4>Code</h4>
              <pre class="language-html"><code class="language-html">${escapeHtml(
                variant.code
              )}</code></pre>
            `
                : ""
            }
          </div>
        `
                )
                .join("")
            : ""
        }
      </section>
    `
    ).join("")}
    <!-- Prism.js for syntax highlighting -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js"></script>
  </body>
</html>
`;

import { COMPONENTS } from "@/components";
import { ELEMENTS } from "@/elements";
import type { DocumentedComponent, DocumentedElement } from "@/types";
// import all .css files from ./styles folder
import { Glob } from "bun";

const glob = new Glob("src/styles/*.css");
let styles = "";
const files: string[] = [];
for await (const file of glob.scan(".")) {
  files.push(file);
}
files.sort();
for (const file of files) {
  styles += await Bun.file(file).text();
}

Bun.write("dist/oem.html", doc);
Bun.write("dist/oem.css", styles);
