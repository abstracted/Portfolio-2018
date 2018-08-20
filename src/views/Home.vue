<template>
  <div class="home">
    <home-titles />
    <home-projects />
    <contact />
  </div>
</template>

<script>
import { transimate } from '@/transimate.js'
import HomeTitles from '@/components/home/HomeTitles.vue'
import HomeProjects from '@/components/home/HomeProjects.vue'
import Contact from '@/components/general/Contact.vue'
export default {
  name: 'home',
  components: {
    HomeTitles,
    HomeProjects,
    Contact
  },
  data () {
    return {
      trans: null
    }
  },
  mounted () {
    window.scroll(0, 0)
    setTimeout(() => {
      this.trans = transimate.enter()
    }, 400)
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
