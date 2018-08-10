<template>
  <div id="app">
    <app-header />
    <div class="overlay overlay-modal nodisplay"></div>
    <div class="overlay overlay-edges"></div>
    <router-view class="content" />
  </div>
</template>
<script>
import Header from '@/components/general/Header.vue'
export default {
  components: {
    'app-header': Header
  },
  methods: {
    onClick ($event) {
      this.screenshotModal(event)
    },
    screenshotModal (event) {
      if (event.target.getAttribute('class') !== null) {
        if (!event.target.getAttribute('class').includes('modal-image')) {
          if (!event.target.getAttribute('class').includes('screenshot-item')) {
            let el = document.querySelector('.screenshot-modal')
            let overlay = document.querySelector('.overlay-modal')
            if (el !== null) {
              if (!el.classList.value.includes('nodisplay')) {
                el.classList.add('zoomOut')
                overlay.style.opacity = 0
                setTimeout(() => {
                  el.classList.add('nodisplay')
                  el.classList.remove('zoomOut')
                  setTimeout(() => {
                    overlay.classList.add('nodisplay')
                  }, 50)
                }, 500)
              }
            }
          }
        }
      }
    }
  },
  mounted: function () {
    this.$el.addEventListener('click', this.onClick)
  },
  beforeDestroy: function () {
    this.$el.removeEventListener('click', this.onClick)
  }
}
</script>
<style lang="stylus">
body
  background-color #5c5b6f

.overlay
  top 0
  left 0
  z-index 100
  width 100vw
  height 100vh
  position fixed
  background none
  pointer-events none

.overlay-edges
  background linear-gradient(to bottom, #5c5b6f 1%, rgba(82, 81, 100, 0) 15%, rgba(82, 81, 100, 0) 85%, #5c5b6f 99%)

.overlay-modal
  background #5c5b6f
  opacity 0
  transition all 600ms
  z-index 300 !important
  pointer-events auto

.header
  z-index 200

.content
  margin-left 180px
  margin-right 180px
  margin-top 180px
  padding-bottom 180px
  position relative

  > *
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
  position relative
  display flex
  align-items center
  flex-wrap wrap

  .bullet
    width 30px
    height 30px
    margin-right 30px
    display flex
    justify-content center
    align-items center

  .line
    background-color #dfd1cf
    width 50%
    height 1px
    opacity 0
    margin-top -5px
    margin-bottom 5px
    transform rotate(10deg)
    transition all 500ms

  .tooltip
    opacity 0
    position absolute
    top -5px
    left 0px
    padding 10px
    background-color rgba(92, 91, 111, 0.8)
    border 1px solid #dfd1cf
    border-radius 8px
    font-size 15px
    line-height 8px
    letter-spacing -5px
    transition all 500ms
    transform rotate(-10deg)
    pointer-events none

  :hover .line
    width 95%
    transform rotate(0deg)
    opacity 1

  :hover .tooltip
    top -30px
    left -30px
    letter-spacing 1px
    transform rotate(0deg)
    opacity 0.8

.nodisplay
  display none !important

.gradient-text
  -webkit-text-stroke 1px #dfd1cf
  background -webkit-linear-gradient(40deg, rgba(198, 156, 155, 0.6), rgba(112, 113, 134, 0.6), rgba(223, 209, 207, 0.6))
  background-size 200% auto
  -webkit-background-clip text
  -webkit-text-fill-color transparent
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.animated-gradient
  animation animatedGradient 1.5s linear 100ms infinite reverse

@keyframes animatedGradient
  0%
    background-position 200% auto

  50%
    background-position 200% center

  100%
    background-position 200% auto
</style>
