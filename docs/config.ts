import {DefaultTheme, defineAdditionalConfig} from 'vitepress'

export default defineAdditionalConfig({
    title: 'Better Client Wiki',
    description: 'Wiki for Minecraft mod Better Client',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Wiki', link: '/wiki/what-is-better-client' }
        ],

        sidebar: {
            '/wiki/': { base: '/wiki/', items: sidebarWiki() },
        },

        editLink: {
            pattern: 'https://github.com/pynickle/better-client-wiki/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present ENC_Euphony'
        }
    }
})


function sidebarWiki(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'What is Better Client?', link: 'what-is-better-client' },
                { text: 'Supported Versions', link: 'supported-versions'},
                { text: 'Future Development Plans', link: 'future-development-plans' },
            ]
        },
        {
            text: 'Features',
            collapsed: false,
            items: [
                { text: 'Chat', link: 'chat' },
                { text: 'Cheating', link: 'cheating' },
                { text: 'Merchant', link: 'merchant' },
                { text: 'Optimization', link: 'optimization' },
                { text: 'Screen', link: 'screen' },
                { text: 'Tooltip', link: 'tooltip' },
                { text: 'Visuality', link: 'visuality' },
                { text: 'Miscellaneities', link: 'miscellaneities' },
            ]
        },
    ]
}
