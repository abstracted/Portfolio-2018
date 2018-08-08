<template>
  <div class="home">
    <home-titles />
    <home-projects />
    <contact />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitles from '@/components/organisms/HomeTitles.vue'
import HomeProjects from '@/components/organisms/HomeProjects.vue'
import Contact from '@/components/organisms/Contact.vue'
export default {
  name: 'home',
  components: {
    HomeTitles,
    HomeProjects,
    Contact
  }
}
</script>
