module.exports = {
    title: 'DDLC 中文 Mod 分部',
    description: '好模板，好 Mod',
    plugins: {
      "vuepress-plugin-auto-sidebar": {},
    },

    themeConfig: {
        docsRepo: 'imgradeone/DDMTCN-Docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: false,
        editLinkText: '前往 GitHub 编辑此页面',
        lastUpdated: '上次更新于',
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
              { text: '文档', link: 'https://github.com/imgradeone/DDMTCN-Docs' }
            ]
          }
        ],
      }
    
  }