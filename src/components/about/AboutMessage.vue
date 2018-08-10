<template>
  <div class="about-message section heading light">
    <div>Hi, I’m
      <span class="bold italic about-name gradient-text"
            ref="about-name"
            @mouseover="animate('name')"
            @mouseout="animate('stop')">Cameron</span>, a web developer &
    </div>
    <div>digital designer based in Dallas Texas.</div>
    <div>I enjoy working with interesting ideas,</div>
    <div>learning new technologies</div>
    <div>& creating
      <span class="bold italic about-kool gradient-text"
            ref="about-kool"
            @mouseover="animate('kool')"
            @mouseout="animate('stop')">kool</span> stuff.
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    animate (what) {
      if (what === 'name') {
        this.$refs['about-name'].classList.add('animated-gradient')
      } else if (what === 'kool') {
        this.$refs['about-kool'].classList.add('animated-gradient')
      } else {
        this.$refs['about-name'].classList.remove('animated-gradient')
        this.$refs['about-kool'].classList.remove('animated-gradient')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.about-message
  display flex
  flex-direction column
  flex-wrap wrap
  justify-content flex-start
  align-items center
  text-align center
  font-size 4.2vw
  line-height 4.2vw

  @media only screen and (max-width: 900px)
    display block
    text-align left

  > div
    width 100%

    @media only screen and (max-width: 900px)
      width auto
      display inline
      margin-right 5px
      word-break break-word

  @media screen and (min-width: 1700px)
    font-size 425%
    line-height 100%

  @media only screen and (max-width: 900px)
    font-size 200%
    line-height 120%

.about-name, .about-kool
  cursor pointer
</style>
