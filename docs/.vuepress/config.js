const path = require('path')
module.exports = {
    dest: 'vuepress',
    title: '幻影文档开放平台 | HYDOC',
    description: '幻影文档开放平台',
    palette: path.resolve(__dirname, 'palette.styl'),
    themeConfig: {


        // nav: [
        //     { text: '主页', link: '/' },
        //     { text: '博文',
        //         items: [
        //             { text: 'Android', link: './android' },
        //             { text: 'ios', link: './ios' },
        //             { text: 'Web', link: './web' }
        //         ]
        //     },
        //     { text: '关于', link: '/about/' },
        // ],
        nav: [
          { text: '主页', link: '/' },
          { text: '指南', link: '/guide/' },
               { text: '友情链接', link:'/link/'},
        ],
        sidebar: 'auto'
    }

}
