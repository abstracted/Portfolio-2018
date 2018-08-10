<template>
  <div class="about-bio">
    <div class="summary section">
      <div class="section-title">bio</div>
      <div class="body light bio">
        My skills include front and back end web developement, Linux system administration, graphic design, art direction and branding. I’m interested in the Javascript stack, aesthetic conceptualization, interactive media and storytelling.
      </div>
      <div class="body light bio">
        Technical skills I use on a regular basis include:
      </div>
      <div class="body light">
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">Javascript (Vanilla)</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">Linux (Bash)</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">VueJS</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">HTML & CSS</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">LAMP Stack</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">Adobe Creative Suite</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">3D</div>
        </div>
        <div class="li">
          <div class="bullet">
            <div></div>
          </div>
          <div class="item">Ableton Live</div>
        </div>
      </div>
    </div>
    <contact />
  </div>
</template>
<script>
import contact from '@/components/general/Contact'
export default {
  components: {
    contact
  }
}
</script>
<style lang="stylus" scoped>
.about-bio
  width 50%
  float right

  > .section
    padding-right 4vw

  > .section > .body
    font-size 21px
    line-height 30px
    margin-bottom 30px
    letter-spacing 0.8px

.bullet > div
  background-color #dfd1cf
  border-radius 100%
  height 10px
  width 10px

.item
  line-height 50px
</style>
