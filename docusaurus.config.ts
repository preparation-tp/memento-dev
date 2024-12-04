import type {
  CreateSitemapItemsParams,
  CreateSitemapItemsFn,
} from "@docusaurus/plugin-sitemap/lib/types";

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

import { themes as prismThemes } from "prism-react-renderer";

type CreateSitemapParams = CreateSitemapItemsParams & {
  defaultCreateSitemapItems: CreateSitemapItemsFn;
};

const resourcesLinks = [
  {
    label: "Préambule",
    to: "/intro",
  },
  {
    label: "Front-end",
    to: "/category/-frontend",
  },
  {
    label: "Bases de données",
    to: "/category/-bases-de-données",
  },
];

const examsLinks = [
  {
    label: "CDA",
    to: "/titres-professionnels/CDA/intro",
  },
  {
    label: "DWWM",
    to: "/titres-professionnels/DWWM/intro",
  },
  {
    label: "Se préparer",
    to: "/titres-professionnels/se-preparer",
  },
  {
    label: "Retours d'expériences",
    to: "/titres-professionnels/retours",
  },
  {
    label: "Archives",
    to: "/category/%EF%B8%8F-archives",
  },
];

const config: Config = {
  title: "Memento Dev",
  tagline: "Souviens-toi que tu développeras.",
  favicon: "img/favicon.webp",

  // Set the production url of your site here
  url: "https://memento-dev.fr",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "preparation-tp", // Usually your GitHub org/user name.
  projectName: "memento-dev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon.webp",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#7c3aed",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#242526",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/favicon.webp",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/favicon.webp",
            color: "#7c3aed",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/favicon.webp",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#7c3aed",
          },
        ],
      },
    ],
    async function tailwind() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [require.resolve("docusaurus-lunr-search"), { languages: ["fr"] }],
    [
      "@docusaurus/plugin-sitemap",
      {
        lastmod: "date",
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["/tags/**"],
        filename: "sitemap.xml",
        id: "sitemap",
        async createSitemapItems(params: CreateSitemapParams) {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);

          return items.filter((item) => !item.url.includes("/page/"));
        },
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/preparation-tp/memento-dev/tree/main/",

          admonitions: {
            keywords: ["quote", "example"],
            extendDefaults: true,
          },

          routeBasePath: "/",
          tagsBasePath: "tags",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark",
      },
    },
    navbar: {
      style: "dark",
      title: "Memento Dev",
      logo: {
        alt: "Logo Memento Dev",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          position: "left",
          label: "Ressources",
          items: resourcesLinks,
        },
        {
          position: "left",
          label: "Titres professionnels",
          items: examsLinks,
        },
        {
          href: "https://github.com/preparation-tp/memento-dev",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Ressources",
          items: resourcesLinks,
        },
        {
          title: "Titres professionnels",
          items: examsLinks,
        },
        {
          title: "Memento Dev",
          items: [
            {
              label: "Mentions légales",
              to: "/mentions-legales",
            },
            {
              label: "Contribuer",
              to: "/contribuer",
            },
            {
              label: "GitHub",
              href: "https://github.com/preparation-tp/memento-dev",
            },
          ],
        },
      ],
      copyright: `<span className="text-white/70">
        Créé avec ❤️ par
        <a
          className="transition-colors hover:text-white hover:no-underline"
          href="https://gauthierdaniels.fr"
          target="_blank"
        >
          Gauthier Daniels
        </a>
      </span>`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["php", "nginx", "bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
