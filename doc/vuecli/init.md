### 初始化
>项目中目录结构的初始化，主要包括了vuex和axios的初始化。主要对都是对其中的一些工具进行初始化的设置

### Vuex
>按照官网的推荐建立的目录结构，使用module将数据细化到相应的功能或者文件，防止单个store文件越来越大。文件中包含了相应的state、getter、action、mutation等
```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
```
```JavaScript
const state = {
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
```

### axios
> axios的初始化主要是对baseURl，以及请求中的一些通用参数的配置。还有拦截器中对请求或者相应作出统一的处理。
```JavaScript
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

var baseUrl = ''
var service = axios.create()

// Add a response interceptor
service.interceptors.request.use((config) => {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  // 上报相应的错误
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if (response.data.status) {
    return response.data.data
  } else {
    // 上报相应的错误
    return Promise.reject(response.data.description)
  }
}, (error) => {
  // 上报相应的错误
  return Promise.reject(error)
})

export default service
```