const path = require('path');

var resolve = function (dir) {
    console.log(path.join(__dirname, dir))
    return path.join(__dirname, dir)
}


resolve("abc")

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@m': resolve('src/manage'),
                '@u': resolve('src/user'),
            }
        },
    },
    lintOnSave: false,
    pages: {
        manage: {
          // page 的入口
          entry: 'src/manage/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'manage.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'manage Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'manage']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        user: 'src/user/main.js'
    }

}