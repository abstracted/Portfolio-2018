<template>
  <div class="header">
    <logo class="logo" />
    <a href=""
       class="heading nav">about</a>
  </div>
</template>
<script>
import Logo from '../atoms/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>
<style lang="stylus" scoped>
.header
  position fixed
  top 0
  margin-top 60px
  width 100vw

.logo
  width 70px
  margin-left 50px
  float left
  fill #dfd1cf

.nav
  float right
  margin-right 50px
  margin-top 15px
  text-decoration none
  font-size 14pt
  letter-spacing 2px
</style>
