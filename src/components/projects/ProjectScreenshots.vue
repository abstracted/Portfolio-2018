<template>
  <div class="project-screenshots section body light">
    <div class="section-title body"
         data-trans>screenshots</div>
    <div class="screenshots-container">
      <div v-for="index in screenshots.amount"
           :key="index"
           :style="getStyle(index)"
           class="screenshot-item hvr-bob"
           @click="modal(index)"
           data-trans>
      </div>
    </div>
    <div class="screenshot-modal nodisplay animated zoomIn">
      <div class="modal-content">
        <img class="modal-image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    screenshots: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSrc (index) {
      let root = window.location.origin.replace(/http:/gm, '')
      return root + '/img/screenshots/' + this.screenshots.folder + '/screenshot_' + index + '.jpeg'
    },
    getStyle (index) {
      return { backgroundImage: 'url(' + this.getSrc(index) + ')' }
    },
    aspect (srcWidth, srcHeight) {
      let maxHeight = window.innerHeight
      maxHeight = maxHeight / 1.78
      let maxWidth = window.innerWidth
      maxWidth = maxWidth / 1.78
      let ratio = Math.min(maxHeight / srcWidth, maxWidth / srcHeight)
      return { width: Math.floor(srcWidth * ratio), height: Math.floor(srcHeight * ratio) }
    },
    modal (index) {
      let img = new Image()
      let width = 460
      let height = 600
      let el = document.querySelector('.modal-image')
      img.onload = () => {
        width = img.width
        height = img.height
        if (width > window.innerWidth || height > window.innerHeight) {
          let max = this.aspect(width, height)
          width = max.width
          height = max.height
        }
        el.style.maxWidth = width + 'px'
        el.style.maxHeight = height + 'px'
      }
      img.src = this.getSrc(index)
      document.querySelector('.screenshot-modal').classList.remove('nodisplay')
      el.src = this.getSrc(index)
      let overlay = document.querySelector('.overlay.overlay-modal')
      overlay.classList.remove('nodisplay')
      setTimeout(() => {
        overlay.style.opacity = '0.9'
      }, 50)
    }
  }
}
</script>
<style lang="stylus" scoped>
.screenshot-modal
  position fixed
  width 100vw
  height 100vh
  top 0
  left 0
  z-index 400
  display flex
  justify-content center
  align-items center
  pointer-events none

  > .modal-content
    width 75%
    height 75%
    display flex
    justify-content center
    align-items center
    padding 30px

    > .modal-image
      width 100%
      height auto
      border-radius 10px
      pointer-events auto

.screenshots-container
  display flex
  justify-content space-between
  align-items center
  flex-wrap wrap
  width 50%
  max-width 500px

  > .screenshot-item
    width 48%
    height 25vw
    margin-bottom 2vw
    background-size cover
    background-position 50% 50%
    border-radius 10px
    transition opacity, filter 400ms
    opacity 0.8
    filter grayscale(50%)
    cursor zoom-in

  > .screenshot-item:hover
    opacity 1
    filter grayscale(0%)
</style>
