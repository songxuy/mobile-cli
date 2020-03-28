<template>
  <div :class="$style.home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <p class="p1">{{test}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({
      test: 'home/test'
    })
  },
  mounted () {
    /* console.log(this.test.alll.all) */
    this.$store.dispatch('home/getTest')
  }
}
</script>
<style lang="scss" module>
.home {
  position: relative;
  font-size: px2rem(20px);
  :global {
    .p1 {
      font-size: px2rem(20px);
    }
  }
}
</style>
