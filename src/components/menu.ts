import type { DocumentedComponent } from "../types";

export const menu: DocumentedComponent = {
  title: "Menu",
  description:
    "A widget that offers a list of actions or options that the user can invoke. Supports horizontal and vertical layouts, nested submenus, sticky positioning, and dividers—all with pure CSS and semantic HTML.",
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
};
