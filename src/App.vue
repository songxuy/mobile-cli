<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <p>{{processNum | fixNumber}}</p>
    <a-button type="primary">Button></a-button>
    <router-view />
    <Mum></Mum>
  </div>
</template>
<script type="text/ecmascript-6">
import imgLoader from './assets/scripts/imgLoader.js'
import Mum from '@/components/Mum.vue'
export default {
  components: {
    Mum
  },
  data () {
    return {
      processNum: 0
    }
  },
  mounted () {
    imgLoader({
      limit: 5, // 多少张图片同时加载
      Process: num => {
        this.processNum = num
        if (num === 100) {
          setTimeout(() => {
            this.$router.replace('/home')
          }, 100)
        }
      }
    })
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
