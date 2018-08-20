<template>
  <div class="about">
    <about-message />
    <about-bio />
  </div>
</template>
<script>
import { transimate } from '@/transimate.js'
import AboutMessage from '@/components/about/AboutMessage'
import AboutBio from '@/components/about/AboutBio'
export default {
  components: {
    AboutMessage,
    AboutBio
  },
  data () {
    return {
      trans: null
    }
  },
  mounted () {
    window.scroll(0, 0)
    this.trans = transimate.enter()
  },
  beforeRouteLeave (to, from, next) {
    let els = document.querySelectorAll('a')
    for (let el of els) {
      el.style.pointerEvents = 'none'
    }
    if (this.trans !== null) {
      this.trans.pause()
      transimate.leave().finished.then(() => {
        next()
      })
    }
  }
}
</script>
