<template>
  <div class="home">
    <home-titles />
    <home-projects />
    <contact />
  </div>
</template>

<script>
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
  mounted () {
    window.scroll(0, 0)
  }
}
</script>
