# Before 1.0.0 - Agent Skill Guide

## Strategy
Before is a classless, semantic style reset that styles HTML5 elements directly, providing accessible defaults without relying on
<a target="_blank" href="https://css-tricks.com/different-ways-to-write-css/">utility-first CSS libraries</a> or overly complex frameworks.
It is themeable (via <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</a>) and designed for
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement">progressive enhancement</a>, allowing further customization through classes, components, or frameworks when desired.
By targeting <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_html">semantic HTML</a>, it provides a rock-solid, long-term foundation.
All components are implemented according to the
<a href="https://www.w3.org/WAI/ARIA/apg/patterns/">ARIA Authoring Practices Guide (APG)</a>, ensuring they are accessible, predictable, and keyboard-friendly, so your semantic HTML remains usable for everyone.
    

This document teaches AI agents how to write correct HTML markup that works with the Before Style classless CSS library.

## Core Principle: Classless CSS

**Before Style is a classless CSS library.** This means:

- ❌ **Never use CSS classes** (no `class="..."` attributes)
- ✅ **Use semantic HTML elements** (`<nav>`, `<article>`, `<section>`, etc.)
- ✅ **Use ARIA roles and attributes** (`role="tablist"`, `aria-orientation="vertical"`)
- ✅ **Use HTML5 native attributes** (`name="accordion-group"`, `open`, `disabled`)
- ✅ **Use data attributes** (`data-sticky`, `data-variant="..."`)

---

## Tokens (CSS Custom Properties)

The library provides these CSS custom properties for theming:

```css
:root {
  --palette_gray: 0.55 0.01 260;
  --palette_red: 0.65 0.20 25;
  --palette_orange: 0.70 0.18 55;
  --palette_yellow: 0.85 0.18 95;
  --palette_green: 0.70 0.17 145;
  --palette_blue: 0.65 0.18 250;
  --palette_purple: 0.60 0.20 300;
  --palette_white: 0.98 0.005 260;
  --palette_black: 0.15 0.01 260;
  --body_max_width: 120ch;
  --body_padding: 1.5rem;
  --body_margin: 0 auto;
  --scale_opacity: 1;
  --scale_contrast: 1;
  --scale_font_scaling: 1;
  --scale_line_height: 1;
  --scale_font_weight: 1;
  --scale_border_radius: 0.5;
  --scale_shadow_intensity: 1;
  --scale_spacing: 1;
  --scale_transition_speed: 1;
  --tone_opacity_solid: 1;
  --tone_opacity_strong: 0.85;
  --tone_opacity_normal: 0.7;
  --tone_opacity_muted: 0.5;
  --tone_opacity_faint: 0.25;
  --tone_neutral: oklch(var(--palette_gray));
  --tone_info: oklch(var(--palette_blue));
  --tone_success: oklch(var(--palette_green));
  --tone_warning: oklch(var(--palette_yellow));
  --tone_error: oklch(var(--palette_red));
  --tone_accent: oklch(var(--palette_purple));
  --text_color_primary: oklch(var(--palette_white) / var(--tone_opacity_normal));
  --text_color_heading: oklch(var(--palette_white));
  --text_color_muted: oklch(var(--palette_white) / var(--tone_opacity_muted));
  --text_color_inverse: oklch(var(--palette_black));
  --text_color_link: oklch(var(--palette_blue));
  --font_family_serif: ui-serif, Georgia, serif;
  --font_family_sans: system-ui, -apple-system, sans-serif;
  --font_family_mono: ui-monospace, "SF Mono", Menlo, monospace;
  --font_family_script: "Comic Sans MS", cursive, sans-serif;
  --font_family_display: system-ui, -apple-system, sans-serif;
  --font_weight_regular: 400;
  --font_weight_medium: 500;
  --font_weight_bold: 700;
  --font_size_body: 1rem;
  --font_size_label: 0.875rem;
  --font_size_heading: 1.5rem;
  --font_size_code: 0.9rem;
  --text_font_body: var(--font_family_sans);
  --text_font_heading: var(--font_family_display);
  --text_font_label: var(--font_family_sans);
  --text_font_code: var(--font_family_mono);
  --text_font_system: var(--font_family_sans);
  --surface_base: oklch(var(--palette_black));
  --surface_raised: oklch(0.96 0.005 260);
  --surface_overlay: oklch(0.92 0.005 260);
  --surface_sunken: oklch(0.9 0.005 260);
  --surface_muted: oklch(0.85 0.005 260);
  --surface_base_dark: oklch(var(--palette_black));
  --surface_raised_dark: oklch(0.2 0.01 260);
  --surface_overlay_dark: oklch(0.25 0.01 260);
  --surface_elevated_dark: oklch(0.3 0.01 260);
  --surface_border_dark: oklch(0.35 0.01 260);
  --surface_interactive: oklch(var(--palette_blue));
  --surface_interactive_hover: oklch(0.55 0.18 250);
  --surface_interactive_active: oklch(0.5 0.18 250);
  --surface_backdrop: oklch(0 0 0 / 0.5);
  --surface_highlight: oklch(0.92 0.15 95);
  --surface_highlight_dark: oklch(0.45 0.12 95);
}
```

