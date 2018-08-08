<template>
  <div id="app">
    <app-header />
    <div class="overlay"></div>
    <router-view class="content" />
  </div>
</template>
<script>
import Header from './components/molecules/Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>
<style lang="stylus">
body
  background-color #5c5b6f

.overlay
  pointer-events none
  width 100vw
  height 100vh
  position fixed
  top 0
  left 0
  background none
  background linear-gradient(to bottom, #5c5b6f 1%, rgba(82, 81, 100, 0) 15%, rgba(82, 81, 100, 0) 85%, #5c5b6f 99%)
  z-index 100

.header
  z-index 200

.content
  margin-left 180px
  margin-right 180px
  margin-top 180px
  padding-bottom 180px
  position relative
  z-index 0

.section
  margin-bottom 180px

.section-title
  font-family 'Futura PT'
  font-weight 300
  font-size 20px
  color #dfd1cf
  opacity 0.4
  margin-bottom 30px
  text-transform lowercase
  letter-spacing 4px
  font-style italic

.li
  display flex
  align-items center
  flex-wrap wrap

  .bullet
    width 30px
    height 30px
    margin-right 30px
    display flex
    flex-direction column
    justify-content center
    align-content center

  .line
    background-color #dfd1cf
    width 55%
    height 1px
    opacity 0
    margin-top -5px
    transform rotate(10deg)
    transition all 400ms

  :hover .line
    width 95%
    transform rotate(0deg)
    opacity 1
</style>
