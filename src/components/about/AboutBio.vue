<template>
  <div class="about-bio">
    <div class="summary section">
      <div class="section-title body"
           data-trans>bio</div>
      <div class="body light bio"
           data-trans>
        My skills include full stack web developement, graphic design, art direction and branding. I am currently employed as a UI Developer, but I'm always interested in discussing new projects or collaborations.
      </div>
      <div class="body light bio"
           data-trans>
        Some of my capabilities include:
      </div>
      <div class="body light">
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Javascript ES6</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Object Oriented Javascript</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">HTML5 & CSS3</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">NodeJS Programming</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Linux (Certified)</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">Graphic Design</div>
        </div>
        <div class="li"
             data-trans>
          <div class="bullet">
            <div class="bullet-circle"></div>
          </div>
          <div class="item">3D Modeling</div>
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
