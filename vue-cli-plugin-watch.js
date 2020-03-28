module.exports = (api, projectOptions) => {
    api.registerCommand('watch', {
        description: 'watch plugin for vue cli 3',
        usage: 'vue-cli-service watch',
        options: {
  
      }
    }, (args) => {
      let config = api.resolveChainableWebpackConfig()
      console.log(config)
      /* console.log(projectOptions) */
      console.log('watch 命令注册成功')
    })
}
