<template>
  <div class="header">
    <router-link :to="{ name: 'home' }">
      <logo class="logo" />
    </router-link>
    <router-link class="heading nav"
                 :to="{name: 'about'}">
      about
    </router-link>
  </div>
</template>
<script>
import Logo from '@/components/general/Logo.vue'
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
  pointer-events none

.logo
  width 70px
  margin-left 50px
  float left
  fill #dfd1cf
  pointer-events fill

.nav
  float right
  margin-right 60px
  margin-top 15px
  text-decoration none
  font-size 14pt
  letter-spacing 2px
  pointer-events fill
</style>
