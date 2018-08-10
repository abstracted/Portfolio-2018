<template>
  <div class="project-title heading bold">{{ title }}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Project Name'
    }
  }
}
</script>
<style lang="stylus" scoped>
.project-title
  font-size 48px
  margin-top -120px
  margin-left -6px
  text-transform capitalize
  z-index 200
  position relative
</style>
