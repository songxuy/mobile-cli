## 简介
> service插件主要放在项目本地，是一份js代码，然后导出一个函数，通过package.json配置指向这个js文件的路径。运行相应的命令时执行相应的功能。另外还有cli插件，有完整的开发目录它应该始终包含一个 Service 插件作为其主要导出，且可选的包含一个 Generator 和一个 Prompt 文件

## 导出函数
>一个 service 插件应该导出一个函数，这个函数接受两个参数：
* 一个plugin实例
* 一个包含 vue.config.js 内指定的项目本地选项的对象，或者在 package.json 内的 vue 字段

>这个 API 允许 service 插件针对不同的环境扩展/修改内部的 webpack 配置，并向 vue-cli-service 注入额外的命令。

```JavaScript
module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    // 通过 webpack-chain 修改 webpack 配置
  })

  api.configureWebpack(webpackConfig => {
    // 修改 webpack 配置
    // 或返回通过 webpack-merge 合并的配置对象
  })

  api.registerCommand('test', args => {
    // 注册 `vue-cli-service test`
  })
}
```

### 在插件中解析 webpack 配置
>一个插件可以通过调用 api.resolveWebpackConfig() 取回解析好的 webpack 配置。每次调用都会新生成一个 webpack 配置用来在需要时进一步修改。

```JavaScript
module.exports = api => {
  api.registerCommand('my-build', args => {
    const configA = api.resolveWebpackConfig()
    const configB = api.resolveWebpackConfig()

    // 针对不同的目的修改 `configA` 和 `configB`...
  })
}

// 请确保为正确的环境变量指定默认模式
module.exports.defaultModes = {
  'my-build': 'production'
}
```

### 第三方插件的自定义选项
> vue.config.js 的导出将会通过一个 schema 的验证以避免笔误和错误的配置值。然而，一个第三方插件仍然允许用户通过 pluginOptions 字段配置其行为。例如，对于下面的 vue.config.js：

```JavaScript
module.exports = {
  pluginOptions: {
      fontsmin: {
        originPath: 'static/fonts',
        destPath: 'src/assets/fonts',
        cssWritePath: 'src/assets/styles/reset.scss',
        fontCssRequirePath: './assets/fonts'
      }
  }
}
```