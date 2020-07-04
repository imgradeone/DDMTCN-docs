module.exports = {
    title: 'DDLC 中文 Mod 分部',
    description: 'Just playing around',
    themeConfig: {
        // 添加导航栏
        nav: [
          { text: '主页', link: '/' },
          { text: '玩家指引', link: '/player' },
          { text: '开发者', link: '/moddev' },
          { text: 'Mod 下载', link: '/mods' },
          {
            text: 'GitHub',
            items: [
              { text: 'Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplete-Chinese' },
              { text: '文档', link: '' }
            ]
          }
        ],
        // 为以下路由添加侧边栏
        sidebar: ['/player', '/moddev', '/mods']
      }
  }