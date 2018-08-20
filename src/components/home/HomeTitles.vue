<template>
  <div class="home-titles section">
    <div class="home-title heading">
      <span data-trans>limitless creation</span>
      <span data-trans>digital concentration.</span>
    </div>
    <div class="home-subtitle body light"
         data-trans>
      Hi, I'm Cameron; A versatile guy in Dallas with a knack for web techologies and visual design.
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.home-title
  font-size 60px
  font-style italic
  margin-bottom 60px

  @media only screen and (max-width: 1100px)
    font-size 40px

  span
    display flex
    flex-direction columns

.home-subtitle
  font-size 24px
  max-width 460px
  line-height 35px

  @media only screen and (max-width: 1100px)
    font-size 20px
    line-height 31px
    max-width 340px
</style>
