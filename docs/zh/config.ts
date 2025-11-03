import {DefaultTheme, defineAdditionalConfig} from 'vitepress'

export default defineAdditionalConfig({
    title: '更好的客户端百科',
    description: 'Minecraft 模组更好的客户端百科',

    themeConfig: {
        nav: [
            { text: '主页', link: '/zh/' },
            { text: '百科', link: '/zh/wiki/what-is-better-client' },
        ],

        sidebar: {
            '/zh/wiki/': { base: '/zh/wiki/', items: sidebarWiki() },
        },

        editLink: {
            pattern: 'https://github.com/pynickle/better-client-wiki/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '基于 MIT 许可发布',
            copyright: '版权所有 © 2025-至今 ENC_Euphony'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})

function sidebarWiki(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '简介',
            collapsed: false,
            items: [
                { text: '什么是 Better Client？', link: 'what-is-better-client' },
                { text: '支持版本', link: 'supported-versions'},
                { text: '未来开发计划', link: 'future-development-plans' },
            ]
        },
        {
            text: '特性',
            collapsed: false,
            items: [
                { text: '聊天', link: 'chat' },
                { text: '作弊', link: 'cheating' },
                { text: '商人', link: 'merchant' },
                { text: '优化', link: 'optimization' },
                { text: '屏幕', link: 'screen' },
                { text: '提示', link: 'tooltip' },
                { text: '视觉', link: 'visuality' },
                { text: '杂项', link: 'miscellaneities' },
            ]
        },
    ]
}
