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
        nav: nav(),

        sidebar: {
            '/leading/': {base:'/leading/', items: sidebarGuide() }
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: '<a href="https://beian.miit.gov.cn/">京ICP备2023032161号-1</a>'
        },
        outline: {
            label: '-'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com' }
        ],
        search: {
            provider: 'local',
            options: {

            }
        },
    }
})

function nav(): DefaultTheme.NavItem[]   {
    return [
        { text: '首页', link: '/' },
        { text: '前端', link: '/leading/css/questions', activeMatch: '/leading/' }
    ]
}


function sidebarGuide(): DefaultTheme.SidebarItem[] { 
    return [
        {
            text: 'html',
            collapsed: false,
            items: []
        },
        {
            text: 'css',
            collapsed: false,
            items: [
                { text: '盒子模型', link: 'css/box-model' },
                { text: '如何解决盒子塌陷问题', link: 'css/box-collapse' },
                { text: '使一个盒子垂直水平居中', link: 'css/box-centered' },
                { text: '在css中使用变量', link: 'css/variable' },
                { text: '文章阅读', link: 'css/articleReading' }
            ]
        },
        {
            text: 'http',
            collapsed: false,
            items: [
                { text: 'http状态码', link: 'http/http-status-code' },
            ]
        },
        {
            text: 'js',
            collapsed: false,
            items: [
                { text: '闭包', link: 'js/closure' },
                { text: 'promise', link: 'js/promise' },
            ]
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
    ]
}