---

## Elements

The following HTML5 elements are styled by Before Style:

### `<a>` - a

Anchor element that creates a hyperlink to other pages, files, or locations.


#### Default Link

A standard hyperlink with underline styling that inherits the current text color.

```html
<a href="#">Click here to learn more</a>
```

#### Visited Link

Links that have been visited maintain the current color with slightly reduced opacity.

```html
<a href="#visited-example">Previously visited link</a>
```

#### External Link

Links with target="_blank" automatically display an external link indicator (↗).

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>
```

#### Download Link

Links with the download attribute display a download indicator (↓) before the text.

```html
<a href="/files/document.pdf" download>Download PDF</a>
```

#### Email Link

Links with mailto: protocol display an email icon (✉) before the text.

```html
<a href="mailto:hello@example.com">hello@example.com</a>
```

#### Phone Link

Links with tel: protocol display a phone icon (📞) before the text.

```html
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

#### Disabled Link

Use aria-disabled="true" to visually disable a link while maintaining accessibility.

```html
<a href="#" aria-disabled="true">Unavailable link</a>
```

#### Current Page Link

Use aria-current="page" to indicate the current page in navigation. The link appears bold without underline.

```html
<nav>
  <a href="/">Home</a>
  <a href="/about" aria-current="page">About</a>
  <a href="/contact">Contact</a>
</nav>
```

#### Skip Link

A hidden link that becomes visible on focus, allowing keyboard users to skip to main content.

```html
<a href="#main-content">Skip to main content</a>
<main id="main-content">Main content here...</main>
```

---

### `<abbr>` - abbr

Represents an abbreviation or acronym with an optional title for the full description.


#### Abbreviation

Dotted underline indicates hover for full text.

```html
<p>The <abbr title="World Wide Web">WWW</abbr> changed everything.</p>
```

---

### `<address>` - address

Provides contact information for the nearest article or body ancestor.


#### Address

Italic contact information block.

```html
<address>
  Contact: <a href="mailto:info@example.com">info@example.com</a><br>
  123 Main St, City
</address>
```

---

### `<area>` - area

Defines a clickable area inside an image map.



---

### `<article>` - article

Represents a self-contained composition intended for independent distribution or reuse.


#### Article

Self-contained content block with implicit padding.

```html
<article>
  <h2>Article Title</h2>
  <p>Article content goes here...</p>
</article>
```

---

### `<aside>` - aside

Represents content tangentially related to the main content, often used for sidebars.


#### Aside

Sidebar or supplementary content with subtle styling.

```html
<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#">Link one</a></li>
    <li><a href="#">Link two</a></li>
  </ul>
</aside>
```

---

### `<audio>` - audio

Embeds sound content with controls for playback.


#### Audio Player

Full-width audio player with native controls.

```html
<audio controls>
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4
" type="audio/mpeg">
  Your browser does not support audio.
</audio>
```

---

### `<b>` - b

Represents text stylistically offset from normal text without conveying extra importance.


#### Bold

Bold text for stylistic offset.

```html
<p>The <b>quick</b> brown fox jumps.</p>
```

---

### `<bdi>` - bdi

Isolates a span of text that might be formatted in a different direction from surrounding text.


#### Bidirectional Isolation

Isolates text direction from surrounding content.

