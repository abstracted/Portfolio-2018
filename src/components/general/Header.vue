<template>
  <div class="header">
    <router-link :to="{ name: 'home' }">
      <logo class="logo hvr-shrink" />
    </router-link>
    <router-link :to="{name: 'about'}">
      <div class="heading nav light hvr-shrink">about</div>
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

  @media only screen and (max-width: 1100px)
    margin-top 0px
    padding-top 30px
    padding-bottom 30px

.logo
  width 70px
  margin-left 50px
  float left
  fill #dfd1cf
  pointer-events fill

  @media only screen and (max-width: 1100px)
    margin-left 30px
    width 50px

.nav
  float right
  margin-right 60px
  margin-top 15px
  text-decoration none
  font-size 16pt
  letter-spacing 2px
  pointer-events fill

  @media only screen and (max-width: 1100px)
    font-size 12pt
    margin-right 40px
    margin-top 5px
</style>
