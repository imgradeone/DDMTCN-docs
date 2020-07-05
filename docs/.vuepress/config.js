module.exports = {
    title: 'DDLC 中文 Mod 分部',
    description: '好模板，好 Mod',
    plugins: {
      "vuepress-plugin-auto-sidebar": {}
    },

    themeConfig: {

        nav: [
          { text: '主页', link: '/' },
          { text: '玩家指引', link: '/player/' },
          { text: '开发者', link: '/moddev/' },
          { text: '下载',
            items: [
              { text: '中文 Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplete-Chinese' },
              { text: 'DDLC Mod', link: '' }
            ]
          },
          {
            text: 'GitHub',
            items: [
              { text: 'Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplete-Chinese' },
              { text: '文档', link: '' }
            ]
          }
        ],
      }
    
  }