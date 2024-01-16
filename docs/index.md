---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "今天也是平常的一天..."
  text: ""
  tagline: Today is also an ordinary day...
  actions:
    - theme: brand
      text: 开始学习
      link: /css/questions
    - theme: alt
      icon: github
      text: Github
      link: https://github.com
  image:
    src: ./1.jpg
    alt: VitePress
features:
  - title: 《梦江南·千万恨》 -- 唐·温庭筠
    details: 山月不知心里事，水风空落眼前花。
  - title: 孔子《论语：学而篇》
    details: 学而不思则罔，思而不学则殆。
  - title: 《点绛唇·闲倚胡床》 -- 宋·苏轼
    details: 闲倚胡床，庾公楼外峰千朵。与谁同坐。明月清风我。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
/* 
    --vp-home-hero-image-background-image: linear-gradient(-45deg, red 50%, #47caff 50%);
 
    --vp-home-hero-image-filter: blur(44px); */
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
