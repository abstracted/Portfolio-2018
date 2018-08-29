<template>
  <div id="app">
    <app-header v-if="loadingDone" />
    <div class="small-viewport">
      <div class="heading">limitunknown.com</div>
      <div class="body light">Welcome to the portfolio of Cameron Sanders.</div>
      <div class="body light">Please view on desktop for a better experience.</div>
      <contact :tooltip="false" />
    </div>
    <div class="overlay overlay-modal nodisplay"></div>
    <div class="overlay overlay-edges"></div>
    <div class="overlay overlay-intro"
         v-if="!loadingDone">
      <logo/>
    </div>
    <router-view class="content"
                 v-if="loadingDone" />
  </div>
</template>
<script>
import anime from 'animejs'
import Header from '@/components/general/Header.vue'
import Contact from '@/components/general/Contact.vue'
import Logo from '@/components/general/Logo.vue'
export default {
  components: {
    'app-header': Header,
    Contact,
    Logo
  },
  data () {
    return {
      // scroll: {
      //   delta: 0
      // },
      loadingDone: false
    }
  },
  methods: {
    onClick ($event) {
      this.screenshotModal($event)
    },
    intro () {
      // Perfectly line up
      // right
      // scale(0.4) translateX(-46px) translateY(0px) rotate(-70deg);
      // left
      // scale(0.4) translateX(25px) translateY(27px) rotate(110deg)
      anime({
        targets: '[data-trans-bl]',
        scaleY: [0.04, 0.4],
        scaleX: [0.4, 0.4],
        translateY: [10, 27],
        translateX: [25, 25],
        rotate: [0, 110],
        opacity: [0, 1],
        duration: 1600,
        delay (el, i, l) {
          if (i === 0) {
            return 800
          } else {
            return 1000
          }
        }
      }).finished.then(() => {
        anime({
          targets: '[data-trans-bl]',
          scale: [0.4, 0.2],
          translateY: [27, 0],
          translateX: [25, 0],
          rotate: [110, 0],
          opacity: [1, 1],
          easing: 'easeOutCubic',
          duration: 800,
          delay: 200
        })
        anime({
          targets: '[data-trans-br]',
          scale: [0.4, 0.2],
          translateY: [0, 0],
          translateX: [-46, 0],
          rotate: [-70, 0],
          opacity: [0, 1],
          easing: 'easeOutCubic',
          duration: 800,
          delay: 280
        })
        anime({
          targets: '[data-trans-tl]',
          scale: [0.08, 0.2],
          translateY: [80, 0],
          opacity: [0.0, 1],
          easing: 'easeOutCubic',
          duration: 800,
          delay: 360
        })
        anime({
          targets: '[data-trans-tr]',
          scale: [0.08, 0.2],
          translateY: [80, 0],
          opacity: [0.0, 1],
          easing: 'easeOutCubic',
          duration: 800,
          delay: 440
        }).finished.then(() => {
          anime({
            targets: '[data-trans-bl]',
            scale: [0.2, 0.4],
            translateY: [0, 90],
            opacity: [1, 0],
            easing: 'easeInQuart',
            duration: 500,
            delay: 200
          })
          anime({
            targets: '[data-trans-br]',
            scale: [0.2, 0.4],
            translateY: [0, 90],
            opacity: [1, 0],
            easing: 'easeInQuart',
            duration: 500,
            delay: 280
          })
          anime({
            targets: '[data-trans-tl]',
            scale: [0.2, 0.4],
            translateY: [0, -90],
            opacity: [1, 0],
            easing: 'easeInQuart',
            duration: 500,
            delay: 360
          })
          anime({
            targets: '[data-trans-tr]',
            scale: [0.2, 0.4],
            translateY: [0, -90],
            opacity: [1, 0],
            easing: 'easeInQuart',
            duration: 500,
            delay: 440
          }).finished.then(() => {
            this.loadingDone = true
          })
        })
      })
    },
    // onScroll ($event) {
    //   this.scroll.delta += event.deltaY * -1
    //   let el = document.querySelector('.content')
    //   let height = el.clientHeight
    //   if (this.scroll.delta < height * -1) {
    //     this.scroll.delta = height * -1
    //   } if (this.scroll.delta > 0) {
    //     this.scroll.delta = 0
    //   }
    //   el.style.transform = 'translateY(' + this.scroll.delta + 'px)'
    // },
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
    // window.addEventListener('wheel', this.onScroll)
    this.intro()
  },
  beforeDestroy: function () {
    this.$el.removeEventListener('click', this.onClick)
    // window.removeEventListener('wheel', this.onScroll)
  }
}
</script>
<style lang="stylus">
.small-viewport
  display none
  padding 60px
  font-size 20px
  line-height 32px

  > .heading
    margin-bottom 30px

  > .body
    margin-bottom 10px

  .section-title
    opacity 0 !important

