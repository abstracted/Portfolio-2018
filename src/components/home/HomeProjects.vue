<template>
  <div class="home-projects section">
    <div class="section-title body">selected projects</div>
    <div class="li"
         v-for="project in projects"
         :key="project.name">
      <div class="home-project-year body light bullet">
        <div>{{ project.year }}</div>
      </div>
      <router-link class="home-project heading light item hvr-rotate"
                   :to="{ name: 'projects', params: { name: getURLParam(project.name) }}">
        {{ project.name }}
        <div class="line"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getURLParam (name) {
      return name.replace(/\s+/gm, '-')
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
}
</script>
<style lang="stylus" scoped>
.home-project
  font-size 40px
  line-height 70px
  cursor pointer

  @media only screen and (max-width: 1100px)
    font-size 30px
    line-height 60px

.home-project-year
  font-size 12px
  opacity 0.75

  @media only screen and (max-width: 1100px)
    font-size 10px
</style>
