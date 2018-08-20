<template>
  <div class="about-bio">
    <div class="summary section">
      <div class="section-title body"
           data-trans>bio</div>
      <div class="body light bio"
           data-trans>
        My skills include front and back end web developement, Linux system administration, graphic design, art direction and branding. I’m interested in the Javascript stack, aesthetic conceptualization, interactive media and storytelling.
      </div>
      <div class="body light bio"
           data-trans>
        Technical skills I use on a regular basis include:
      </div>
      <div class="body light">
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Javascript (Vanilla)</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Linux (Bash)</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">VueJS</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">HTML & CSS</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">LAMP Stack</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Adobe Creative Suite</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">3D</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
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

  @media only screen and (max-width: 900px)
    width 100%
    float left

  > .section
    padding-right 4vw

  > .section > .body
    font-size 21px
    line-height 30px
    margin-bottom 30px
    letter-spacing 0.8px

    @media only screen and (max-width: 1100px)
      font-size 17px

.item
  line-height 50px
</style>
