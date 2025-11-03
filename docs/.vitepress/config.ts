import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/better-client.png' }]],
  locales: {
    root: {
        label: 'English',
        lang: 'en'
    },
    zh: {
        label: '简体中文',
        lang: 'zh'
    }
  },
  themeConfig: {
    logo: { src: '/better-client.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pynickle/Better-Client' }
    ]
  }
})
