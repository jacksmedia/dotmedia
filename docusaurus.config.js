// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jacks Media',
  tagline: 'Enthusiasm, Not Financial Advice',
  url: 'https://j4cks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jacksmedia', // Usually your GitHub org/user name.
  projectName: 'mediadotcom', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jacks Media',
        logo: {
          alt: 'Jacks Media',
          src: 'img/Rock98.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jacksmedia/j4cksdotcom',
            label: 'This Codebase',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Combased Discord - Learn web3!',
                href: 'https://discord.gg/nh46kvc3Fa',
              },
              {
                label: 'Lannuvar DAO in Realm of Karitha',
                href: 'https://lannuvar.super.site',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog of Crypto/web3 Learnings',
                to: '/blog',
              },
              {
                label: 'J4cks\'s Twitter',
                href: 'https://twitter.com/J4cksDX',
              },
              {
                label: 'Jacks Media',
                href: 'https://jacks.media',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Jacks dot Media. $EGLD: erd159mypt4myss3mqrs89ft0hjeacffks2690gq9u3mlh73m9sh0w5s09eqhh`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
