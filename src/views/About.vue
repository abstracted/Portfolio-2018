<template>
  <div class="about">
    <about-message />
    <about-bio />
  </div>
</template>
<script>
import AboutMessage from '@/components/about/AboutMessage'
import AboutBio from '@/components/about/AboutBio'
export default {
  components: {
    AboutMessage,
    AboutBio
  },
  mounted () {
    window.scroll(0, 0)
  }
}
</script>