```html
<p>User: <bdi>محمد</bdi> - 5 posts</p>
```

---

### `<bdo>` - bdo

Overrides the current text directionality.


#### Bidirectional Override

Forces text direction override.

```html
<p><bdo dir="rtl">This text is reversed</bdo></p>
```

---

### `<blockquote>` - blockquote

Indicates an extended quotation from another source.


#### Block Quote

Indented with a left border to distinguish quoted content.

```html
<blockquote>
  <p>The only way to do great work is to love what you do.</p>
</blockquote>
```

---

### `<body>` - body

Represents the content of an HTML document.


#### Default Body

Clean, readable defaults with system fonts, comfortable line height, and responsive max-width for optimal reading.

```html
<p>The body element provides the foundation for all content. It uses system fonts for fast loading and familiar appearance.</p>
```

---

### `<br>` - br

Produces a line break in text.


#### Line Break

Forces a line break within text.

```html
<p>Line one<br>Line two</p>
```

---

### `<canvas>` - canvas

Container for graphics drawn via scripting (usually JavaScript).


#### Canvas

Drawing surface with responsive sizing.

```html
<canvas width="300" height="150">
  Your browser does not support canvas.
</canvas>
```

---

### `<caption>` - caption

Specifies the title of a table.


#### Table Caption

Descriptive title displayed above the table.

```html
<table>
  <caption>Monthly Sales Data</caption>
  <tr><th>Month</th><th>Sales</th></tr>
  <tr><td>Jan</td><td>$1,000</td></tr>
</table>
```

---

### `<cite>` - cite

Represents the title of a creative work being referenced.


#### Citation

Italic text for referencing creative works.

```html
<p>My favorite book is <cite>The Great Gatsby</cite>.</p>
```

---

### `<code>` - code

Displays a fragment of computer code.


#### Inline Code

Inline code with subtle background for visibility.

```html
<p>Use the <code>console.log()</code> function to debug.</p>
```

#### Code Block

Wrap code in pre for multi-line code blocks.

```html
<pre><code>function greet(name) {
  return "Hello, " + name;
}</code></pre>
```

---

### `<col>` - col

Definesss a column within a table and is used for styling columns.



---

### `<colgroup>` - colgroup

Groups one or more columns in a table for formatting.



---

### `<data>` - data

Links content with a machine-readable translation.


#### Data

Machine-readable value with human display.

```html
<p>Price: <data value="49.99">$49.99</data></p>
```

---

### `<datalist>` - datalist

Contains a set of option elements representing predefined options for an input.


#### Datalist

Provides autocomplete options for an input.

```html
<input list="browsers" placeholder="Choose a browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>
```

---

### `<dd>` - dd

Provides the description or value for a term in a description list.


#### Definition Description

Indented description for a term.

```html
<dl>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

---

### `<del>` - del

Represents text that has been deleted from a document.


#### Deleted Text

Strikethrough styling to indicate removed content.

```html
<p>Price: <del>$50</del> $30</p>
```

---

### `<details>` - details

Creates a disclosure widget from which the user can obtain additional information.


#### Disclosure Widget

Expandable content with toggle control.

```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content revealed when expanded.</p>
</details>
```

---

### `<dialog>` - dialog

Represents a dialog box or other interactive component.


#### Dialog

A modal dialog box for user interaction.

```html
<dialog open>
  <p>This is a dialog box.</p>
  <button>Close</button>
</dialog>
```

---

### `<dfn>` - dfn

Indicates the defining instance of a term.


#### Definition

Italic styling for terms being defined.

```html
<p>A <dfn>pixel</dfn> is the smallest unit of a digital image.</p>
```

---

### `<div>` - div

A generic container for flow content with no semantic meaning.


#### Div Container

Generic block-level container.

```html
<div>
  <p>Content inside a div.</p>
</div>
```

---

### `<dl>` - dl

Represents a description list of term-description pairs.


#### Description List

A list of terms and their descriptions, perfect for glossaries or metadata.

```html
<dl>
  <dt>Term</dt>
  <dd>The definition or description of the term.</dd>
  <dt>Another Term</dt>
  <dd>Another definition.</dd>
