module.exports = {
    title: 'defiant',
    tagline: 'Defiant Docs',
    url: 'https://defiant.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/logo.png',
    organizationName: 'Defiant Labs',
    projectName: 'defiant',
    customFields: {
        image: 'img/logo.png',
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    themeConfig: {
        navbar: {
            title: "defiant Docs",
            logo: {
                alt: "defiant logo",
                href: '/',
                src: 'img/logo.png',
            },
            items: [
                {
                    href: '/',
                    label: 'Get Started',
                    position: 'right',
                }
            ],
        },
        footer: {
            logo: {
                alt: "defiant logo",
                href: '/',
                src: 'img/logo.png',
            },
            copyright: `Copyright © ${new Date().getFullYear()} defiant contributors`,
            links: [],
        },
        algolia: {
            appId: 'BH4D9OD16A',
            apiKey: 'a51366ded1891d634408de0e1e4cf1c5',
            indexName: 'defiant',
            algoliaOptions: { 'facetFilters': ["type:content", "version:current"] }
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: './docs',
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.json'),
                    editUrl: 'https://github.com/DefiantLabs/defiant-docs/edit/main/website',
                },
                // theme: {
                //     customCss: require.resolve('./src/css/custom.css'),
                // },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ],
};
