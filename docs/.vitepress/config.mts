import { defineConfig } from 'vitepress'
import {type DefaultTheme } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "戏偶",
    description: "A VitePress Site",

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: { src: '/favicon.ico', width: 24, height: 24 },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'http',
                collapsed: false,
                items: []
            },
            {
                text: 'css',
                collapsed: false,
                items: [
                    { text: '学习内容', link: '/css/questions' },
                    { text: '文章阅读', link: '/css/articleReading' }
                ]
            },
            {
                text: 'js',
                collapsed: false,
                items: []
            },
            {
                text: 'react',
                collapsed: false,
                items: []
            },
            {
                text: 'vue',
                collapsed: false,
                items: []
            },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: '<a href="https://beian.miit.gov.cn/">京ICP备2023032161号-1</a>'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        search: {
            provider: 'local',
            options: {

            }
        },
    }
})

function nav() :DefaultTheme.SidebarItem[]  {
    return []
}