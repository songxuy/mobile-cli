import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.scss'
/* import { Button } from 'ant-design-vue' */
/* import 'ant-design-vue/dist/antd.css' */
/* import Antd from 'ant-design-vue' */

Vue.filter('fixNumber', function (value) {
  return value.toFixed(2)
})
/* Vue.use(Antd) */
/* Vue.use(Button) */
Vue.config.productionTip = false
const errorHandler = (error, vm) => {
  // 调用相应的接口上传报错
  // console.error('抛出全局异常')
  // console.error(vm)
  // console.error(error)
  alert(error)
}

Vue.config.errorHandler = errorHandler
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
