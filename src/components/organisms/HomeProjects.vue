<template>
  <div class="home-projects section">
    <div class="section-title">selected projects</div>
    <div class="li"
         v-for="project in projects"
         :key="project.name">
      <div class="home-project-year body light bullet">
        <div>{{ project.info.year }}</div>
      </div>
      <div class="home-project heading item">
        {{ project.name }}
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  mounted () {
    console.log(this.projects)
  }
}
</script>
<style lang="stylus" scoped>
.home-project
  font-size 40px
  line-height 70px
  cursor pointer

.home-project-year
  font-size 12px
  opacity 0.75
</style>