</dl>
```

---

### `<dt>` - dt

Specifies a term in a description list.


#### Definition Term

Bold term in a definition list.

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
```

---

### `<em>` - em

Marks text with stress emphasis.


#### Emphasized Text

Italic text for stress emphasis.

```html
<p>I <em>really</em> mean it.</p>
```

---

### `<embed>` - embed

Embeds external content from an external application or plugin.



---

### `<fieldset>` - fieldset

Groups related elements within a form.


#### Form Group

Bordered container for grouping related form fields.

```html
<fieldset>
  <legend>Personal Info</legend>
  <label>Name</label>
  <input type="text">
  <label>Email</label>
  <input type="email">
</fieldset>
```

---

### `<figcaption>` - figcaption

Represents a caption or legend for a figure.


#### Figure Caption

Smaller, muted text for describing figure content.

```html
<figcaption>Photo by Jane Doe, 2024</figcaption>
```

---

### `<figure>` - figure

Represents self-contained content with an optional caption.


#### Figure with Caption

Image container with descriptive caption below.

```html
<figure>
  <img src="https://picsum.photos/400/200" alt="Sample">
  <figcaption>A descriptive caption for the image.</figcaption>
</figure>
```

---

### `<footer>` - footer

Represents the footer of a section or page, typically containing authorship or copyright.


#### Footer

Footer content container.

```html
<footer>
  <p>&copy; 2024 Company Name</p>
</footer>
```

---

### `<form>` - form

Represents a section containing interactive controls for submitting information.


#### Basic Form

A simple form with inputs and a submit button.

```html
<form>
  <label>Name</label>
  <input type="text" placeholder="Your name">
  <label>Email</label>
  <input type="email" placeholder="you@example.com">
  <button type="submit">Submit</button>
</form>
```

---

### `<h1>` - h1

Represents the highest level section heading.


#### Page Heading

The main heading of the page. Bold and large for clear hierarchy.

```html
<h1>Main Page Title</h1>
```

---

### `<h2>` - h2

Represents a second-level section heading.


#### Heading 2

Major section heading at 2rem size.

```html
<h2>Section Heading</h2>
```

---

### `<h3>` - h3

Represents a third-level section heading.


#### Heading 3

Subsection heading at 1.5rem size.

```html
<h3>Subsection Heading</h3>
```

---

### `<h4>` - h4

Represents a fourth-level section heading.


#### Heading 4

Minor heading at 1.25rem size.

```html
<h4>Minor Heading</h4>
```

---

### `<h5>` - h5

Represents a fifth-level section heading.


#### Heading 5

Small heading at 1rem size.

```html
<h5>Small Heading</h5>
```

---

### `<h6>` - h6

Represents the lowest level section heading.


#### Heading 6

Smallest heading at 0.875rem size.

```html
<h6>Smallest Heading</h6>
```

---

### `<head>` - head

Contains machine-readable metadata about the document.



---

### `<header>` - header

Represents introductory content or navigational aids for a section or page.


#### Header

Introductory content container.

```html
<header>
  <h1>Site Title</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>
```

---

### `<hgroup>` - hgroup

Groups a heading with related content such as subheadings.


#### Heading Group

Groups heading with subtitle, reduced spacing between.

```html
<hgroup>
  <h1>Main Title</h1>
  <p>Subtitle or tagline</p>
</hgroup>
```

---

### `<hr>` - hr

Represents a thematic break between paragraph-level elements.


#### Horizontal Rule

A subtle line to separate content sections.

```html
<p>Content above the break.</p>
<hr>
<p>Content below the break.</p>
```

---

### `<html>` - html

The root element of an HTML document.



---

### `<i>` - i

Represents text in an alternate voice or mood, such as technical terms or foreign phrases.


#### Italic

Italic text for alternate voice or mood.

```html
<p>The word <i>café</i> is from French.</p>
```

---

### `<iframe>` - iframe

Embeds another HTML page within the current page.


#### Iframe

Embedded frame with no border.

```html
<iframe src="https://example.com" title="Embedded page"></iframe>
```

---

### `<img>` - img

Embeds an image into the document.


#### Image

Responsive image that scales to its container.

```html
<img src="https://picsum.photos/400/200" alt="Sample image">
```

---

### `<input>` - input

Creates interactive form controls for accepting user data.


