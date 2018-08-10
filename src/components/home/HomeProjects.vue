<template>
  <div class="home-projects section">
    <div class="section-title">selected projects</div>
    <div class="li"
         v-for="project in projects"
         :key="project.name">
      <div class="home-project-year body light bullet">
        <div>{{ project.year }}</div>
      </div>
      <router-link class="home-project heading light item"
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

.home-project-year
  font-size 12px
  opacity 0.75
</style>
