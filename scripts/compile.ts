import { COMPONENTS } from "@/components";
import { ELEMENTS } from "@/elements";
import type { DocumentedComponent, DocumentedElement } from "@/types";
import { Glob } from "bun";

// ============================================================================
// Utilities
// ============================================================================

const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// ============================================================================
// HTML Template Sections
// ============================================================================

function renderHtmlHead(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Before Style</title>
    <link rel="stylesheet" href="before.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
   
  </head>
  <body>`;
}

function renderStickyNavigation(): string {
  const elementMenuItems = ELEMENTS.map((el) => `            <li><a href="#${el.title}">${el.title}</a></li>`).join(
    "\n"
  );

  const componentMenuItems = COMPONENTS.map(
    (c) => `            <li><a href="#${c.title.toLowerCase().replace(/\s+/g, "-")}">${c.title}</a></li>`
  ).join("\n");

  return `
    <nav role="navigation" aria-label="Main navigation" aria-orientation="horizontal" data-sticky>
      <ul>
        <li><a href="#top">::before</a></li>
        <li>
          <a href="#elements">Elements</a>
          <ul>
${elementMenuItems}
          </ul>
        </li>
        <li>
          <a href="#components">Components</a>
          <ul>
${componentMenuItems}
          </ul>
        </li>
        <li><a href="https://github.com/kvnlnt/before.style" target="_blank">GitHub</a></li>
      </ul>
    </nav>`;
}

function renderHeroSection(): string {
  return `
    <section>
      <h1>::before</h1>
      <p>Single-File, Classless, Themeable CSS for Semantic HTML</p>
    </section>`;
}

function renderPhilosophySection(): string {
  return `
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
    </section>`;
}

function renderGettingStartedSection(): string {
  return `
    <section>
      <h2>Getting Started</h2>
      <p>
        To get started, simply copy/paste the <code>Before.css</code> file into
        your project and link to it in the head of your HTML document.
      </p>
    </section>`;
}

function renderExample(example: { title: string; description?: string; preview?: string; code?: string }): string {
  return `
          <div>
            <h3>${example.title}</h3>
            ${example.description ? `<p>${example.description}</p>` : ""}
            ${
              example.preview
                ? `
              <h4>Example</h4>
              <div class="example-preview">
                ${example.preview}
              </div>
            `
                : ""
            }
            ${
              example.code
                ? `
              <h4>Code</h4>
              <pre class="language-html"><code class="language-html">${escapeHtml(example.code)}</code></pre>
            `
                : ""
            }
          </div>`;
}

function renderElementsTableOfContents(): string {
  const elementLinks = ELEMENTS.map(
    (el) => `<li><a href="#${el.title}" style="padding-left:5px">${el.title}</a></li>`
  ).join("\n        ");

  return `
    <section id="elements">
      <h2>Elements</h2>
      <p>
        The following HTML5 elements are styled by Before Style:
      </p>
      <ul style="list-style-type: none; display: flex; flex-wrap: wrap; row-gap: 0rem; column-gap: 1rem; padding: 0; margin: 0;">
        ${elementLinks}
      </ul>
    </section>`;
}

function renderElementSection(element: DocumentedElement): string {
  const examples = element.example ? element.example.map(renderExample).join("") : "";

  return `
      <section id="${element.title}">
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        ${examples}
      </section>`;
}

function renderAllElementSections(): string {
  return ELEMENTS.map(renderElementSection).join("");
}

function renderComponentsTableOfContents(): string {
  const componentLinks = COMPONENTS.map(
    (c) => `<li><a href="#${c.title.toLowerCase().replace(/\s+/g, "-")}" style="padding-left:5px">${c.title}</a></li>`
  ).join("\n        ");

  return `
    <section id="components">
      <h1>Components</h1>
      <p>
        The following ARIA components are styled by Before Style:
      </p>
      <ul style="list-style-type: none; display: flex; flex-wrap: wrap; row-gap: 0rem; column-gap: 1rem; padding: 0; margin: 0;">
        ${componentLinks}
      </ul>
    </section>`;
}

function renderComponentSection(component: DocumentedComponent): string {
  const examples = component.example ? component.example.map(renderExample).join("") : "";
  const sectionId = component.title.toLowerCase().replace(/\s+/g, "-");

  return `
      <section id="${sectionId}">
        <h2>${component.title}</h2>
        ${component.description ? `<p>${component.description}</p>` : ""}
        ${examples}
      </section>`;
}

function renderAllComponentSections(): string {
  return COMPONENTS.map(renderComponentSection).join("");
}

function renderHtmlFooter(): string {
  return `
    <!-- Prism.js for syntax highlighting -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js"></script>
  </body>
</html>`;
}

function buildHtmlDocument(): string {
  return [
    renderHtmlHead(),
    renderStickyNavigation(),
    renderHeroSection(),
    renderPhilosophySection(),
    renderGettingStartedSection(),
    renderElementsTableOfContents(),
    renderAllElementSections(),
    renderComponentsTableOfContents(),
    renderAllComponentSections(),
    renderHtmlFooter(),
  ].join("");
}

// ============================================================================
// CSS Compilation
// ============================================================================

async function collectCssFiles(): Promise<string[]> {
  const files: string[] = [];

  const sharedStyles = new Glob("src/shared/*.css");
  for await (const file of sharedStyles.scan(".")) {
    files.push(file);
  }

  const elementStyles = new Glob("src/elements/**/*.css");
  for await (const file of elementStyles.scan(".")) {
    files.push(file);
  }

  const componentStyles = new Glob("src/components/**/*.css");
  for await (const file of componentStyles.scan(".")) {
    files.push(file);
  }

  return files;
}

async function concatenateCssFiles(files: string[]): Promise<string> {
  let styles = "";
  for (const file of files) {
    styles += await Bun.file(file).text();
  }
  return styles;
}

async function buildCssBundle(): Promise<string> {
  const files = await collectCssFiles();
  return concatenateCssFiles(files);
}

// ============================================================================
// Main Build Process
// ============================================================================

async function build(): Promise<void> {
  const [html, css] = await Promise.all([Promise.resolve(buildHtmlDocument()), buildCssBundle()]);

  await Promise.all([Bun.write("docs/index.html", html), Bun.write("docs/before.css", css)]);

  console.log("✓ Built docs/index.html");
  console.log("✓ Built docs/before.css");
}

build();
