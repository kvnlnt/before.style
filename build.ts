export type Library = {
  version: string;
  name: string;
  description: string;
  reset: {
    [selector: string]: Partial<CSSStyleDeclaration> | { [selector: string]: Partial<CSSStyleDeclaration> };
  };
  tokens: {
    [tokenName: string]: string | number;
  };
  elements: {
    title: string;
    tag: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    description?: string;
    styles: {
      [selector: string]: Partial<CSSStyleDeclaration> | { [selector: string]: Partial<CSSStyleDeclaration> };
    };
    variants?: {
      title: string;
      description?: string;
      markup?: string;
    }[];
  }[];
  components: {
    title: string;
    description?: string;
    styles?: {
      [selector: string]: Partial<CSSStyleDeclaration> | { [selector: string]: Partial<CSSStyleDeclaration> };
    };
    variants?: {
      title: string;
      description?: string;
      markup?: string;
    }[];
    example?: {
      title: string;
      description?: string;
      preview?: string;
      code?: string;
    }[];
  }[];
};

export const library: Library = {
  name: "Before",
  description: `Before is a classless, semantic style reset that styles HTML5 elements directly, providing accessible defaults without relying on
<a target="_blank" href="https://css-tricks.com/different-ways-to-write-css/">utility-first CSS libraries</a> or overly complex frameworks.
It is themeable (via <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</a>) and designed for
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement">progressive enhancement</a>, allowing further customization through classes, components, or frameworks when desired.
By targeting <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_html">semantic HTML</a>, it provides a rock-solid, long-term foundation.
All components are implemented according to the
<a href="https://www.w3.org/WAI/ARIA/apg/patterns/">ARIA Authoring Practices Guide (APG)</a>, ensuring they are accessible, predictable, and keyboard-friendly, so your semantic HTML remains usable for everyone.
    `,
  version: "1.0.0",
  reset: {
    html: {
      boxSizing: "border-box",
      fontSize: "16px",
    },
    "*, *:before, *:after": {
      boxSizing: "inherit",
    },
    "body, h1, h2, h3, h4, h5, h6, p, ol, ul": {
      margin: "0",
      padding: "0",
      fontWeight: "normal",
    },
    "ol, ul": {
      listStyle: "none",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
  },
  tokens: {
    /* ============================================================
     * COLOR PRIMITIVES (OKLCH: L C H)
     * ============================================================ */
    "--palette_gray": "0.55 0.01 260",
    "--palette_red": "0.65 0.20 25",
    "--palette_orange": "0.70 0.18 55",
    "--palette_yellow": "0.85 0.18 95",
    "--palette_green": "0.70 0.17 145",
    "--palette_blue": "0.65 0.18 250",
    "--palette_purple": "0.60 0.20 300",
    "--palette_white": "0.98 0.005 260",
    "--palette_black": "0.15 0.01 260",

    /* ============================================================
     * DOCUMENT PRIMITIVES (BODY LAYOUT)
     * ============================================================ */
    "--body_max_width": "120ch",
    "--body_padding": "1.5rem",
    "--body_margin": "0 auto",

    /* ============================================================
     * PROPERTY MODIFIER COFACTORS (THE "HOW MUCH" OF THE PROPERTY)
     * ============================================================ */
    "--scale_opacity": 1,
    "--scale_contrast": 1,
    "--scale_font_scaling": 1,
    "--scale_line_height": 1,
    "--scale_font_weight": 1,
    "--scale_border_radius": 0.5,
    "--scale_shadow_intensity": 1,
    "--scale_spacing": 1,
    "--scale_transition_speed": 1,

    /* ============================================================
     * OPACITY LEVELS (DIALS FOR TEXT / SURFACE)
     * ============================================================ */
    "--tone_opacity_solid": 1,
    "--tone_opacity_strong": 0.85,
    "--tone_opacity_normal": 0.7,
    "--tone_opacity_muted": 0.5,
    "--tone_opacity_faint": 0.25,

    /* ============================================================
     * TONE COLORS (THE "MOOD" OF THE COLOR)
     * ============================================================ */
    "--tone_neutral": `oklch(var(--palette_gray))`,
    "--tone_info": `oklch(var(--palette_blue))`,
    "--tone_success": `oklch(var(--palette_green))`,
    "--tone_warning": `oklch(var(--palette_yellow))`,
    "--tone_error": `oklch(var(--palette_red))`,
    "--tone_accent": `oklch(var(--palette_purple))`,

    /* ============================================================
     * TEXT COLOR ROLES
     * ============================================================ */
    "--text_color_primary": `oklch(var(--palette_white) / var(--tone_opacity_normal))`,
    "--text_color_heading": `oklch(var(--palette_white))`,
    "--text_color_muted": `oklch(var(--palette_white) / var(--tone_opacity_muted))`,
    "--text_color_inverse": `oklch(var(--palette_black))`,
    "--text_color_link": `oklch(var(--palette_blue))`,

    /* ============================================================
     * FONT PRIMITIVES
     * ============================================================ */
    "--font_family_serif": "ui-serif, Georgia, serif",
    "--font_family_sans": "system-ui, -apple-system, sans-serif",
    "--font_family_mono": 'ui-monospace, "SF Mono", Menlo, monospace',
    "--font_family_script": '"Comic Sans MS", cursive, sans-serif',
    "--font_family_display": "system-ui, -apple-system, sans-serif",
    "--font_weight_regular": 400,
    "--font_weight_medium": 500,
    "--font_weight_bold": 700,
    "--font_size_body": "1rem",
    "--font_size_label": "0.875rem",
    "--font_size_heading": "1.5rem",
    "--font_size_code": "0.9rem",

    /* ============================================================
     * SEMANTIC TEXT ROLES
     * ============================================================ */
    "--text_font_body": `var(--font_family_sans)`,
    "--text_font_heading": `var(--font_family_display)`,
    "--text_font_label": `var(--font_family_sans)`,
    "--text_font_code": `var(--font_family_mono)`,
    "--text_font_system": `var(--font_family_sans)`,

    /* ============================================================
     * SURFACE COLORS (BACKGROUNDS)
     * ============================================================ */
    // Light mode surfaces (high lightness)
    "--surface_base": `oklch(var(--palette_black))`,
    "--surface_raised": "oklch(0.96 0.005 260)",
    "--surface_overlay": "oklch(0.92 0.005 260)",
    "--surface_sunken": "oklch(0.9 0.005 260)",
    "--surface_muted": "oklch(0.85 0.005 260)",

    // Dark mode surfaces (low lightness)
    "--surface_base_dark": `oklch(var(--palette_black))`,
    "--surface_raised_dark": "oklch(0.2 0.01 260)",
    "--surface_overlay_dark": "oklch(0.25 0.01 260)",
    "--surface_elevated_dark": "oklch(0.3 0.01 260)",
    "--surface_border_dark": "oklch(0.35 0.01 260)",

    // Interactive surfaces
    "--surface_interactive": `oklch(var(--palette_blue))`,
    "--surface_interactive_hover": "oklch(0.55 0.18 250)",
    "--surface_interactive_active": "oklch(0.5 0.18 250)",

    // Special surfaces
    "--surface_backdrop": "oklch(0 0 0 / 0.5)",
    "--surface_highlight": "oklch(0.92 0.15 95)",
    "--surface_highlight_dark": "oklch(0.45 0.12 95)",
  },
  elements: [
    {
      title: "a",
      tag: "a",
      description: "Anchor element that creates a hyperlink to other pages, files, or locations.",
      styles: {
        a: {
          color: "currentColor",
          textDecoration: "underline",
          textUnderlineOffset: "5px",
          transition: "opacity 0.2s ease, text-decoration-color 0.2s ease",
          cursor: "pointer",
          textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)",
          textDecorationThickness: "2px",
        },
        "a:hover": {
          opacity: "0.8",
        },
        "a:focus": {
          outline: "2px solid currentColor",
          outlineOffset: "2px",
        },
        "a:focus:not(:focus-visible)": {
          outline: "none",
        },
        "a:focus-visible": {
          outline: "2px solid currentColor",
          outlineOffset: "2px",
        },
        "a:active": {
          opacity: "0.6",
        },
        "a:visited": {
          color: "currentColor",
          opacity: "0.85",
        },
        'a[target="_blank"]::after': {
          content: '" ↗"',
          fontSize: "0.75em",
          color: "color-mix(in srgb, currentColor 30%, transparent)",
        },
        "a[download]::before": {
          content: '"↓ "',
          fontSize: "0.85em",
          color: "color-mix(in srgb, currentColor 30%, transparent)",
        },
        'a[href^="mailto:"]::before': {
          content: '"✉ "',
          fontSize: "1.35rem",
          color: "color-mix(in srgb, currentColor 30%, transparent)",
        },
        'a[href^="tel:"]::before': {
          content: '"☎ "',
          fontSize: "0.8rem",
          color: "color-mix(in srgb, currentColor 30%, transparent)",
        },
        'a[aria-disabled="true"]': {
          opacity: "0.5",
          cursor: "not-allowed",
          pointerEvents: "none",
        },
        'a[aria-current="page"]': {
          fontWeight: "bold",
        },
        'a[href^="#"]::before': {
          content: '"# "',
          color: "color-mix(in srgb, currentColor 30%, transparent)",
        },
      },
      variants: [
        {
          title: "Default Link",
          description: "A standard hyperlink with underline styling that inherits the current text color.",
          markup: `<a href="#">Click here to learn more</a>`,
        },
        {
          title: "Visited Link",
          description: "Links that have been visited maintain the current color with slightly reduced opacity.",
          markup: `<a href="#visited-example">Previously visited link</a>`,
        },
        {
          title: "External Link",
          description: 'Links with target="_blank" automatically display an external link indicator (↗).',
          markup: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>`,
        },
        {
          title: "Download Link",
          description: "Links with the download attribute display a download indicator (↓) before the text.",
          markup: `<a href="/files/document.pdf" download>Download PDF</a>`,
        },
        {
          title: "Email Link",
          description: "Links with mailto: protocol display an email icon (✉) before the text.",
          markup: `<a href="mailto:hello@example.com">hello@example.com</a>`,
        },
        {
          title: "Phone Link",
          description: "Links with tel: protocol display a phone icon (📞) before the text.",
          markup: `<a href="tel:+1234567890">+1 (234) 567-890</a>`,
        },
        {
          title: "Disabled Link",
          description: 'Use aria-disabled="true" to visually disable a link while maintaining accessibility.',
          markup: `<a href="#" aria-disabled="true">Unavailable link</a>`,
        },
        {
          title: "Current Page Link",
          description:
            'Use aria-current="page" to indicate the current page in navigation. The link appears bold without underline.',
          markup: `<nav>
  <a href="/">Home</a>
  <a href="/about" aria-current="page">About</a>
  <a href="/contact">Contact</a>
</nav>`,
        },
        {
          title: "Skip Link",
          description: "A hidden link that becomes visible on focus, allowing keyboard users to skip to main content.",
          markup: `<a href="#main-content">Skip to main content</a>
<main id="main-content">Main content here...</main>`,
        },
      ],
    },
    {
      title: "abbr",
      tag: "abbr",
      description: "Represents an abbreviation or acronym with an optional title for the full description.",
      styles: {
        "abbr[title]": {
          textDecoration: "underline dotted",
          cursor: "help",
        },
      },
      variants: [
        {
          title: "Abbreviation",
          description: "Dotted underline indicates hover for full text.",
          markup: `<p>The <abbr title="World Wide Web">WWW</abbr> changed everything.</p>`,
        },
      ],
    },
    {
      title: "address",
      tag: "address",
      description: "Provides contact information for the nearest article or body ancestor.",
      styles: {
        address: {
          fontStyle: "normal",
          marginBlock: "1em",
        },
      },
      variants: [
        {
          title: "Address",
          description: "Italic contact information block.",
          markup: `<address>
  Contact: <a href="mailto:info@example.com">info@example.com</a><br>
  123 Main St, City
</address>`,
        },
      ],
    },
    {
      title: "area",
      tag: "area",
      description: "Defines a clickable area inside an image map.",
      styles: {},
      variants: [],
    },
    {
      title: "article",
      tag: "article",
      description: "Represents a self-contained composition intended for independent distribution or reuse.",
      styles: {
        article: {
          marginBlock: "2em",
        },
      },
      variants: [
        {
          title: "Article",
          description: "Self-contained content block with implicit padding.",
          markup: `<article>
  <h2>Article Title</h2>
  <p>Article content goes here...</p>
</article>`,
        },
      ],
    },
    {
      title: "aside",
      tag: "aside",
      description: "Represents content tangentially related to the main content, often used for sidebars.",
      styles: {
        aside: {
          marginBlock: "1em",
          padding: "1em",
          background: "var(--surface_raised)",
          borderRadius: "0.5em",
        },
        "@media (prefers-color-scheme: dark)": {
          aside: {
            background: "var(--surface_raised_dark)",
          },
        },
      },
      variants: [
        {
          title: "Aside",
          description: "Sidebar or supplementary content with subtle styling.",
          markup: `<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#">Link one</a></li>
    <li><a href="#">Link two</a></li>
  </ul>
</aside>`,
        },
      ],
    },
    {
      title: "audio",
      tag: "audio",
      description: "Embeds sound content with controls for playback.",
      styles: {
        audio: {
          maxWidth: "100%",
        },
      },
      variants: [
        {
          title: "Audio Player",
          description: "Full-width audio player with native controls.",
          markup: `<audio controls>
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4
" type="audio/mpeg">
  Your browser does not support audio.
</audio>`,
        },
      ],
    },
    {
      title: "b",
      tag: "b",
      description: "Represents text stylistically offset from normal text without conveying extra importance.",
      styles: {
        b: {
          fontWeight: "600",
        },
      },
      variants: [
        {
          title: "Bold",
          description: "Bold text for stylistic offset.",
          markup: `<p>The <b>quick</b> brown fox jumps.</p>`,
        },
      ],
    },
    {
      title: "bdi",
      tag: "bdi",
      description: "Isolates a span of text that might be formatted in a different direction from surrounding text.",
      styles: {},
      variants: [
        {
          title: "Bidirectional Isolation",
          description: "Isolates text direction from surrounding content.",
          markup: `<p>User: <bdi>محمد</bdi> - 5 posts</p>`,
        },
      ],
    },
    {
      title: "bdo",
      tag: "bdo",
      description: "Overrides the current text directionality.",
      styles: {},
      variants: [
        {
          title: "Bidirectional Override",
          description: "Forces text direction override.",
          markup: `<p><bdo dir="rtl">This text is reversed</bdo></p>`,
        },
      ],
    },
    {
      title: "blockquote",
      tag: "blockquote",
      description: "Indicates an extended quotation from another source.",
      styles: {
        blockquote: {
          marginBlock: "1em",
          marginInline: "0",
          paddingInlineStart: "1em",
          borderInlineStart: `3px solid oklch(var(--palette_gray))`,
          color: "oklch(0.4 0.01 260)",
        },
        "@media (prefers-color-scheme: dark)": {
          blockquote: {
            color: "oklch(0.7 0.01 260)",
          },
        },
        "blockquote > p:first-child": {
          marginBlockStart: "0",
        },
        "blockquote > p:last-child": {
          marginBlockEnd: "0",
        },
        q: {
          quotes: '"" " \\" \\" "\' \'"',
        },
        "q::before": {
          content: "open-quote",
        },
        "q::after": {
          content: "close-quote",
        },
      },
      variants: [
        {
          title: "Block Quote",
          description: "Indented with a left border to distinguish quoted content.",
          markup: `<blockquote>
  <p>The only way to do great work is to love what you do.</p>
</blockquote>`,
        },
      ],
    },
    {
      title: "body",
      tag: "body",
      description: "Represents the content of an HTML document.",
      styles: {
        body: {
          fontFamily: "var(--text_font_body)",
          lineHeight: "1.6",
          color: "oklch(0.2 0.01 260)",
          background: `oklch(var(--palette_white))`,
          margin: "var(--body_margin)",
          padding: "var(--body_padding)",
          maxWidth: "var(--body_max_width)",
        },
        "@media (prefers-color-scheme: dark)": {
          body: {
            color: "oklch(0.9 0.01 260)",
            background: `oklch(var(--palette_black))`,
          },
        },
      },
      variants: [
        {
          title: "Default Body",
          description:
            "Clean, readable defaults with system fonts, comfortable line height, and responsive max-width for optimal reading.",
          markup: `<p>The body element provides the foundation for all content. It uses system fonts for fast loading and familiar appearance.</p>`,
        },
      ],
    },
    {
      title: "br",
      tag: "br",
      description: "Produces a line break in text.",
      styles: {},
      variants: [
        {
          title: "Line Break",
          description: "Forces a line break within text.",
          markup: `<p>Line one<br>Line two</p>`,
        },
      ],
    },
    {
      title: "canvas",
      tag: "canvas",
      description: "Container for graphics drawn via scripting (usually JavaScript).",
      styles: {
        canvas: {
          display: "block",
        },
      },
      variants: [
        {
          title: "Canvas",
          description: "Drawing surface with responsive sizing.",
          markup: `<canvas width="300" height="150">
  Your browser does not support canvas.
</canvas>`,
        },
      ],
    },
    {
      title: "caption",
      tag: "caption",
      description: "Specifies the title of a table.",
      styles: {
        caption: {
          fontWeight: "600",
          textAlign: "start",
          marginBlockEnd: "0.5em",
        },
      },
      variants: [
        {
          title: "Table Caption",
          description: "Descriptive title displayed above the table.",
          markup: `<table>
  <caption>Monthly Sales Data</caption>
  <tr><th>Month</th><th>Sales</th></tr>
  <tr><td>Jan</td><td>$1,000</td></tr>
</table>`,
        },
      ],
    },
    {
      title: "cite",
      tag: "cite",
      description: "Represents the title of a creative work being referenced.",
      styles: {
        cite: {
          fontStyle: "italic",
        },
      },
      variants: [
        {
          title: "Citation",
          description: "Italic text for referencing creative works.",
          markup: `<p>My favorite book is <cite>The Great Gatsby</cite>.</p>`,
        },
      ],
    },
    {
      title: "code",
      tag: "code",
      description: "Displays a fragment of computer code.",
      styles: {
        code: {
          fontFamily: "var(--text_font_code)",
          fontSize: "0.875em",
          background: "var(--surface_overlay)",
          padding: "0.125em 0.375em",
          borderRadius: "0.25em",
        },
        "@media (prefers-color-scheme: dark)": {
          code: {
            background: "var(--surface_overlay_dark)",
          },
          pre: {
            background: "var(--surface_raised_dark)",
          },
          kbd: {
            background: "var(--surface_elevated_dark)",
            borderColor: "oklch(0.4 0.01 260)",
            boxShadow: "0 1px 0 var(--surface_raised_dark)",
          },
        },
        pre: {
          fontFamily: "var(--text_font_code)",
          fontSize: "0.875em",
          lineHeight: "1.5",
          background: "var(--surface_overlay)",
          padding: "1em",
          borderRadius: "0.5em",
          overflowX: "auto",
          marginBlock: "1em",
        },
        "pre code": {
          background: "none",
          padding: "0",
          fontSize: "inherit",
        },
        kbd: {
          fontFamily: "var(--text_font_code)",
          fontSize: "0.875em",
          background: "var(--surface_raised)",
          border: "1px solid oklch(0.8 0.01 260)",
          borderRadius: "0.25em",
          padding: "0.125em 0.375em",
          boxShadow: "0 1px 0 oklch(0.7 0.01 260)",
        },
        samp: {
          fontFamily: "var(--text_font_code)",
          fontSize: "0.875em",
        },
        var: {
          fontStyle: "italic",
        },
      },
      variants: [
        {
          title: "Inline Code",
          description: "Inline code with subtle background for visibility.",
          markup: `<p>Use the <code>console.log()</code> function to debug.</p>`,
        },
        {
          title: "Code Block",
          description: "Wrap code in pre for multi-line code blocks.",
          markup: `<pre><code>function greet(name) {
  return "Hello, " + name;
}</code></pre>`,
        },
      ],
    },
    {
      title: "col",
      tag: "col",
      description: "Definesss a column within a table and is used for styling columns.",
      styles: {},
      variants: [],
    },
    {
      title: "colgroup",
      tag: "colgroup",
      description: "Groups one or more columns in a table for formatting.",
      styles: {},
      variants: [],
    },
    {
      title: "data",
      tag: "data",
      description: "Links content with a machine-readable translation.",
      styles: {},
      variants: [
        {
          title: "Data",
          description: "Machine-readable value with human display.",
          markup: `<p>Price: <data value="49.99">$49.99</data></p>`,
        },
      ],
    },
    {
      title: "datalist",
      tag: "datalist",
      description: "Contains a set of option elements representing predefined options for an input.",
      styles: {},
      variants: [
        {
          title: "Datalist",
          description: "Provides autocomplete options for an input.",
          markup: `<input list="browsers" placeholder="Choose a browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>`,
        },
      ],
    },
    {
      title: "dd",
      tag: "dd",
      description: "Provides the description or value for a term in a description list.",
      styles: {
        dd: {
          marginInlineStart: "1.5em",
          marginBlock: "0.25em",
        },
      },
      variants: [
        {
          title: "Definition Description",
          description: "Indented description for a term.",
          markup: `<dl>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
        },
      ],
    },
    {
      title: "del",
      tag: "del",
      description: "Represents text that has been deleted from a document.",
      styles: {
        del: {
          textDecoration: "line-through",
        },
      },
      variants: [
        {
          title: "Deleted Text",
          description: "Strikethrough styling to indicate removed content.",
          markup: `<p>Price: <del>$50</del> $30</p>`,
        },
      ],
    },
    {
      title: "details",
      tag: "details",
      description: "Creates a disclosure widget from which the user can obtain additional information.",
      styles: {
        details: {
          marginBlock: "1em",
          border: "1px solid oklch(0.85 0.005 260)",
          borderRadius: "0.5em",
          padding: "0",
        },
        "@media (prefers-color-scheme: dark)": {
          details: {
            borderColor: "oklch(0.35 0.01 260)",
          },
          "details[open] > summary": {
            borderColor: "oklch(0.35 0.01 260)",
          },
        },
        summary: {
          fontWeight: "500",
          padding: "0.75em 1em",
          cursor: "pointer",
          listStyle: "none",
        },
        "summary::-webkit-details-marker": {
          display: "none",
        },
        "summary::before": {
          content: "''",
          height: "0",
          width: "0",
          borderLeft: "0.4em solid transparent",
          borderRight: "0.4em solid transparent",
          borderTop: "0.6em solid currentColor",
          display: "inline-block",
          marginInlineEnd: "0.5em",
          transition: "transform 0.2s ease",
          transform: "rotate(-90deg)",
        },
        "details[open] > summary::before": {
          transform: "rotate(0deg)",
        },
        "details[open] > summary": {
          borderBlockEnd: "1px solid oklch(0.85 0.005 260)",
        },
        "details > :not(summary)": {
          paddingInline: "1em",
        },
        "details > :last-child": {
          paddingBlockEnd: "1em",
        },
      },
      variants: [
        {
          title: "Disclosure Widget",
          description: "Expandable content with toggle control.",
          markup: `<details>
  <summary>Click to expand</summary>
  <p>Hidden content revealed when expanded.</p>
</details>`,
        },
      ],
    },
    {
      title: "dialog",
      tag: "dialog",
      description: "Represents a dialog box or other interactive component.",
      styles: {
        dialog: {
          border: "none",
          borderRadius: "0.5em",
          padding: "1.5em",
          maxWidth: "min(90vw, 40ch)",
          boxShadow: "0 4px 24px oklch(0 0 0 / 0.15)",
        },
        "dialog::backdrop": {
          background: "var(--surface_backdrop)",
        },
        "@media (prefers-color-scheme: dark)": {
          dialog: {
            background: "var(--surface_raised_dark)",
            color: "oklch(0.9 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Dialog",
          description: "A modal dialog box for user interaction.",
          markup: `<dialog open>
  <p>This is a dialog box.</p>
  <button>Close</button>
</dialog>`,
        },
      ],
    },
    {
      title: "dfn",
      tag: "dfn",
      description: "Indicates the defining instance of a term.",
      styles: {
        dfn: {
          fontStyle: "italic",
          fontWeight: "600",
        },
      },
      variants: [
        {
          title: "Definition",
          description: "Italic styling for terms being defined.",
          markup: `<p>A <dfn>pixel</dfn> is the smallest unit of a digital image.</p>`,
        },
      ],
    },
    {
      title: "div",
      tag: "div",
      description: "A generic container for flow content with no semantic meaning.",
      styles: {},
      variants: [
        {
          title: "Div Container",
          description: "Generic block-level container.",
          markup: `<div>
  <p>Content inside a div.</p>
</div>`,
        },
      ],
    },
    {
      title: "dl",
      tag: "dl",
      description: "Represents a description list of term-description pairs.",
      styles: {
        dl: {
          marginBlock: "1em",
        },
      },
      variants: [
        {
          title: "Description List",
          description: "A list of terms and their descriptions, perfect for glossaries or metadata.",
          markup: `<dl>
  <dt>Term</dt>
  <dd>The definition or description of the term.</dd>
  <dt>Another Term</dt>
  <dd>Another definition.</dd>
</dl>`,
        },
      ],
    },
    {
      title: "dt",
      tag: "dt",
      description: "Specifies a term in a description list.",
      styles: {
        dt: {
          fontWeight: "600",
          marginBlockStart: "1em",
        },
        "dt:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Definition Term",
          description: "Bold term in a definition list.",
          markup: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`,
        },
      ],
    },
    {
      title: "em",
      tag: "em",
      description: "Marks text with stress emphasis.",
      styles: {
        em: {
          fontStyle: "italic",
        },
      },
      variants: [
        {
          title: "Emphasized Text",
          description: "Italic text for stress emphasis.",
          markup: `<p>I <em>really</em> mean it.</p>`,
        },
      ],
    },
    {
      title: "embed",
      tag: "embed",
      description: "Embeds external content from an external application or plugin.",
      styles: {
        embed: {
          maxWidth: "100%",
        },
      },
    },
    {
      title: "fieldset",
      tag: "fieldset",
      description: "Groups related elements within a form.",
      styles: {},
      variants: [
        {
          title: "Form Group",
          description: "Bordered container for grouping related form fields.",
          markup: `<fieldset>
  <legend>Personal Info</legend>
  <label>Name</label>
  <input type="text">
  <label>Email</label>
  <input type="email">
</fieldset>`,
        },
      ],
    },
    {
      title: "figcaption",
      tag: "figcaption",
      description: "Represents a caption or legend for a figure.",
      styles: {
        figcaption: {
          fontSize: "0.875em",
          color: "oklch(0.5 0.01 260)",
          marginBlockStart: "0.5em",
        },
        "@media (prefers-color-scheme: dark)": {
          figcaption: {
            color: "oklch(0.6 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Figure Caption",
          description: "Smaller, muted text for describing figure content.",
          markup: `<figcaption>Photo by Jane Doe, 2024</figcaption>`,
        },
      ],
    },
    {
      title: "figure",
      tag: "figure",
      description: "Represents self-contained content with an optional caption.",
      styles: {
        figure: {
          marginBlock: "1em",
          marginInline: "0",
        },
      },
      variants: [
        {
          title: "Figure with Caption",
          description: "Image container with descriptive caption below.",
          markup: `<figure>
  <img src="https://picsum.photos/400/200" alt="Sample">
  <figcaption>A descriptive caption for the image.</figcaption>
</figure>`,
        },
      ],
    },
    {
      title: "footer",
      tag: "footer",
      description: "Represents the footer of a section or page, typically containing authorship or copyright.",
      styles: {
        footer: {
          marginBlockStart: "2em",
          paddingBlockStart: "1em",
          borderBlockStart: "1px solid oklch(0.85 0.005 260)",
          fontSize: "0.875em",
          color: "oklch(0.5 0.01 260)",
        },
        "@media (prefers-color-scheme: dark)": {
          footer: {
            borderColor: "oklch(0.3 0.01 260)",
            color: "oklch(0.6 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Footer",
          description: "Footer content container.",
          markup: `<footer>
  <p>&copy; 2024 Company Name</p>
</footer>`,
        },
      ],
    },
    {
      title: "form",
      tag: "form",
      description: "Represents a section containing interactive controls for submitting information.",
      styles: {
        form: {
          marginBlock: "1em",
        },
        fieldset: {
          border: "1px solid oklch(0.85 0.005 260)",
          borderRadius: "0.5em",
          padding: "1em",
          marginBlock: "1em",
        },
        "@media (prefers-color-scheme: dark)": {
          fieldset: {
            borderColor: "oklch(0.35 0.01 260)",
          },
          "input, textarea, select": {
            borderColor: "oklch(0.4 0.01 260)",
            background: "var(--surface_raised_dark)",
          },
        },
        legend: {
          fontWeight: "600",
          paddingInline: "0.5em",
        },
        label: {
          display: "block",
          fontWeight: "500",
          marginBlockEnd: "0.25em",
        },
        "input, textarea, select": {
          fontFamily: "inherit",
          fontSize: "1em",
          lineHeight: "1.5",
          padding: "0.5em 0.75em",
          border: "1px solid oklch(0.8 0.01 260)",
          borderRadius: "0.375em",
          background: "var(--surface_base)",
          color: "inherit",
          width: "100%",
          maxWidth: "100%",
        },
        "input:focus, textarea:focus, select:focus": {
          outline: `2px solid oklch(var(--palette_blue))`,
          outlineOffset: "1px",
        },
        "input::placeholder, textarea::placeholder": {
          color: "oklch(0.6 0.01 260)",
        },
        'input[type="checkbox"], input[type="radio"]': {
          width: "auto",
          marginInlineEnd: "0.5em",
          accentColor: `oklch(var(--palette_blue))`,
        },
        'button, input[type="submit"], input[type="reset"], input[type="button"]': {
          fontFamily: "inherit",
          fontSize: "1em",
          fontWeight: "500",
          lineHeight: "1.5",
          padding: "0.5em 1em",
          border: "none",
          borderRadius: "0.375em",
          background: "var(--surface_interactive)",
          color: "var(--surface_base)",
          cursor: "pointer",
          width: "auto",
        },
        'button:hover, input[type="submit"]:hover': {
          background: "var(--surface_interactive_hover)",
        },
        'button:active, input[type="submit"]:active': {
          background: "var(--surface_interactive_active)",
        },
        "button:focus-visible": {
          outline: `2px solid oklch(var(--palette_blue))`,
          outlineOffset: "2px",
        },
        "button:disabled, input:disabled": {
          opacity: "0.5",
          cursor: "not-allowed",
        },
        textarea: {
          minHeight: "6em",
          resize: "vertical",
        },
        select: {
          cursor: "pointer",
        },
        output: {
          fontWeight: "600",
        },
        progress: {
          width: "100%",
          height: "0.5em",
          borderRadius: "0.25em",
          overflow: "hidden",
        },
        "progress::-webkit-progress-bar": {
          background: "var(--surface_sunken)",
          borderRadius: "0.25em",
        },
        "progress::-webkit-progress-value": {
          background: "var(--surface_interactive)",
          borderRadius: "0.25em",
        },
        "progress::-moz-progress-bar": {
          background: "var(--surface_interactive)",
          borderRadius: "0.25em",
        },
        meter: {
          width: "100%",
          height: "0.5em",
        },
      },
      variants: [
        {
          title: "Basic Form",
          description: "A simple form with inputs and a submit button.",
          markup: `<form>
  <label>Name</label>
  <input type="text" placeholder="Your name">
  <label>Email</label>
  <input type="email" placeholder="you@example.com">
  <button type="submit">Submit</button>
</form>`,
        },
      ],
    },
    {
      title: "h1",
      tag: "h1",
      description: "Represents the highest level section heading.",
      styles: {
        h1: {
          fontFamily: "var(--text_font_heading)",
          fontWeight: "600",
          lineHeight: "1.25",
          marginBlock: "1.5em 0.5em",
          color: `oklch(var(--palette_white))`,
          fontSize: "2rem",
        },
        "h1:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Page Heading",
          description: "The main heading of the page. Bold and large for clear hierarchy.",
          markup: `<h1>Main Page Title</h1>`,
        },
      ],
    },
    {
      title: "h2",
      tag: "h2",
      description: "Represents a second-level section heading.",
      styles: {
        h2: {
          fontFamily: "var(--text_font_heading)",
          fontWeight: "600",
          lineHeight: "1.25",
          marginBlock: "1.5em 0.5em",
          color: `oklch(var(--palette_white))`,
          fontSize: "1.5rem",
        },
        "h2:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Heading 2",
          description: "Major section heading at 2rem size.",
          markup: `<h2>Section Heading</h2>`,
        },
      ],
    },
    {
      title: "h3",
      tag: "h3",
      description: "Represents a third-level section heading.",
      styles: {
        h3: {
          fontFamily: "var(--text_font_heading)",
          fontWeight: "600",
          lineHeight: "1.25",
          marginBlock: "1.5em 0.5em",
          color: `oklch(var(--palette_white))`,
          fontSize: "1.25rem",
        },
        "h3:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Heading 3",
          description: "Subsection heading at 1.5rem size.",
          markup: `<h3>Subsection Heading</h3>`,
        },
      ],
    },
    {
      title: "h4",
      tag: "h4",
      description: "Represents a fourth-level section heading.",
      styles: {
        h4: {
          fontFamily: "var(--text_font_heading)",
          fontWeight: "600",
          lineHeight: "1.25",
          marginBlock: "1.5em 0.5em",
          color: `oklch(var(--palette_white))`,
          fontSize: "1rem",
        },
        "h4:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Heading 4",
          description: "Minor heading at 1.25rem size.",
          markup: `<h4>Minor Heading</h4>`,
        },
      ],
    },
    {
      title: "h5",
      tag: "h5",
      description: "Represents a fifth-level section heading.",
      styles: {
        h5: {
          fontFamily: "var(--text_font_heading)",
          fontWeight: "600",
          lineHeight: "1.25",
          marginBlock: "1.5em 0.5em",
          color: `oklch(var(--palette_white))`,
          fontSize: "0.875rem",
          textTransform: "uppercase",
        },
        "h5:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Heading 5",
          description: "Small heading at 1rem size.",
          markup: `<h5>Small Heading</h5>`,
        },
      ],
    },
    {
      title: "h6",
      tag: "h6",
      description: "Represents the lowest level section heading.",
      styles: {
        h6: {
          fontFamily: "var(--text_font_heading)",
          fontWeight: "600",
          lineHeight: "1.25",
          marginBlock: "1.5em 0.5em",
          color: `oklch(var(--palette_white))`,
          fontSize: "0.75rem",
          textTransform: "uppercase",
        },
        "h6:first-child": {
          marginBlockStart: "0",
        },
      },
      variants: [
        {
          title: "Heading 6",
          description: "Smallest heading at 0.875rem size.",
          markup: `<h6>Smallest Heading</h6>`,
        },
      ],
    },
    {
      title: "head",
      tag: "head",
      description: "Contains machine-readable metadata about the document.",
      styles: {},
    },
    {
      title: "header",
      tag: "header",
      description: "Represents introductory content or navigational aids for a section or page.",
      styles: {
        header: {
          marginBlockEnd: "2em",
        },
      },
      variants: [
        {
          title: "Header",
          description: "Introductory content container.",
          markup: `<header>
  <h1>Site Title</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>`,
        },
      ],
    },
    {
      title: "hgroup",
      tag: "hgroup",
      description: "Groups a heading with related content such as subheadings.",
      styles: {
        hgroup: {
          marginBlock: "1.5em 0.5em",
        },
        "hgroup > *": {
          marginBlock: "0",
        },
        "hgroup > p": {
          color: "oklch(0.5 0.01 260)",
        },
        "@media (prefers-color-scheme: dark)": {
          "hgroup > p": {
            color: "oklch(0.6 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Heading Group",
          description: "Groups heading with subtitle, reduced spacing between.",
          markup: `<hgroup>
  <h1>Main Title</h1>
  <p>Subtitle or tagline</p>
</hgroup>`,
        },
      ],
    },
    {
      title: "hr",
      tag: "hr",
      description: "Represents a thematic break between paragraph-level elements.",
      styles: {
        hr: {
          border: "none",
          borderBlockStart: "1px solid oklch(0.85 0.005 260)",
          marginBlock: "2em",
        },
        "@media (prefers-color-scheme: dark)": {
          hr: {
            borderColor: "oklch(0.3 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Horizontal Rule",
          description: "A subtle line to separate content sections.",
          markup: `<p>Content above the break.</p>
<hr>
<p>Content below the break.</p>`,
        },
      ],
    },
    {
      title: "html",
      tag: "html",
      description: "The root element of an HTML document.",
      styles: {},
    },
    {
      title: "i",
      tag: "i",
      description: "Represents text in an alternate voice or mood, such as technical terms or foreign phrases.",
      styles: {
        i: {
          fontStyle: "italic",
        },
      },
      variants: [
        {
          title: "Italic",
          description: "Italic text for alternate voice or mood.",
          markup: `<p>The word <i>café</i> is from French.</p>`,
        },
      ],
    },
    {
      title: "iframe",
      tag: "iframe",
      description: "Embeds another HTML page within the current page.",
      styles: {
        iframe: {
          border: "none",
          maxWidth: "100%",
        },
      },
      variants: [
        {
          title: "Iframe",
          description: "Embedded frame with no border.",
          markup: `<iframe src="https://example.com" title="Embedded page"></iframe>`,
        },
      ],
    },
    {
      title: "img",
      tag: "img",
      description: "Embeds an image into the document.",
      styles: {
        img: {
          maxWidth: "100%",
          height: "auto",
          display: "block",
        },
      },
      variants: [
        {
          title: "Image",
          description: "Responsive image that scales to its container.",
          markup: `<img src="https://picsum.photos/400/200" alt="Sample image">`,
        },
      ],
    },
    {
      title: "input",
      tag: "input",
      description: "Creates interactive form controls for accepting user data.",
      styles: {},
      variants: [
        {
          title: "Text Input",
          description: "Standard text input with clean borders and focus state.",
          markup: `<input type="text" placeholder="Enter text...">`,
        },
        {
          title: "Checkbox",
          description: "Checkbox input using system accent color.",
          markup: `<label><input type="checkbox"> Accept terms</label>`,
        },
        {
          title: "Radio",
          description: "Radio button for single selection from a group.",
          markup: `<label><input type="radio" name="option"> Option A</label>
<label><input type="radio" name="option"> Option B</label>`,
        },
      ],
    },
    {
      title: "ins",
      tag: "ins",
      description: "Represents text that has been added to a document.",
      styles: {
        ins: {
          textDecoration: "underline",
        },
      },
      variants: [
        {
          title: "Inserted Text",
          description: "Underlined to indicate newly added content.",
          markup: `<p>We now offer <ins>free shipping</ins> on all orders.</p>`,
        },
      ],
    },
    {
      title: "kbd",
      tag: "kbd",
      description: "Represents user keyboard input.",
      styles: {},
      variants: [
        {
          title: "Keyboard Key",
          description: "Styled like a physical keyboard key with border and shadow.",
          markup: `<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>`,
        },
      ],
    },
    {
      title: "label",
      tag: "label",
      description: "Represents a caption for an item in a user interface.",
      styles: {},
      variants: [
        {
          title: "Form Label",
          description: "Block-level label with subtle weight.",
          markup: `<label>Username</label>
<input type="text">`,
        },
      ],
    },
    {
      title: "legend",
      tag: "legend",
      description: "Represents a caption for a fieldset.",
      styles: {},
      variants: [
        {
          title: "Fieldset Legend",
          description: "Caption displayed on fieldset border.",
          markup: `<fieldset>
  <legend>Account Info</legend>
  <label>Email</label>
  <input type="email">
</fieldset>`,
        },
      ],
    },
    {
      title: "li",
      tag: "li",
      description: "Represents an item in a list.",
      styles: {
        li: {
          marginBlock: "0.25em",
        },
        "li::marker": {
          color: `oklch(var(--palette_gray))`,
        },
      },
      variants: [
        {
          title: "List Item",
          description: "Individual list items with comfortable spacing.",
          markup: `<ul>
  <li>A single list item with proper vertical rhythm</li>
</ul>`,
        },
      ],
    },
    {
      title: "main",
      tag: "main",
      description: "Represents the dominant content of the body of a document.",
      styles: {
        main: {
          marginBlock: "1em",
        },
      },
      variants: [
        {
          title: "Main Content",
          description: "Primary content area of the document.",
          markup: `<main>
  <h1>Page Title</h1>
  <p>Main content goes here...</p>
</main>`,
        },
      ],
    },
    {
      title: "map",
      tag: "map",
      description: "Defines an image map with clickable areas.",
      styles: {},
    },
    {
      title: "mark",
      tag: "mark",
      description: "Represents text marked or highlighted for reference or notation.",
      styles: {
        mark: {
          background: "var(--surface_highlight)",
          paddingInline: "0.125em",
          borderRadius: "0.125em",
        },
        "@media (prefers-color-scheme: dark)": {
          mark: {
            background: "var(--surface_highlight_dark)",
            color: "oklch(0.95 0.01 95)",
          },
        },
      },
      variants: [
        {
          title: "Highlighted Text",
          description: "Yellow highlight for marking relevant content.",
          markup: `<p>Search results: The <mark>quick brown fox</mark> jumps over the lazy dog.</p>`,
        },
      ],
    },
    {
      title: "meta",
      tag: "meta",
      description: "Represents metadata that cannot be expressed with other HTML elements.",
      styles: {},
    },
    {
      title: "nav",
      tag: "nav",
      description: "Represents a section with navigation links.",
      styles: {
        nav: {
          marginBlock: "1em",
        },
      },
      variants: [
        {
          title: "Navigation",
          description: "Navigation block for site or page links.",
          markup: `<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
        },
      ],
    },
    {
      title: "noscript",
      tag: "noscript",
      description: "Defines content to display when scripts are not supported or disabled.",
      styles: {},
    },
    {
      title: "object",
      tag: "object",
      description: "Represents an external resource such as an image, plugin, or nested browsing context.",
      styles: {
        object: {
          maxWidth: "100%",
        },
      },
    },
    {
      title: "ol",
      tag: "ol",
      description: "Represents an ordered list of items.",
      styles: {
        ol: {
          marginBlock: "1em",
          paddingInlineStart: "1.5em",
          listStyleType: "decimal",
        },
        "ol ol, ul ol": {
          marginBlock: "0.25em",
        },
      },
      variants: [
        {
          title: "Basic Ordered List",
          description: "A numbered list for sequential content.",
          markup: `<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`,
        },
      ],
    },
    {
      title: "optgroup",
      tag: "optgroup",
      description: "Groups related options within a select element.",
      styles: {},
      variants: [
        {
          title: "Option Group",
          description: "Groups options with a bold label.",
          markup: `<select>
  <optgroup label="Fruits">
    <option>Apple</option>
    <option>Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option>Carrot</option>
  </optgroup>
</select>`,
        },
      ],
    },
    {
      title: "option",
      tag: "option",
      description: "Represents an option in a select element or datalist.",
      styles: {},
      variants: [
        {
          title: "Option",
          description: "Selectable item within a dropdown.",
          markup: `<select>
  <option value="1">First option</option>
  <option value="2">Second option</option>
</select>`,
        },
      ],
    },
    {
      title: "output",
      tag: "output",
      description: "Container for the result of a calculation or user action.",
      styles: {},
      variants: [
        {
          title: "Output",
          description: "Displays calculation results inline.",
          markup: `<p>Total: <output>42</output></p>`,
        },
      ],
    },
    {
      title: "p",
      tag: "p",
      description: "Represents a paragraph of text.",
      styles: {
        p: {
          marginBlock: "1em",
          color: "var(--text)",
        },
        "p:first-child": {
          marginBlockStart: "0",
        },
        "p:last-child": {
          marginBlockEnd: "0",
        },
      },
      variants: [
        {
          title: "Basic Paragraph",
          description: "Standard paragraph with comfortable line height and spacing.",
          markup: `<p>This is a paragraph of text. It has comfortable line height for readability and proper spacing between consecutive paragraphs.</p>
<p>This is a second paragraph demonstrating the vertical rhythm between paragraphs.</p>`,
        },
      ],
    },
    {
      title: "picture",
      tag: "picture",
      description: "Contains source elements and one img element for responsive images.",
      styles: {
        picture: {
          display: "block",
        },
        "picture img": {
          borderRadius: "0.25em",
        },
      },
      variants: [
        {
          title: "Picture",
          description: "Responsive image container for multiple sources.",
          markup: `<picture>
  <source srcset="https://picsum.photos/seed/button/800/400" media="(min-width: 800px)">
  <img src="https://picsum.photos/seed/button/400/200" alt="Responsive image">
</picture>`,
        },
      ],
    },
    {
      title: "pre",
      tag: "pre",
      description: "Represents preformatted text preserving whitespace and line breaks.",
      styles: {},
      variants: [
        {
          title: "Preformatted Text",
          description: "Preserves whitespace and uses monospace font with subtle background.",
          markup: `<pre>Line 1
Line 2
  Indented line</pre>`,
        },
      ],
    },
    {
      title: "progress",
      tag: "progress",
      description: "Displays the completion progress of a task.",
      styles: {},
      variants: [
        {
          title: "Progress Bar",
          description: "Visual progress indicator using the primary color.",
          markup: `<progress value="70" max="100"></progress>`,
        },
      ],
    },
    {
      title: "q",
      tag: "q",
      description: "Represents a short inline quotation.",
      styles: {},
      variants: [
        {
          title: "Inline Quote",
          description: "Automatically wrapped with quotation marks.",
          markup: `<p>She said, <q>This is amazing!</q></p>`,
        },
      ],
    },
    {
      title: "rp",
      tag: "rp",
      description: "Provides fallback parentheses for browsers that don't support ruby annotations.",
      styles: {},
      variants: [
        {
          title: "Ruby Parentheses",
          description: "Fallback parentheses for non-ruby browsers.",
          markup: `<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>`,
        },
      ],
    },
    {
      title: "rt",
      tag: "rt",
      description: "Specifies the ruby text component of a ruby annotation.",
      styles: {},
      variants: [
        {
          title: "Ruby Text",
          description: "Small annotation text above base character.",
          markup: `<ruby>漢<rt>kan</rt></ruby>`,
        },
      ],
    },
    {
      title: "ruby",
      tag: "ruby",
      description: "Represents a ruby annotation for showing pronunciation of East Asian characters.",
      styles: {},
      variants: [
        {
          title: "Ruby Annotation",
          description: "Shows pronunciation above characters.",
          markup: `<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>`,
        },
      ],
    },
    {
      title: "s",
      tag: "s",
      description: "Represents text that is no longer accurate or relevant.",
      styles: {
        s: {
          textDecoration: "line-through",
        },
      },
      variants: [
        {
          title: "Strikethrough",
          description: "Text with line through indicating outdated content.",
          markup: `<p>Price: <s>$50</s> $35</p>`,
        },
      ],
    },
    {
      title: "samp",
      tag: "samp",
      description: "Represents sample output from a computer program.",
      styles: {},
      variants: [
        {
          title: "Sample Output",
          description: "Monospace font for computer output.",
          markup: `<p>The error was: <samp>File not found</samp></p>`,
        },
      ],
    },
    {
      title: "script",
      tag: "script",
      description: "Embeds or references executable JavaScript code.",
      styles: {},
    },
    {
      title: "section",
      tag: "section",
      description: "Represents a standalone section of a document.",
      styles: {
        section: {
          marginBlock: "2em",
        },
      },
      variants: [
        {
          title: "Section",
          description: "Thematic grouping of content.",
          markup: `<section>
  <h2>Section Heading</h2>
  <p>Section content...</p>
</section>`,
        },
      ],
    },
    {
      title: "select",
      tag: "select",
      description: "Represents a control providing a menu of options.",
      styles: {},
      variants: [
        {
          title: "Select Dropdown",
          description: "Dropdown menu for selecting from predefined options.",
          markup: `<select>
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`,
        },
      ],
    },
    {
      title: "slot",
      tag: "slot",
      description: "A placeholder inside a web component for custom markup.",
      styles: {},
    },
    {
      title: "small",
      tag: "small",
      description: "Represents side comments or small print.",
      styles: {
        small: {
          fontSize: "0.875em",
        },
      },
      variants: [
        {
          title: "Small Print",
          description: "Reduced font size for fine print or disclaimers.",
          markup: `<p>Price: $99 <small>(plus tax)</small></p>`,
        },
      ],
    },
    {
      title: "source",
      tag: "source",
      description: "Specifies multiple media resources for picture, audio, or video elements.",
      styles: {},
    },
    {
      title: "span",
      tag: "span",
      description: "A generic inline container for phrasing content.",
      styles: {},
      variants: [
        {
          title: "Span",
          description: "Generic inline container.",
          markup: `<p>This is <span>inline content</span> in a paragraph.</p>`,
        },
      ],
    },
    {
      title: "strong",
      tag: "strong",
      description: "Indicates text with strong importance or urgency.",
      styles: {
        strong: {
          fontWeight: "600",
        },
      },
      variants: [
        {
          title: "Strong Text",
          description: "Bold text for emphasis and importance.",
          markup: `<p>This is <strong>very important</strong> information.</p>`,
        },
      ],
    },
    {
      title: "style",
      tag: "style",
      description: "Contains CSS styling information for a document.",
      styles: {},
    },
    {
      title: "sub",
      tag: "sub",
      description: "Represents subscript text.",
      styles: {
        sub: {
          fontSize: "0.75em",
          lineHeight: "0",
          position: "relative",
          verticalAlign: "baseline",
          bottom: "-0.25em",
        },
      },
      variants: [
        {
          title: "Subscript",
          description: "Text positioned below the baseline.",
          markup: `<p>H<sub>2</sub>O is the chemical formula for water.</p>`,
        },
      ],
    },
    {
      title: "summary",
      tag: "summary",
      description: "Specifies a visible heading for a details element.",
      styles: {},
      variants: [
        {
          title: "Summary",
          description: "Clickable heading that toggles the details content.",
          markup: `<details>
  <summary>Show more info</summary>
  <p>Additional information here.</p>
</details>`,
        },
      ],
    },
    {
      title: "sup",
      tag: "sup",
      description: "Represents superscript text.",
      styles: {
        sup: {
          fontSize: "0.75em",
          lineHeight: "0",
          position: "relative",
          verticalAlign: "baseline",
          top: "-0.5em",
        },
      },
      variants: [
        {
          title: "Superscript",
          description: "Text positioned above the baseline.",
          markup: `<p>E = mc<sup>2</sup> is Einstein's famous equation.</p>`,
        },
      ],
    },
    {
      title: "table",
      tag: "table",
      description: "Represents tabular data with rows and columns.",
      styles: {
        table: {
          width: "100%",
          borderCollapse: "collapse",
          marginBlock: "1em",
          fontSize: "0.9375em",
        },
      },
      variants: [
        {
          title: "Basic Table",
          description: "A simple table with headers and data cells.",
          markup: `<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>30</td></tr>
    <tr><td>Bob</td><td>25</td></tr>
  </tbody>
</table>`,
        },
      ],
    },
    {
      title: "tbody",
      tag: "tbody",
      description: "Groups the body content rows of a table.",
      styles: {
        "tbody tr": {
          borderBlockEnd: "1px solid oklch(0.9 0.005 260)",
        },
        "@media (prefers-color-scheme: dark)": {
          "tbody tr": {
            borderColor: "oklch(0.25 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Table Body",
          description: "Container for table body rows.",
          markup: `<table>
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td></tr>
    <tr><td>Bob</td></tr>
  </tbody>
</table>`,
        },
      ],
    },
    {
      title: "td",
      tag: "td",
      description: "Represents a data cell in a table.",
      styles: {
        td: {
          padding: "0.5em 0.75em",
        },
      },
      variants: [
        {
          title: "Table Data Cell",
          description: "Standard data cell with padding and border.",
          markup: `<table>
  <tr><th>Item</th><th>Price</th></tr>
  <tr><td>Apple</td><td>$1.50</td></tr>
  <tr><td>Banana</td><td>$0.75</td></tr>
</table>`,
        },
      ],
    },
    {
      title: "template",
      tag: "template",
      description: "Holds HTML content that is not rendered but can be instantiated via JavaScript.",
      styles: {},
    },
    {
      title: "textarea",
      tag: "textarea",
      description: "Represents a multi-line plain text editing control.",
      styles: {},
      variants: [
        {
          title: "Text Area",
          description: "Multi-line input with resizable height.",
          markup: `<textarea placeholder="Enter your message..."></textarea>`,
        },
      ],
    },
    {
      title: "tfoot",
      tag: "tfoot",
      description: "Groups the footer content rows of a table.",
      styles: {
        tfoot: {
          borderBlockStart: "2px solid oklch(0.8 0.005 260)",
          fontWeight: "600",
        },
        "@media (prefers-color-scheme: dark)": {
          tfoot: {
            borderColor: "oklch(0.35 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Table Footer",
          description: "Container for table footer rows, often for totals.",
          markup: `<table>
  <thead><tr><th>Item</th><th>Cost</th></tr></thead>
  <tbody><tr><td>Item 1</td><td>$5</td></tr></tbody>
  <tfoot><tr><td>Total</td><td>$5</td></tr></tfoot>
</table>`,
        },
      ],
    },
    {
      title: "th",
      tag: "th",
      description: "Represents a header cell in a table.",
      styles: {
        th: {
          fontWeight: "600",
          textAlign: "start",
          padding: "0.5em 0.75em",
        },
      },
      variants: [
        {
          title: "Table Header",
          description: "Bold header cell with bottom border.",
          markup: `<table>
  <tr><th>Name</th><th>Age</th><th>City</th></tr>
  <tr><td>Alice</td><td>30</td><td>NYC</td></tr>
</table>`,
        },
      ],
    },
    {
      title: "thead",
      tag: "thead",
      description: "Groups the header content rows of a table.",
      styles: {
        thead: {
          borderBlockEnd: "2px solid oklch(0.8 0.005 260)",
        },
        "@media (prefers-color-scheme: dark)": {
          thead: {
            borderColor: "oklch(0.35 0.01 260)",
          },
        },
      },
      variants: [
        {
          title: "Table Head",
          description: "Container for table header rows.",
          markup: `<table>
  <thead>
    <tr><th>Product</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Widget</td><td>$10</td></tr>
  </tbody>
</table>`,
        },
      ],
    },
    {
      title: "time",
      tag: "time",
      description: "Represents a specific period in time or a machine-readable datetime.",
      styles: {},
      variants: [
        {
          title: "Time",
          description: "Machine-readable date/time with human display.",
          markup: `<p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>`,
        },
      ],
    },
    {
      title: "title",
      tag: "title",
      description: "Defines the document title shown in the browser tab.",
      styles: {},
    },
    {
      title: "tr",
      tag: "tr",
      description: "Represents a row of cells in a table.",
      styles: {},
      variants: [
        {
          title: "Table Row",
          description: "Horizontal row containing table cells.",
          markup: `<table>
  <tr><th>Col 1</th><th>Col 2</th></tr>
  <tr><td>A1</td><td>A2</td></tr>
  <tr><td>B1</td><td>B2</td></tr>
</table>`,
        },
      ],
    },
    {
      title: "track",
      tag: "track",
      description: "Specifies timed text tracks for media elements.",
      styles: {},
    },
    {
      title: "u",
      tag: "u",
      description: "Represents text with an unarticulated annotation, such as misspelled words.",
      styles: {
        u: {
          textDecoration: "underline",
          textDecorationStyle: "wavy",
          textDecorationColor: `oklch(var(--palette_red))`,
        },
      },
      variants: [
        {
          title: "Underline",
          description: "Wavy underline for annotated text like spelling errors.",
          markup: `<p>Check the <u>speling</u> of this word.</p>`,
        },
      ],
    },
    {
      title: "ul",
      tag: "ul",
      description: "Represents an unordered list of items.",
      styles: {
        ul: {
          marginBlock: "1em",
          paddingInlineStart: "1.5em",
          listStyleType: "disc",
        },
        "ul ul, ol ul": {
          marginBlock: "0.25em",
        },
      },
      variants: [
        {
          title: "Basic Unordered List",
          description: "A bullet list with proper spacing and indentation.",
          markup: `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`,
        },
        {
          title: "Nested List",
          description: "Lists can be nested for hierarchical content.",
          markup: `<ul>
  <li>Parent item
    <ul>
      <li>Child item</li>
      <li>Another child</li>
    </ul>
  </li>
  <li>Another parent</li>
</ul>`,
        },
      ],
    },
    {
      title: "var",
      tag: "var",
      description: "Represents the name of a variable in a mathematical or programming context.",
      styles: {},
      variants: [
        {
          title: "Variable",
          description: "Italic monospace for variable names.",
          markup: `<p>Let <var>x</var> equal the number of items.</p>`,
        },
      ],
    },
    {
      title: "video",
      tag: "video",
      description: "Embeds video content with playback controls.",
      styles: {
        video: {
          maxWidth: "100%",
        },
      },
      variants: [
        {
          title: "Video Player",
          description: "Responsive video with native controls.",
          markup: `<video controls>
  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
" type="video/mp4">
  Your browser does not support video.
</video>`,
        },
      ],
    },
    {
      title: "wbr",
      tag: "wbr",
      description: "Represents an optional line break opportunity.",
      styles: {},
      variants: [
        {
          title: "Word Break Opportunity",
          description: "Suggests where a line break may occur.",
          markup: `<p>super<wbr>cali<wbr>fragilistic</p>`,
        },
      ],
    },
  ],
  components: [
    {
      title: "Accordion",
      description: "A vertically stacked set of interactive headings that each reveal a section of content.",
      styles: {
        "details[name]": {
          border: "1px solid oklch(0.85 0.005 260)",
          borderRadius: "0.5em",
          marginBlockEnd: "0.5em",
          overflow: "hidden",
        },
        "@media (prefers-color-scheme: dark)": {
          "details[name]": {
            borderColor: "oklch(0.35 0.01 260)",
          },
        },
        "details[name] > summary": {
          padding: "1em",
          fontWeight: "600",
          cursor: "pointer",
          listStyle: "none",
        },
        "details[name] > summary::-webkit-details-marker": {
          display: "none",
        },
        "details[name] > :not(summary)": {
          paddingInline: "1em",
        },
        "details[name] > :last-child": {
          paddingBlockEnd: "1em",
        },
        "details[name] details": {
          margin: "0.5em 0",
          borderInlineStart: "2px solid oklch(0.7 0.1 250)",
          paddingInlineStart: "1em",
          borderRadius: "0",
          borderBlock: "none",
          borderInlineEnd: "none",
        },
        "details[name] details > summary": {
          fontWeight: "500",
          padding: "0.5em 0",
        },
        "details[name] details > summary::after": {
          content: '"▸"',
        },
        "details[name] details[open] > summary::after": {
          content: '"▸"',
          transform: "rotate(90deg)",
        },
      },
      example: [
        {
          title: "Basic Accordion",
          description:
            "A simple accordion using native details/summary elements with exclusive behavior via the name attribute.",
          preview: `<div role="region" aria-label="FAQ">
  <details name="accordion-basic">
    <summary>What is an accordion?</summary>
    <p>An accordion is a vertically stacked set of interactive headings that each reveal a section of content.</p>
  </details>
  <details name="accordion-basic">
    <summary>When should I use an accordion?</summary>
    <p>Use accordions when you have multiple sections of content that users may want to browse through without leaving the page.</p>
  </details>
  <details name="accordion-basic">
    <summary>Are accordions accessible?</summary>
    <p>Yes, when built with native details/summary elements, accordions are keyboard navigable and screen reader friendly.</p>
  </details>
</div>`,
          code: `<div role="region" aria-label="FAQ">
  <details name="accordion-group">
    <summary>Section Title</summary>
    <p>Section content...</p>
  </details>
  <details name="accordion-group">
    <summary>Another Section</summary>
    <p>More content...</p>
  </details>
</div>`,
        },
        {
          title: "Accordion with Default Open",
          description: "An accordion where one panel starts expanded using the open attribute.",
          preview: `<nav aria-label="Product categories">
  <details name="accordion-open" open>
    <summary>Electronics</summary>
    <ul>
      <li>Phones</li>
      <li>Laptops</li>
      <li>Tablets</li>
    </ul>
  </details>
  <details name="accordion-open">
    <summary>Clothing</summary>
    <ul>
      <li>Shirts</li>
      <li>Pants</li>
      <li>Shoes</li>
    </ul>
  </details>
  <details name="accordion-open">
    <summary>Home & Garden</summary>
    <ul>
      <li>Furniture</li>
      <li>Decor</li>
      <li>Plants</li>
    </ul>
  </details>
</nav>`,
          code: `<nav aria-label="Categories">
  <details name="nav-accordion" open>
    <summary>First Section (Open)</summary>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </details>
  <details name="nav-accordion">
    <summary>Second Section</summary>
    <ul>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </details>
</nav>`,
        },
        {
          title: "Nested Accordion",
          description: "Accordions can be nested to create hierarchical content structures.",
          preview: `<section aria-labelledby="docs-heading">
  <h3 id="docs-heading">Documentation</h3>
  <details name="accordion-nested">
    <summary>Getting Started</summary>
    <details>
      <summary>Installation</summary>
      <p>Run npm install to get started with the project.</p>
    </details>
    <details>
      <summary>Configuration</summary>
      <p>Edit the config file to customize your setup.</p>
    </details>
  </details>
  <details name="accordion-nested">
    <summary>API Reference</summary>
    <details>
      <summary>Components</summary>
      <p>Learn about available component APIs.</p>
    </details>
    <details>
      <summary>Utilities</summary>
      <p>Explore utility functions and helpers.</p>
    </details>
  </details>
</section>`,
          code: `<section aria-labelledby="section-title">
  <h3 id="section-title">Section Title</h3>
  <details name="parent-accordion">
    <summary>Parent Item</summary>
    <details>
      <summary>Child Item</summary>
      <p>Nested content...</p>
    </details>
  </details>
</section>`,
        },
      ],
    },
    {
      title: "Alert",
      description: "A live region that displays important, time-sensitive information to the user.",
    },
    {
      title: "Breadcrumb",
      description: "A navigation aid that shows the user's current location within a site hierarchy.",
    },
    {
      title: "Button",
      description: "An interactive element that triggers an action when activated by the user.",
    },
    {
      title: "Carousel",
      description: "A rotating set of content items that can be navigated through sequentially.",
    },
    {
      title: "Checkbox",
      description: "A form control that allows users to select one or more options from a set.",
    },
    {
      title: "Combobox",
      description: "A composite widget combining a text input with a popup listbox for selecting values.",
    },
    {
      title: "Dialog",
      description: "A modal or non-modal window that appears above the page content requiring user interaction.",
    },
    {
      title: "Disclosure",
      description: "A button that controls the visibility of a section of content.",
    },
    {
      title: "Feed",
      description: "A scrollable list of articles where new content may be added as the user scrolls.",
    },
    {
      title: "Grid",
      description: "An interactive two-dimensional data structure with rows and columns of cells.",
    },
    {
      title: "Header",
      description: "A container for introductory content or navigational aids at the top of a page or section.",
    },
    {
      title: "Landmarks",
      description: "Semantic regions that help assistive technology users navigate and understand page structure.",
    },
    {
      title: "Link",
      description: "An interactive reference to a resource that navigates the user when activated.",
    },
    {
      title: "Listbox",
      description: "A widget that allows users to select one or more items from a list of choices.",
    },
    {
      title: "Menu",
      description:
        "A widget that offers a list of actions or options that the user can invoke. Supports horizontal and vertical layouts, nested submenus, sticky positioning, and dividers—all with pure CSS and semantic HTML.",
      styles: {
        'nav[role="navigation"]': {
          fontFamily: "inherit",
        },
        'nav[role="navigation"] ul': {
          listStyle: "none",
          margin: "0",
          padding: "0",
          display: "flex",
        },
        'nav[role="navigation"] li': {
          position: "relative",
        },
        'nav[role="navigation"] a, nav[role="navigation"] button': {
          display: "flex",
          alignItems: "center",
          gap: "0.5em",
          padding: "0.75em 1em",
          textDecoration: "none",
          color: "inherit",
          background: "none",
          border: "none",
          font: "inherit",
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "background-color 0.15s ease, color 0.15s ease",
        },
        'nav[role="navigation"] a[href^="#"]::before': {
          content: "none",
        },
        'nav[role="navigation"] a:hover, nav[role="navigation"] a:focus, nav[role="navigation"] button:hover, nav[role="navigation"] button:focus':
          {
            backgroundColor: "var(--surface_raised)",
            outline: "none",
          },
        'nav[role="navigation"] a[aria-current="page"]': {
          fontWeight: "600",
          backgroundColor: "var(--surface_overlay)",
        },
        "@media (prefers-color-scheme: dark)": {
          'nav[role="navigation"] a:hover, nav[role="navigation"] a:focus, nav[role="navigation"] button:hover, nav[role="navigation"] button:focus':
            {
              backgroundColor: "var(--surface_overlay_dark)",
            },
          'nav[role="navigation"] a[aria-current="page"]': {
            backgroundColor: "var(--surface_elevated_dark)",
          },
          'nav[role="navigation"][aria-orientation="horizontal"] > ul > li, nav[role="navigation"]:not([aria-orientation]) > ul > li':
            {
              borderColor: "var(--surface_border_dark)",
            },
          'nav[role="navigation"][aria-orientation="horizontal"] ul ul, nav[role="navigation"]:not([aria-orientation]) ul ul':
            {
              background: "var(--surface_raised_dark)",
              borderColor: "var(--surface_border_dark)",
              boxShadow: "0 4px 12px oklch(0 0 0 / 0.3)",
            },
          'nav[role="navigation"][aria-orientation="vertical"] li': {
            borderColor: "var(--surface_border_dark)",
          },
          'nav[role="navigation"][aria-orientation="vertical"] ul ul': {
            background: "var(--surface_raised_dark)",
            borderColor: "var(--surface_border_dark)",
            boxShadow: "0 4px 12px oklch(0 0 0 / 0.3)",
          },
          'nav[role="navigation"][data-sticky]': {
            background: "var(--surface_base_dark)",
            borderColor: "var(--surface_border_dark)",
          },
          'nav[role="navigation"] li[role="separator"]': {
            background: "var(--surface_border_dark)",
          },
        },
        'nav[role="navigation"][aria-orientation="horizontal"] > ul, nav[role="navigation"]:not([aria-orientation]) > ul':
          {
            flexDirection: "row",
          },
        'nav[role="navigation"][aria-orientation="horizontal"] > ul > li, nav[role="navigation"]:not([aria-orientation]) > ul > li':
          {
            borderInlineEnd: "1px solid oklch(0.9 0 0)",
          },
        'nav[role="navigation"][aria-orientation="horizontal"] > ul > li:last-child, nav[role="navigation"]:not([aria-orientation]) > ul > li:last-child':
          {
            borderInlineEnd: "none",
          },
        'nav[role="navigation"][aria-orientation="horizontal"] ul ul, nav[role="navigation"]:not([aria-orientation]) ul ul':
          {
            position: "absolute",
            top: "100%",
            left: "0",
            minWidth: "12em",
            maxHeight: "calc(100vh - 4rem)",
            overflowY: "auto",
            flexDirection: "column",
            background: "var(--surface_base)",
            border: "1px solid var(--surface_muted)",
            borderRadius: "0.5em",
            boxShadow: "0 4px 12px oklch(0 0 0 / 0.1)",
            opacity: "0",
            visibility: "hidden",
            transform: "translateY(-0.5em)",
            transition: "opacity 0.15s ease, transform 0.15s ease, visibility 0.15s",
            zIndex: "100",
          },
        'nav[role="navigation"] li:hover > ul, nav[role="navigation"] li:focus-within > ul': {
          opacity: "1",
          visibility: "visible",
          transform: "translateY(0)",
        },
        'nav[role="navigation"][aria-orientation="horizontal"] ul ul ul, nav[role="navigation"]:not([aria-orientation]) ul ul ul':
          {
            top: "0",
            left: "100%",
          },
        'nav[role="navigation"][aria-orientation="vertical"] > ul': {
          flexDirection: "column",
        },
        'nav[role="navigation"][aria-orientation="vertical"] li': {
          borderBlockEnd: "1px solid var(--surface_sunken)",
        },
        'nav[role="navigation"][aria-orientation="vertical"] li:last-child': {
          borderBlockEnd: "none",
        },
        'nav[role="navigation"][aria-orientation="vertical"] ul ul': {
          position: "absolute",
          top: "0",
          left: "100%",
          minWidth: "12em",
          maxHeight: "calc(100vh - 4rem)",
          overflowY: "auto",
          flexDirection: "column",
          background: "var(--surface_base)",
          border: "1px solid var(--surface_muted)",
          borderRadius: "0.5em",
          boxShadow: "0 4px 12px oklch(0 0 0 / 0.1)",
          opacity: "0",
          visibility: "hidden",
          transform: "translateX(-0.5em)",
          transition: "opacity 0.15s ease, transform 0.15s ease, visibility 0.15s",
          zIndex: "100",
        },
        'nav[role="navigation"][aria-orientation="vertical"] li:hover > ul, nav[role="navigation"][aria-orientation="vertical"] li:focus-within > ul':
          {
            opacity: "1",
            visibility: "visible",
            transform: "translateX(0)",
          },
        'nav[role="navigation"][data-sticky]': {
          position: "sticky",
          top: "0",
          zIndex: "1000",
          background: "var(--surface_base)",
          borderBlockEnd: "1px solid var(--surface_muted)",
        },
        'nav[role="navigation"][data-sticky="bottom"]': {
          top: "auto",
          bottom: "0",
          borderBlockEnd: "none",
          borderBlockStart: "1px solid var(--surface_muted)",
        },
        'nav[role="navigation"] li:has(> ul) > a::after, nav[role="navigation"] li:has(> ul) > button::after': {
          content: '""',
          display: "inline-block",
          width: "0.4em",
          height: "0.4em",
          borderInlineEnd: "2px solid currentColor",
          borderBlockEnd: "2px solid currentColor",
          marginInlineStart: "auto",
        },
        'nav[role="navigation"][aria-orientation="horizontal"] > ul > li:has(> ul) > a::after, nav[role="navigation"][aria-orientation="horizontal"] > ul > li:has(> ul) > button::after, nav[role="navigation"]:not([aria-orientation]) > ul > li:has(> ul) > a::after, nav[role="navigation"]:not([aria-orientation]) > ul > li:has(> ul) > button::after':
          {
            transform: "rotate(45deg)",
            marginBlockEnd: "0.2em",
          },
        'nav[role="navigation"][aria-orientation="horizontal"] ul ul li:has(> ul) > a::after, nav[role="navigation"][aria-orientation="horizontal"] ul ul li:has(> ul) > button::after, nav[role="navigation"]:not([aria-orientation]) ul ul li:has(> ul) > a::after, nav[role="navigation"]:not([aria-orientation]) ul ul li:has(> ul) > button::after':
          {
            transform: "rotate(-45deg)",
          },
        'nav[role="navigation"][aria-orientation="vertical"] li:has(> ul) > a::after, nav[role="navigation"][aria-orientation="vertical"] li:has(> ul) > button::after':
          {
            transform: "rotate(-45deg)",
          },
        'nav[role="navigation"] li[role="separator"]': {
          height: "1px",
          margin: "0.25em 0",
          background: "var(--surface_muted)",
        },
        'nav[role="navigation"][aria-orientation="horizontal"] > ul > li[role="separator"], nav[role="navigation"]:not([aria-orientation]) > ul > li[role="separator"]':
          {
            width: "1px",
            height: "auto",
            margin: "0 0.25em",
          },
        'nav[role="navigation"] a[aria-disabled="true"], nav[role="navigation"] button[aria-disabled="true"]': {
          opacity: "0.5",
          pointerEvents: "none",
          cursor: "not-allowed",
        },
      },
      example: [
        {
          title: "Horizontal Menu",
          description:
            "A horizontal navigation menu with dropdown submenus. Uses aria-orientation='horizontal' (or omit for default horizontal behavior).",
          preview: `<nav role="navigation" aria-label="Main menu" aria-orientation="horizontal">
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li>
      <a href="#">Products</a>
      <ul>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Clothing</a></li>
        <li role="separator"></li>
        <li><a href="#">View All</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Services</a>
      <ul>
        <li><a href="#">Consulting</a></li>
        <li>
          <a href="#">Development</a>
          <ul>
            <li><a href="#">Web</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Desktop</a></li>
          </ul>
        </li>
        <li><a href="#">Support</a></li>
      </ul>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,
          code: `<nav role="navigation" aria-label="Main menu" aria-orientation="horizontal">
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li>
      <a href="#">Products</a>
      <ul>
        <li><a href="#">Submenu Item</a></li>
        <li role="separator"></li>
        <li><a href="#">Another Item</a></li>
      </ul>
    </li>
    <li><a href="#">About</a></li>
  </ul>
</nav>`,
        },
        {
          title: "Vertical Menu",
          description:
            "A vertical sidebar-style menu with flyout submenus. Set aria-orientation='vertical' for vertical layout.",
          preview: `<nav role="navigation" aria-label="Sidebar menu" aria-orientation="vertical" style="width: 200px;">
  <ul>
    <li><a href="#" aria-current="page">Dashboard</a></li>
    <li>
      <a href="#">Settings</a>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">Notifications</a></li>
      </ul>
    </li>
    <li role="separator"></li>
    <li><a href="#">Users</a></li>
    <li>
      <a href="#">Reports</a>
      <ul>
        <li><a href="#">Monthly</a></li>
        <li><a href="#">Quarterly</a></li>
        <li><a href="#">Annual</a></li>
      </ul>
    </li>
    <li role="separator"></li>
    <li><a href="#" aria-disabled="true">Archived</a></li>
    <li><a href="#">Logout</a></li>
  </ul>
</nav>`,
          code: `<nav role="navigation" aria-label="Sidebar" aria-orientation="vertical">
  <ul>
    <li><a href="#">Item 1</a></li>
    <li>
      <a href="#">With Submenu</a>
      <ul>
        <li><a href="#">Sub-item</a></li>
      </ul>
    </li>
    <li role="separator"></li>
    <li><a href="#" aria-disabled="true">Disabled</a></li>
  </ul>
</nav>`,
        },
        {
          title: "Sticky Menu",
          description:
            "A menu that sticks to the top of the viewport while scrolling. Use data-sticky for top, or data-sticky='bottom' for bottom.",
          preview: `<nav role="navigation" aria-label="Sticky navigation" aria-orientation="horizontal" data-sticky>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
</nav>`,
          code: `<!-- Sticky top -->
<nav role="navigation" aria-label="Main" data-sticky>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>

<!-- Sticky bottom -->
<nav role="navigation" aria-label="Footer" data-sticky="bottom">
  <ul>
    <li><a href="#">Privacy</a></li>
    <li><a href="#">Terms</a></li>
  </ul>
</nav>`,
        },
        {
          title: "Deeply Nested Menu",
          description: "Menus can be nested multiple levels deep with flyout submenus.",
          preview: `<nav role="navigation" aria-label="Category menu" aria-orientation="horizontal">
  <ul>
    <li>
      <a href="#">Categories</a>
      <ul>
        <li>
          <a href="#">Electronics</a>
          <ul>
            <li>
              <a href="#">Computers</a>
              <ul>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Desktops</a></li>
                <li><a href="#">Tablets</a></li>
              </ul>
            </li>
            <li><a href="#">Phones</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Clothing</a>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
          </ul>
        </li>
        <li><a href="#">Home & Garden</a></li>
      </ul>
    </li>
    <li><a href="#">Deals</a></li>
    <li><a href="#">New Arrivals</a></li>
  </ul>
</nav>`,
          code: `<nav role="navigation" aria-label="Menu">
  <ul>
    <li>
      <a href="#">Level 1</a>
      <ul>
        <li>
          <a href="#">Level 2</a>
          <ul>
            <li>
              <a href="#">Level 3</a>
              <ul>
                <li><a href="#">Level 4</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</nav>`,
        },
      ],
    },
    {
      title: "Meter",
      description: "A graphical display of a numeric value within a known range.",
    },
    {
      title: "Radio",
      description: "A group of mutually exclusive options where only one can be selected at a time.",
    },
    {
      title: "Slider",
      description: "An input control that allows users to select a value from a range by dragging a thumb.",
    },
    {
      title: "Spinbutton",
      description: "A numeric input field with increment and decrement buttons for adjusting values.",
    },
    {
      title: "Switch",
      description: "A toggle control that represents an on/off or enabled/disabled state.",
    },
    {
      title: "Table",
      description: "A structured grid of data organized in rows and columns for displaying information.",
    },
    {
      title: "Tabs",
      description:
        "A set of layered content panels where only one panel is displayed at a time. Uses CSS-only functionality with radio inputs for state management.",
      styles: {
        // Container
        '[role="tablist"]': {
          display: "flex",
          gap: "0",
          borderBlockEnd: "2px solid var(--surface_muted)",
          margin: "0",
          padding: "0",
          listStyle: "none",
        },
        // Vertical orientation
        '[role="tablist"][aria-orientation="vertical"]': {
          flexDirection: "column",
          borderBlockEnd: "none",
          borderInlineEnd: "2px solid var(--surface_muted)",
          width: "fit-content",
        },
        // Hide radio inputs
        '[role="tablist"] input[type="radio"]': {
          position: "absolute",
          opacity: "0",
          pointerEvents: "none",
        },
        // Tab buttons (labels)
        '[role="tablist"] label': {
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5em",
          padding: "0.75em 1.25em",
          cursor: "pointer",
          fontWeight: "500",
          color: "inherit",
          opacity: "0.7",
          borderBlockEnd: "2px solid transparent",
          marginBlockEnd: "-2px",
          transition: "opacity 0.15s ease, border-color 0.15s ease, background-color 0.15s ease",
          whiteSpace: "nowrap",
          userSelect: "none",
        },
        '[role="tablist"][aria-orientation="vertical"] label': {
          borderBlockEnd: "none",
          borderInlineEnd: "2px solid transparent",
          marginBlockEnd: "0",
          marginInlineEnd: "-2px",
        },
        // Hover state
        '[role="tablist"] label:hover': {
          opacity: "1",
          backgroundColor: "var(--surface_raised)",
        },
        // Focus state
        '[role="tablist"] input[type="radio"]:focus-visible + label': {
          outline: "2px solid var(--surface_interactive)",
          outlineOffset: "-2px",
        },
        // Selected tab
        '[role="tablist"] input[type="radio"]:checked + label': {
          opacity: "1",
          borderColor: "var(--surface_interactive)",
          color: "inherit",
        },
        // Tab panels container
        '[role="tablist"] + [role="group"]': {
          marginBlockStart: "1em",
        },
        '[role="tablist"][aria-orientation="vertical"] + [role="group"]': {
          marginBlockStart: "0",
          marginInlineStart: "1em",
        },
        // Individual tab panels - hidden by default
        '[role="tabpanel"]': {
          display: "none",
          animation: "fadeIn 0.2s ease",
        },
        // Show panel when corresponding radio is checked
        // These selectors use the :has() selector for CSS-only tab switching
        '[role="tablist"]:has(#tab1:checked) ~ [role="group"] [aria-labelledby="tab1-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#tab2:checked) ~ [role="group"] [aria-labelledby="tab2-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#tab3:checked) ~ [role="group"] [aria-labelledby="tab3-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#tab4:checked) ~ [role="group"] [aria-labelledby="tab4-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#tab5:checked) ~ [role="group"] [aria-labelledby="tab5-label"]': {
          display: "block",
        },
        // Vertical tabs demo
        '[role="tablist"]:has(#vtab1:checked) ~ [role="group"] [aria-labelledby="vtab1-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#vtab2:checked) ~ [role="group"] [aria-labelledby="vtab2-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#vtab3:checked) ~ [role="group"] [aria-labelledby="vtab3-label"]': {
          display: "block",
        },
        // Disabled tabs demo
        '[role="tablist"]:has(#dtab1:checked) ~ [role="group"] [aria-labelledby="dtab1-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#dtab2:checked) ~ [role="group"] [aria-labelledby="dtab2-label"]': {
          display: "block",
        },
        '[role="tablist"]:has(#dtab3:checked) ~ [role="group"] [aria-labelledby="dtab3-label"]': {
          display: "block",
        },
        // Fade in animation
        "@keyframes fadeIn": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // Disabled tab
        '[role="tablist"] input[type="radio"]:disabled + label': {
          opacity: "0.4",
          cursor: "not-allowed",
        },
        // Dark mode
        "@media (prefers-color-scheme: dark)": {
          '[role="tablist"]': {
            borderColor: "var(--surface_border_dark)",
          },
          '[role="tablist"][aria-orientation="vertical"]': {
            borderColor: "var(--surface_border_dark)",
          },
          '[role="tablist"] label:hover': {
            backgroundColor: "var(--surface_overlay_dark)",
          },
        },
      },
      example: [
        {
          title: "Horizontal Tabs",
          description: "Standard horizontal tabs with radio inputs for CSS-only state management.",
          preview: `<div>
  <ul role="tablist" aria-label="Settings tabs">
    <li><input type="radio" name="tabs-demo" id="tab1" checked /><label for="tab1" id="tab1-label">General</label></li>
    <li><input type="radio" name="tabs-demo" id="tab2" /><label for="tab2" id="tab2-label">Profile</label></li>
    <li><input type="radio" name="tabs-demo" id="tab3" /><label for="tab3" id="tab3-label">Security</label></li>
  </ul>
  <div role="group" aria-label="Tab panels">
    <div role="tabpanel" aria-labelledby="tab1-label">
      <h4>General Settings</h4>
      <p>Configure your general application settings here.</p>
    </div>
    <div role="tabpanel" aria-labelledby="tab2-label">
      <h4>Profile Settings</h4>
      <p>Update your profile information and preferences.</p>
    </div>
    <div role="tabpanel" aria-labelledby="tab3-label">
      <h4>Security Settings</h4>
      <p>Manage your password and security options.</p>
    </div>
  </div>
</div>`,
          code: `<ul role="tablist" aria-label="Settings tabs">
  <li>
    <input type="radio" name="tabs" id="tab1" checked />
    <label for="tab1" id="tab1-label">General</label>
  </li>
  <li>
    <input type="radio" name="tabs" id="tab2" />
    <label for="tab2" id="tab2-label">Profile</label>
  </li>
</ul>
<div role="group" aria-label="Tab panels">
  <div role="tabpanel" aria-labelledby="tab1-label">
    <p>General content...</p>
  </div>
  <div role="tabpanel" aria-labelledby="tab2-label">
    <p>Profile content...</p>
  </div>
</div>`,
        },
        {
          title: "Vertical Tabs",
          description: "Vertical tab orientation for sidebar-style navigation. Use aria-orientation='vertical'.",
          preview: `<div style="display: flex;">
  <ul role="tablist" aria-label="Navigation tabs" aria-orientation="vertical">
    <li><input type="radio" name="vtabs-demo" id="vtab1" checked /><label for="vtab1" id="vtab1-label">Dashboard</label></li>
    <li><input type="radio" name="vtabs-demo" id="vtab2" /><label for="vtab2" id="vtab2-label">Analytics</label></li>
    <li><input type="radio" name="vtabs-demo" id="vtab3" /><label for="vtab3" id="vtab3-label">Reports</label></li>
  </ul>
  <div role="group" aria-label="Tab panels">
    <div role="tabpanel" aria-labelledby="vtab1-label">
      <h4>Dashboard</h4>
      <p>Welcome to your dashboard overview.</p>
    </div>
    <div role="tabpanel" aria-labelledby="vtab2-label">
      <h4>Analytics</h4>
      <p>View your analytics and metrics here.</p>
    </div>
    <div role="tabpanel" aria-labelledby="vtab3-label">
      <h4>Reports</h4>
      <p>Generate and download reports.</p>
    </div>
  </div>
</div>`,
          code: `<div style="display: flex;">
  <ul role="tablist" aria-orientation="vertical">
    <li>
      <input type="radio" name="vtabs" id="vtab1" checked />
      <label for="vtab1">Dashboard</label>
    </li>
    <!-- More tabs... -->
  </ul>
  <div role="group" aria-label="Tab panels">
    <!-- Panels... -->
  </div>
</div>`,
        },
        {
          title: "Tabs with Disabled State",
          description: "Tabs can be disabled using the disabled attribute on the radio input.",
          preview: `<div>
  <ul role="tablist" aria-label="Feature tabs">
    <li><input type="radio" name="dtabs-demo" id="dtab1" checked /><label for="dtab1" id="dtab1-label">Active</label></li>
    <li><input type="radio" name="dtabs-demo" id="dtab2" disabled /><label for="dtab2" id="dtab2-label">Disabled</label></li>
    <li><input type="radio" name="dtabs-demo" id="dtab3" /><label for="dtab3" id="dtab3-label">Available</label></li>
  </ul>
  <div role="group" aria-label="Tab panels">
    <div role="tabpanel" aria-labelledby="dtab1-label">
      <p>This tab is active and selectable.</p>
    </div>
    <div role="tabpanel" aria-labelledby="dtab2-label">
      <p>This content is not accessible.</p>
    </div>
    <div role="tabpanel" aria-labelledby="dtab3-label">
      <p>This tab is also available for selection.</p>
    </div>
  </div>
</div>`,
          code: `<input type="radio" name="tabs" id="tab2" disabled />
<label for="tab2">Disabled Tab</label>`,
        },
      ],
    },
    {
      title: "Toolbar",
      description: "A container for grouping related controls such as buttons and menu items.",
    },
    {
      title: "Tooltip",
      description: "A contextual popup that displays descriptive information about an element on hover or focus.",
    },
    {
      title: "Treegrid",
      description: "A grid widget that combines the features of a tree and a data grid.",
    },
    {
      title: "Treeview",
      description: "A hierarchical list that can have nested groups of items that can be expanded or collapsed.",
    },
    {
      title: "Window Splitter",
      description: "A movable divider that separates two sections and allows resizing them.",
    },
  ],
};

function compile() {
  // Helper to escape HTML for code display
  const escapeHtml = (str: string) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Helper to render a navigation list
  const renderNavList = (items: { href: string; label: string }[]) =>
    items.map(({ href, label }) => `<li><a href="${href}">${label}</a></li>`).join("\n");

  // Helper to render a tag link list
  const renderTagList = (items: { id: string; label: string }[]) =>
    items.map(({ id, label }) => `<li><a href="#${id}">${label}</a></li>`).join("\n");

  // Helper to render an element variant
  const renderVariant = (variant: { title: string; description?: string; markup?: string }) => `
    <details>
      <summary>${variant.title}</summary>
      <article>
        <h4>${variant.title}</h4>
        <p>${variant.description ?? ""}</p>
        <div class="preview">${variant.markup ?? ""}</div>
        <pre><code class="language-html">${escapeHtml(variant.markup ?? "")}</code></pre>
      </article>
    </details>`;

  // Helper to render an element section
  const renderElementSection = (el: (typeof library.elements)[0]) => `
    <section id="${el.tag}">
      <h3>&lt;${el.tag}&gt; - ${el.title}</h3>
      <p>${el.description}</p>
      ${el.variants?.map(renderVariant).join("\n") ?? ""}
    </section>`;

  // Helper to render a component example
  const renderExample = (example: { title: string; description?: string; preview?: string; code?: string }) => `
    <article>
      <h4>${example.title}</h4>
      <p>${example.description ?? ""}</p>
      <div class="preview">${example.preview ?? ""}</div>
      <pre><code class="language-html">${escapeHtml(example.code ?? "")}</code></pre>
    </article>`;

  // Helper to render a component section
  const renderComponentSection = (component: (typeof library.components)[0]) => `
    <section id="${component.title.toLowerCase()}">
      <h3>${component.title}</h3>
      <p>${component.description}</p>
      ${component.example?.map(renderExample).join("\n") ?? ""}
    </section>`;

  // Build navigation data
  const elementNavItems = library.elements.map((el) => ({ href: `#${el.tag}`, label: el.tag }));
  const componentNavItems = library.components.map((c) => ({ href: `#${c.title.toLowerCase()}`, label: c.title }));
  const elementTagLinks = library.elements.map((el) => ({ id: el.tag, label: `&lt;${el.tag}&gt;` }));
  const componentTagLinks = library.components.map((c) => ({ id: c.title.toLowerCase(), label: c.title }));

  // Render HTML
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${library.name}</title>
  <link rel="stylesheet" href="before.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>
<body>
  <nav role="navigation" aria-label="Main navigation" aria-orientation="horizontal" data-sticky>
    <ul>
      <li><a href="#top">${library.name}</a></li>
      <li>
        <a href="#elements">Elements</a>
        <ul>${renderNavList(elementNavItems)}</ul>
      </li>
      <li>
        <a href="#components">Components</a>
        <ul>${renderNavList(componentNavItems)}</ul>
      </li>
      <li><a href="https://github.com/kvnlnt/before.style" target="_blank">GitHub</a></li>
    </ul>
  </nav>
  <section>
    <h2>Philosophy & Principles</h2>
    <p>
      ${library.description}
    </p>
  </section>

  <section>
    <h2>Getting Started</h2>
    <p>
      To get started, simply copy/paste the <code>Before.css</code> file into
      your project and link to it in the head of your HTML document.
    </p>
  </section>

  <section id="elements">
    <h2>Elements</h2>
    <p>The following HTML5 elements are styled by Before Style:</p>
    <ul style="list-style-type: none; display: flex; flex-wrap: wrap; row-gap: 0rem; column-gap: 1rem; padding: 0; margin: 0;">
      ${renderTagList(elementTagLinks)}
    </ul>
  </section>

  ${library.elements.map(renderElementSection).join("\n")}

  <section id="components">
    <h2>Components</h2>
    <p>The following components are built using semantic HTML and styled by Before Style:</p>
    <ul style="list-style-type: none; display: flex; flex-wrap: wrap; row-gap: 0rem; column-gap: 1rem; padding: 0; margin: 0;">
      ${renderTagList(componentTagLinks)}
    </ul>
  </section>

  ${library.components.map(renderComponentSection).join("\n")}

  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
</body>
</html>`;

  Bun.file("docs/before.html").write(html);

  // Helper to convert camelCase to kebab-case
  const toKebab = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  // Helper to render a style object to CSS
  const renderStyles = (styles: Record<string, unknown>): string => {
    return Object.entries(styles)
      .map(([prop, value]) => `  ${toKebab(prop)}: ${value};`)
      .join("\n");
  };

  // Helper to render a selector block (handles nested media queries and keyframes)
  const renderBlock = (selector: string, value: unknown): string => {
    if (selector.startsWith("@media")) {
      // It's a media query - value is an object of selectors
      const innerRules = Object.entries(value as Record<string, unknown>)
        .map(
          ([innerSelector, innerStyles]) =>
            `  ${innerSelector} {\n${renderStyles(innerStyles as Record<string, unknown>)
              .split("\n")
              .map((l) => "  " + l)
              .join("\n")}\n  }`,
        )
        .join("\n");
      return `${selector} {\n${innerRules}\n}`;
    }
    if (selector.startsWith("@keyframes")) {
      // It's a keyframes rule - value is an object of keyframe stops (from, to, percentages)
      const innerRules = Object.entries(value as Record<string, unknown>)
        .map(
          ([stop, styles]) =>
            `  ${stop} {\n${renderStyles(styles as Record<string, unknown>)
              .split("\n")
              .map((l) => "  " + l)
              .join("\n")}\n  }`,
        )
        .join("\n");
      return `${selector} {\n${innerRules}\n}`;
    }
    // Regular selector
    return `${selector} {\n${renderStyles(value as Record<string, unknown>)}\n}`;
  };

  // Render CSS
  const css = `/* Before Style - A classless, semantic CSS reset for HTML5 elements and accessible components */
/* Version: ${library.version} */

/* ==========================================================================
   Reset
   ========================================================================== */

${Object.entries(library.reset)
  .map(([selector, styles]) => renderBlock(selector, styles))
  .join("\n\n")}

/* ==========================================================================
   Tokens (CSS Custom Properties)
   ========================================================================== */

:root {
${Object.entries(library.tokens)
  .map(([token, value]) => `  ${token}: ${value};`)
  .join("\n")}
}

/* ==========================================================================
   Elements
   ========================================================================== */

${library.elements
  .filter((el) => el.styles && Object.keys(el.styles).length > 0)
  .map((el) =>
    Object.entries(el.styles)
      .map(([selector, styles]) => renderBlock(selector, styles))
      .join("\n\n"),
  )
  .join("\n\n")}

/* ==========================================================================
   Components
   ========================================================================== */

${library.components
  .filter((comp) => comp.styles && Object.keys(comp.styles).length > 0)
  .map((comp) =>
    Object.entries(comp.styles!)
      .map(([selector, styles]) => renderBlock(selector, styles))
      .join("\n\n"),
  )
  .join("\n\n")}
`;
  Bun.file("docs/before.css").write(css);

  // Generate minified CSS
  const minifiedCss = css
    .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
    .replace(/\s+/g, " ") // Collapse whitespace
    .replace(/\s*{\s*/g, "{") // Remove space around {
    .replace(/\s*}\s*/g, "}") // Remove space around }
    .replace(/\s*;\s*/g, ";") // Remove space around ;
    .replace(/\s*:\s*/g, ":") // Remove space around :
    .replace(/;\}/g, "}"); // Remove ; before }

  Bun.file("docs/before.min.css").write(minifiedCss);

  /* ==========================================================================
   Skills - Generate a Skills.md file for agents
   ========================================================================== */

  // Helper to render element documentation
  const renderElementDoc = (el: (typeof library.elements)[0]) => {
    const variants = el.variants
      ?.map(
        (v) => `
#### ${v.title}

${v.description ?? ""}

\`\`\`html
${v.markup ?? ""}
\`\`\``,
      )
      .join("\n");

    return `### \`<${el.tag}>\` - ${el.title}

${el.description ?? ""}

${variants ?? ""}`;
  };

  // Helper to render component documentation
  const renderComponentDoc = (comp: (typeof library.components)[0]) => {
    const examples = comp.example
      ?.map(
        (ex) => `
#### ${ex.title}

${ex.description ?? ""}

\`\`\`html
${ex.code ?? ex.preview ?? ""}
\`\`\``,
      )
      .join("\n");

    // Extract selectors used by this component
    const selectors = comp.styles
      ? Object.keys(comp.styles)
          .filter((s) => !s.startsWith("@"))
          .slice(0, 5)
          .map((s) => `\`${s}\``)
          .join(", ")
      : "";

    return `### ${comp.title}

${comp.description ?? ""}

${selectors ? `**Selectors:** ${selectors}` : ""}

${examples ?? ""}`;
  };

  // Generate the skill.md content
  const skillMd = `# ${library.name} ${library.version} - Agent Skill Guide

## Strategy
${library.description}

This document teaches AI agents how to write correct HTML markup that works with the Before Style classless CSS library.

## Core Principle: Classless CSS

**Before Style is a classless CSS library.** This means:

- ❌ **Never use CSS classes** (no \`class="..."\` attributes)
- ✅ **Use semantic HTML elements** (\`<nav>\`, \`<article>\`, \`<section>\`, etc.)
- ✅ **Use ARIA roles and attributes** (\`role="tablist"\`, \`aria-orientation="vertical"\`)
- ✅ **Use HTML5 native attributes** (\`name="accordion-group"\`, \`open\`, \`disabled\`)
- ✅ **Use data attributes** (\`data-sticky\`, \`data-variant="..."\`)

---

## Tokens (CSS Custom Properties)

The library provides these CSS custom properties for theming:

\`\`\`css
:root {
${Object.entries(library.tokens)
  .map(([token, value]) => `  ${token}: ${value};`)
  .join("\n")}
}
\`\`\`

---

## Elements

The following HTML5 elements are styled by Before Style:

${library.elements.map(renderElementDoc).join("\n\n---\n\n")}

---

## Components

The following components are built using semantic HTML:

${library.components.map(renderComponentDoc).join("\n\n---\n\n")}

---

## Quick Reference

### Selector Patterns

| Pattern | Purpose |
|---------|---------|
| \`nav[role="navigation"]\` | Navigation menu |
| \`nav[aria-orientation="vertical"]\` | Vertical navigation |
| \`nav[data-sticky]\` | Sticky navigation |
| \`details[name]\` | Accordion (grouped) |
| \`[role="tablist"]\` | Tab container |
| \`[role="tabpanel"]\` | Tab panel |
| \`[role="group"]\` | Tab panels container |
| \`li[role="separator"]\` | Menu divider |
| \`a[aria-current="page"]\` | Current page indicator |

### Do's and Don'ts

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use semantic HTML5 elements | Use div soup |
| Use ARIA roles for components | Use CSS classes |
| Use ARIA attributes for state | Forget accessibility |
| Use HTML5 native attributes | Use inline styles for layout |
| Use data attributes when needed | Mix with class-based frameworks |

---

## Page Template

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="before.css">
</head>
<body>
  <nav role="navigation" aria-label="Main" data-sticky>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  
  <main>
    <section>
      <h1>Page Heading</h1>
      <p>Content goes here.</p>
    </section>
  </main>
  
  <footer>
    <p>© 2026 Company Name</p>
  </footer>
</body>
</html>
\`\`\`
`;

  Bun.file("docs/before.md").write(skillMd);
}

compile();
