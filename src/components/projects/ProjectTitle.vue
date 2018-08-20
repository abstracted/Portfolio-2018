<template>
  <div class="project-title heading bold"
       data-trans>{{ title }}</div>
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

  @media only screen and (max-width: 1100px)
    margin-top -90px
    margin-left -3px
    font-size 38px
</style>