#### Text Input

Standard text input with clean borders and focus state.

```html
<input type="text" placeholder="Enter text...">
```

#### Checkbox

Checkbox input using system accent color.

```html
<label><input type="checkbox"> Accept terms</label>
```

#### Radio

Radio button for single selection from a group.

```html
<label><input type="radio" name="option"> Option A</label>
<label><input type="radio" name="option"> Option B</label>
```

---

### `<ins>` - ins

Represents text that has been added to a document.


#### Inserted Text

Underlined to indicate newly added content.

```html
<p>We now offer <ins>free shipping</ins> on all orders.</p>
```

---

### `<kbd>` - kbd

Represents user keyboard input.


#### Keyboard Key

Styled like a physical keyboard key with border and shadow.

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

---

### `<label>` - label

Represents a caption for an item in a user interface.


#### Form Label

Block-level label with subtle weight.

```html
<label>Username</label>
<input type="text">
```

---

### `<legend>` - legend

Represents a caption for a fieldset.


#### Fieldset Legend

Caption displayed on fieldset border.

```html
<fieldset>
  <legend>Account Info</legend>
  <label>Email</label>
  <input type="email">
</fieldset>
```

---

### `<li>` - li

Represents an item in a list.


#### List Item

Individual list items with comfortable spacing.

```html
<ul>
  <li>A single list item with proper vertical rhythm</li>
</ul>
```

---

### `<main>` - main

Represents the dominant content of the body of a document.


#### Main Content

Primary content area of the document.

```html
<main>
  <h1>Page Title</h1>
  <p>Main content goes here...</p>
</main>
```

---

### `<map>` - map

Defines an image map with clickable areas.



---

### `<mark>` - mark

Represents text marked or highlighted for reference or notation.


#### Highlighted Text

Yellow highlight for marking relevant content.

```html
<p>Search results: The <mark>quick brown fox</mark> jumps over the lazy dog.</p>
```

---

### `<meta>` - meta

Represents metadata that cannot be expressed with other HTML elements.



---

### `<nav>` - nav

Represents a section with navigation links.


#### Navigation

Navigation block for site or page links.

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

---

### `<noscript>` - noscript

Defines content to display when scripts are not supported or disabled.



---

### `<object>` - object

Represents an external resource such as an image, plugin, or nested browsing context.



---

### `<ol>` - ol

Represents an ordered list of items.


#### Basic Ordered List

A numbered list for sequential content.

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

---

### `<optgroup>` - optgroup

Groups related options within a select element.


#### Option Group

Groups options with a bold label.

```html
<select>
  <optgroup label="Fruits">
    <option>Apple</option>
    <option>Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option>Carrot</option>
  </optgroup>
</select>
```

---

### `<option>` - option

Represents an option in a select element or datalist.


#### Option

Selectable item within a dropdown.

```html
<select>
  <option value="1">First option</option>
  <option value="2">Second option</option>
</select>
```

---

### `<output>` - output

Container for the result of a calculation or user action.


#### Output

Displays calculation results inline.

```html
<p>Total: <output>42</output></p>
```

---

### `<p>` - p

Represents a paragraph of text.


#### Basic Paragraph

Standard paragraph with comfortable line height and spacing.

```html
<p>This is a paragraph of text. It has comfortable line height for readability and proper spacing between consecutive paragraphs.</p>
<p>This is a second paragraph demonstrating the vertical rhythm between paragraphs.</p>
```

---

### `<picture>` - picture

Contains source elements and one img element for responsive images.


#### Picture

Responsive image container for multiple sources.

```html
<picture>
  <source srcset="https://picsum.photos/seed/button/800/400" media="(min-width: 800px)">
  <img src="https://picsum.photos/seed/button/400/200" alt="Responsive image">
</picture>
```

---

### `<pre>` - pre

Represents preformatted text preserving whitespace and line breaks.


#### Preformatted Text

Preserves whitespace and uses monospace font with subtle background.

```html
<pre>Line 1
Line 2
  Indented line</pre>
```

---

### `<progress>` - progress

Displays the completion progress of a task.


#### Progress Bar

Visual progress indicator using the primary color.

```html
<progress value="70" max="100"></progress>
```

---

### `<q>` - q

