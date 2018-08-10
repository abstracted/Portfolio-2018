<template>
  <div class="project-desc section body light">{{ description }}</div>
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      default: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis consequatur voluptatum saepe rem alias animi, dolorem repellendus modi praesentium quasi vel unde dolor incidunt cupiditate molestiae quia dolorum! Harum, rem.'
    }
  }
}
</script>
<style lang="stylus" scoped>
.project-desc
  margin-top 60px
  font-size 30px
  line-height 34px
  max-width 640px

  @media only screen and (max-width: 1100px)
    font-size 20px
    width 100%
    max-width 600px
</style>
