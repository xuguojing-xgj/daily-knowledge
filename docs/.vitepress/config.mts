import { defineConfig, type DefaultTheme } from 'vitepress'
// https://vitepress.dev/reference/site-config
const url = 'https://beian.miit.gov.cn/';
export default defineConfig({
    title: "戏偶",
    description: "A VitePress Site",

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav(),

        sidebar: {
            '/CSS/': { base: '/CSS/', items: sidebarGuide() },
            // '/reference/': { base: '/reference/', items: sidebarReference() }
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: '<a href="https://beian.miit.gov.cn/">京ICP备2023032161号-1</a>'
        },
        search: {
            provider: 'local',
            options: {

            }
        },
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '首页', link: '/' },
        { text: '关于', link: '/markdown-examples' }
    ]
}

/* prettier-ignore */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'CSS',
            collapsed: false,
            items: [
                { text: '常见面试题', link: '/01-index' },
                { text: '文章阅读', link: '/02-index' },
                { text: 'Runtime API Examples', link: '/markdown-examples' }
            ]
        },
    ]
}