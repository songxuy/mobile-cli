## 简介
> 直接引入相应的包含变量、方法、mixin等的sass文件时，使用时会找不到相应的方法。所以需要使用相应的loader来解析引入

## 实现
> 安装依赖
```
npm install sass-resources-loader --save
```

> 在vue.config.js中配置引入
```JavaScript
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/common.scss";`
      }
    }
  }
}
```