Represents a short inline quotation.


#### Inline Quote

Automatically wrapped with quotation marks.

```html
<p>She said, <q>This is amazing!</q></p>
```

---

### `<rp>` - rp

Provides fallback parentheses for browsers that don't support ruby annotations.


#### Ruby Parentheses

Fallback parentheses for non-ruby browsers.

```html
<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>
```

---

### `<rt>` - rt

Specifies the ruby text component of a ruby annotation.


#### Ruby Text

Small annotation text above base character.

```html
<ruby>漢<rt>kan</rt></ruby>
```

---

### `<ruby>` - ruby

Represents a ruby annotation for showing pronunciation of East Asian characters.


#### Ruby Annotation

Shows pronunciation above characters.

```html
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

---

### `<s>` - s

Represents text that is no longer accurate or relevant.


#### Strikethrough

Text with line through indicating outdated content.

```html
<p>Price: <s>$50</s> $35</p>
```

---

### `<samp>` - samp

Represents sample output from a computer program.


#### Sample Output

Monospace font for computer output.

```html
<p>The error was: <samp>File not found</samp></p>
```

---

### `<script>` - script

Embeds or references executable JavaScript code.



---

### `<section>` - section

Represents a standalone section of a document.


#### Section

Thematic grouping of content.

```html
<section>
  <h2>Section Heading</h2>
  <p>Section content...</p>
</section>
```

---

### `<select>` - select

Represents a control providing a menu of options.


#### Select Dropdown

Dropdown menu for selecting from predefined options.

```html
<select>
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

---

### `<slot>` - slot

A placeholder inside a web component for custom markup.



---

### `<small>` - small

Represents side comments or small print.


#### Small Print

Reduced font size for fine print or disclaimers.

```html
<p>Price: $99 <small>(plus tax)</small></p>
```

---

### `<source>` - source

Specifies multiple media resources for picture, audio, or video elements.



---

### `<span>` - span

A generic inline container for phrasing content.


#### Span

Generic inline container.

```html
<p>This is <span>inline content</span> in a paragraph.</p>
```

---

### `<strong>` - strong

Indicates text with strong importance or urgency.


#### Strong Text

Bold text for emphasis and importance.

```html
<p>This is <strong>very important</strong> information.</p>
```

---

### `<style>` - style

Contains CSS styling information for a document.



---

### `<sub>` - sub

Represents subscript text.


#### Subscript

Text positioned below the baseline.

```html
<p>H<sub>2</sub>O is the chemical formula for water.</p>
```

---

### `<summary>` - summary

Specifies a visible heading for a details element.


#### Summary

Clickable heading that toggles the details content.

```html
<details>
  <summary>Show more info</summary>
  <p>Additional information here.</p>
</details>
```

---

### `<sup>` - sup

Represents superscript text.


#### Superscript

Text positioned above the baseline.

```html
<p>E = mc<sup>2</sup> is Einstein's famous equation.</p>
```

---

### `<table>` - table

Represents tabular data with rows and columns.


#### Basic Table

A simple table with headers and data cells.

```html
<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>30</td></tr>
    <tr><td>Bob</td><td>25</td></tr>
  </tbody>
</table>
```

---

### `<tbody>` - tbody

Groups the body content rows of a table.


#### Table Body

Container for table body rows.

```html
<table>
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td></tr>
    <tr><td>Bob</td></tr>
  </tbody>
</table>
```

---

### `<td>` - td

Represents a data cell in a table.


#### Table Data Cell

Standard data cell with padding and border.

```html
<table>
  <tr><th>Item</th><th>Price</th></tr>
  <tr><td>Apple</td><td>$1.50</td></tr>
  <tr><td>Banana</td><td>$0.75</td></tr>
</table>
```

---

### `<template>` - template

Holds HTML content that is not rendered but can be instantiated via JavaScript.



---

### `<textarea>` - textarea

Represents a multi-line plain text editing control.


#### Text Area

Multi-line input with resizable height.

```html
<textarea placeholder="Enter your message..."></textarea>
```

---

### `<tfoot>` - tfoot

Groups the footer content rows of a table.


#### Table Footer

Container for table footer rows, often for totals.

