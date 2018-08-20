<template>
  <div class="header">
    <div data-trans-header
         class="header-item left">
      <router-link :to="{ name: 'home' }">
        <logo class="logo hvr-shrink" />
      </router-link>
    </div>
    <div data-trans-header
         class="header-item right">
      <router-link :to="{name: 'about'}">
        <div class="nav heading light hvr-shrink">about</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import anime from 'animejs'
import Logo from '@/components/general/Logo.vue'
export default {
  components: {
    Logo
  },
  mounted () {
    anime({
      targets: '[data-trans-header]',
      opacity: [0.0, 1],
      translateY: [60, 0],
      rotate: [45, 0],
      scaleX: [0, 1],
      scaleY: [0, 1],
      translateZ: [0, 0],
      easing: 'easeInOutQuart',
      duration (el, i, l) {
        return 1500
      },
      delay (el, i, l) {
        return i * 350
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
[data-trans-header]
  opacity 0
  transform-origin bottom right !important
  perspective 100px

.header
  position fixed
  top 0
  margin-top 60px
  width 100vw
  pointer-events none
  display flex
  justify-content space-between

  @media only screen and (max-width: 1100px)
    margin-top 0px
    padding-top 30px
    padding-bottom 30px

.header-item
  pointer-events fill

.left
  width 70px
  margin-left 50px

  @media only screen and (max-width: 1100px)
    margin-left 30px
    width 50px

.right
  margin-right 60px
  margin-top 15px

  @media only screen and (max-width: 1100px)
    margin-right 40px
    margin-top 5px

.logo
  fill #dfd1cf

.nav
  text-decoration none
  font-size 16pt
  letter-spacing 2px

  @media only screen and (max-width: 1100px)
    font-size 12pt
</style>
