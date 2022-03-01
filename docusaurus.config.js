module.exports = {
  title: 'KUBuS',
  tagline: 'Kuiz Untuk Budak Sekolah',
  url: 'https://kubus.fajarhac.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'fakhrullah', // Usually your GitHub org/user name.
  projectName: 'kubus_web', // Usually your repo name.
  plugins: [
    // Google analytic
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'UA-42750664-3',
        anonymizeIP: true, // Should IPs be anonymized?
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'KUBuS',
      logo: {
        alt: 'KUBuS',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/fakhrullah/kubus_web',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/fajarhac',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fakhrullah/kubus_web',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @fajarhac. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

};