```html
<table>
  <thead><tr><th>Item</th><th>Cost</th></tr></thead>
  <tbody><tr><td>Item 1</td><td>$5</td></tr></tbody>
  <tfoot><tr><td>Total</td><td>$5</td></tr></tfoot>
</table>
```

---

### `<th>` - th

Represents a header cell in a table.


#### Table Header

Bold header cell with bottom border.

```html
<table>
  <tr><th>Name</th><th>Age</th><th>City</th></tr>
  <tr><td>Alice</td><td>30</td><td>NYC</td></tr>
</table>
```

---

### `<thead>` - thead

Groups the header content rows of a table.


#### Table Head

Container for table header rows.

```html
<table>
  <thead>
    <tr><th>Product</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Widget</td><td>$10</td></tr>
  </tbody>
</table>
```

---

### `<time>` - time

Represents a specific period in time or a machine-readable datetime.


#### Time

Machine-readable date/time with human display.

```html
<p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
```

---

### `<title>` - title

Defines the document title shown in the browser tab.



---

### `<tr>` - tr

Represents a row of cells in a table.


#### Table Row

Horizontal row containing table cells.

```html
<table>
  <tr><th>Col 1</th><th>Col 2</th></tr>
  <tr><td>A1</td><td>A2</td></tr>
  <tr><td>B1</td><td>B2</td></tr>
</table>
```

---

### `<track>` - track

Specifies timed text tracks for media elements.



---

### `<u>` - u

Represents text with an unarticulated annotation, such as misspelled words.


#### Underline

Wavy underline for annotated text like spelling errors.

```html
<p>Check the <u>speling</u> of this word.</p>
```

---

### `<ul>` - ul

Represents an unordered list of items.


#### Basic Unordered List

A bullet list with proper spacing and indentation.

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

#### Nested List

Lists can be nested for hierarchical content.

```html
<ul>
  <li>Parent item
    <ul>
      <li>Child item</li>
      <li>Another child</li>
    </ul>
  </li>
  <li>Another parent</li>
</ul>
```

---

### `<var>` - var

Represents the name of a variable in a mathematical or programming context.


#### Variable

Italic monospace for variable names.

```html
<p>Let <var>x</var> equal the number of items.</p>
```

---

### `<video>` - video

Embeds video content with playback controls.


#### Video Player

Responsive video with native controls.

```html
<video controls>
  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
" type="video/mp4">
  Your browser does not support video.
</video>
```

---

### `<wbr>` - wbr

Represents an optional line break opportunity.


#### Word Break Opportunity

Suggests where a line break may occur.

```html
<p>super<wbr>cali<wbr>fragilistic</p>
```

---

## Components

The following components are built using semantic HTML:

### Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

**Selectors:** `details[name]`, `details[name] > summary`, `details[name] > summary::-webkit-details-marker`, `details[name] > :not(summary)`, `details[name] > :last-child`


#### Basic Accordion

A simple accordion using native details/summary elements with exclusive behavior via the name attribute.

```html
<div role="region" aria-label="FAQ">
  <details name="accordion-group">
    <summary>Section Title</summary>
    <p>Section content...</p>
  </details>
  <details name="accordion-group">
    <summary>Another Section</summary>
    <p>More content...</p>
  </details>
</div>
```

#### Accordion with Default Open

An accordion where one panel starts expanded using the open attribute.

```html
<nav aria-label="Categories">
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
</nav>
```

#### Nested Accordion

Accordions can be nested to create hierarchical content structures.

```html
<section aria-labelledby="section-title">
  <h3 id="section-title">Section Title</h3>
  <details name="parent-accordion">
    <summary>Parent Item</summary>
    <details>
      <summary>Child Item</summary>
      <p>Nested content...</p>
    </details>
  </details>
</section>
```

---

### Alert

A live region that displays important, time-sensitive information to the user.





---

### Breadcrumb

A navigation aid that shows the user's current location within a site hierarchy.





---

### Button

An interactive element that triggers an action when activated by the user.





---

### Carousel

A rotating set of content items that can be navigated through sequentially.





---

### Checkbox

A form control that allows users to select one or more options from a set.





---

### Combobox

A composite widget combining a text input with a popup listbox for selecting values.





---

### Dialog

A modal or non-modal window that appears above the page content requiring user interaction.