@media only screen and (max-width: 640px)
  *:not(.home-content)
    display none

  html, body, #app, .small-viewport, .small-viewport *
    display block !important
    opacity 1 !important
    transform translate(0) rotate(0) !important

  .home-contact .li
    display flex !important

    .line
      opacity 0 !important

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

.overlay-intro
  display flex
  justify-content center
  align-items center

  #logo
    width 70vw
    fill #dfd1cf

    path
      opacity 0
      transform scale(0.2)

.overlay-edges
  background linear-gradient(to bottom, #5c5b6f 0%, rgba(82, 81, 100, 0) 5%, rgba(82, 81, 100, 0) 85%, #5c5b6f 99%)

.overlay-modal
  background #5c5b6f
  opacity 0
  transition all 600ms
  z-index 300 !important
  pointer-events auto
  cursor zoom-out

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

  @media only screen and (max-width: 1100px)
    margin-left 120px
    margin-right 120px
    margin-top 120px
    padding-bottom 120px

  @media only screen and (max-width: 640px)
    margin-left 90px
    margin-right 90px
    margin-top 90px
    padding-bottom 90px

  @media only screen and (max-width: 480px)
    margin-left 60px
    margin-right 60px
    margin-top 60px
    padding-bottom 60px

.section
  margin-bottom 140px

  @media only screen and (max-width: 1100px)
    margin-bottom 80px

.section-title
  font-weight 300
  font-size 20px
  color rgba(223, 209, 207, 0.6) !important
  margin-bottom 30px
  text-transform lowercase
  letter-spacing 4px
  font-style italic

  @media only screen and (max-width: 1100px)
    font-size 16px
    margin-bottom 20px

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

    @media only screen and (max-width: 1100px)
      margin-right 20px
      width 20px
      height 20px

    > .bullet-circle
      background-color #dfd1cf
      border-radius 100%
      height 8px
      width 8px

  .line
    background-color #dfd1cf
    perspective 100px
    backface-visibility hidden
    width 40%
    height 1px
    opacity 0
    margin-top -8px
    margin-bottom 8px
    margin-left 2px
    transition all 700ms
    transition-delay 150ms
    transition-timing-function ease-out

  .tooltip
    opacity 0
    position absolute
    top -5px
    left 0px
    padding 10px
    background-color rgba(92, 91, 111, 0.9)
    border 1px solid #dfd1cf
    border-radius 8px
    font-size 15px
    line-height 8px
    letter-spacing -5px
    transition all 500ms
    transform rotate(-10deg)
    pointer-events none
    -webkit-font-smoothing auto
    -moz-osx-font-smoothing auto

  :hover .line
    width 95%
    opacity 1

  :hover .tooltip
    top -30px
    left -30px
    letter-spacing 1px
    transform rotate(0deg)
    opacity 0.9

.nodisplay
  display none !important

.gradient-text
  -webkit-text-stroke 1px #dfd1cf
  background -webkit-linear-gradient(40deg, rgba(198, 156, 155, 0.6), rgba(112, 113, 134, 0.6), rgba(223, 209, 207, 0.6))
  background-size 200% auto
  -webkit-background-clip text !important
  -webkit-text-fill-color transparent
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

  @media only screen and (max-width: 900px)
    -webkit-text-stroke 0.7px #dfd1cf

.animated-gradient
  animation animatedGradient 1.5s linear 100ms infinite reverse

@keyframes animatedGradient
  0%
    background-position 200% auto

  50%
    background-position 200% center

  100%
    background-position 200% auto

[data-trans]
  opacity 0
  transform-origin bottom right !important
  perspective 100px
</style>