---

### Disclosure

A button that controls the visibility of a section of content.





---

### Feed

A scrollable list of articles where new content may be added as the user scrolls.





---

### Grid

An interactive two-dimensional data structure with rows and columns of cells.





---

### Header

A container for introductory content or navigational aids at the top of a page or section.





---

### Landmarks

Semantic regions that help assistive technology users navigate and understand page structure.





---

### Link

An interactive reference to a resource that navigates the user when activated.





---

### Listbox

A widget that allows users to select one or more items from a list of choices.





---

### Menu

A widget that offers a list of actions or options that the user can invoke. Supports horizontal and vertical layouts, nested submenus, sticky positioning, and dividers—all with pure CSS and semantic HTML.

**Selectors:** `nav[role="navigation"]`, `nav[role="navigation"] ul`, `nav[role="navigation"] li`, `nav[role="navigation"] a, nav[role="navigation"] button`, `nav[role="navigation"] a[href^="#"]::before`


#### Horizontal Menu

A horizontal navigation menu with dropdown submenus. Uses aria-orientation='horizontal' (or omit for default horizontal behavior).

```html
<nav role="navigation" aria-label="Main menu" aria-orientation="horizontal">
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
</nav>
```

#### Vertical Menu

A vertical sidebar-style menu with flyout submenus. Set aria-orientation='vertical' for vertical layout.

```html
<nav role="navigation" aria-label="Sidebar" aria-orientation="vertical">
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
</nav>
```

#### Sticky Menu

A menu that sticks to the top of the viewport while scrolling. Use data-sticky for top, or data-sticky='bottom' for bottom.

```html
<!-- Sticky top -->
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
</nav>
```

#### Deeply Nested Menu

Menus can be nested multiple levels deep with flyout submenus.

```html
<nav role="navigation" aria-label="Menu">
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
</nav>
```

---

### Meter

A graphical display of a numeric value within a known range.





---

### Radio

A group of mutually exclusive options where only one can be selected at a time.





---

### Slider

An input control that allows users to select a value from a range by dragging a thumb.





---

### Spinbutton

A numeric input field with increment and decrement buttons for adjusting values.





---

### Switch

A toggle control that represents an on/off or enabled/disabled state.





---

### Table

A structured grid of data organized in rows and columns for displaying information.





---

### Tabs

A set of layered content panels where only one panel is displayed at a time. Uses CSS-only functionality with radio inputs for state management.

**Selectors:** `[role="tablist"]`, `[role="tablist"][aria-orientation="vertical"]`, `[role="tablist"] input[type="radio"]`, `[role="tablist"] label`, `[role="tablist"][aria-orientation="vertical"] label`


#### Horizontal Tabs

Standard horizontal tabs with radio inputs for CSS-only state management.

```html
<ul role="tablist" aria-label="Settings tabs">
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
</div>
```

#### Vertical Tabs

Vertical tab orientation for sidebar-style navigation. Use aria-orientation='vertical'.

```html
<div style="display: flex;">
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
</div>
```

#### Tabs with Disabled State

Tabs can be disabled using the disabled attribute on the radio input.

```html
<input type="radio" name="tabs" id="tab2" disabled />
<label for="tab2">Disabled Tab</label>
```

---

### Toolbar

A container for grouping related controls such as buttons and menu items.





---

### Tooltip

A contextual popup that displays descriptive information about an element on hover or focus.





---

### Treegrid

A grid widget that combines the features of a tree and a data grid.





---

### Treeview

A hierarchical list that can have nested groups of items that can be expanded or collapsed.





---

### Window Splitter

A movable divider that separates two sections and allows resizing them.





---

## Quick Reference

### Selector Patterns

| Pattern | Purpose |
|---------|---------|
| `nav[role="navigation"]` | Navigation menu |
| `nav[aria-orientation="vertical"]` | Vertical navigation |
| `nav[data-sticky]` | Sticky navigation |
| `details[name]` | Accordion (grouped) |
| `[role="tablist"]` | Tab container |
| `[role="tabpanel"]` | Tab panel |
| `[role="group"]` | Tab panels container |
| `li[role="separator"]` | Menu divider |
| `a[aria-current="page"]` | Current page indicator |

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

```html
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
```
