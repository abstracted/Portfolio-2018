<template>
  <div class="project-info section">
    <div class="section-title body"
         data-trans>info</div>
    <div class="info-sub year body light"
         data-trans>
      <span class="info-title">Year </span>{{ info.year }}
    </div>
    <div class="info-sub role body light"
         data-trans>
      <span class="info-title">Role </span>{{ info.role }}
    </div>
    <div class="info-sub role body light">
      <div class="info-title"
           data-trans>Links</div>
      <div class="li"
           v-for="(link, item) in info.links"
           :key="item"
           data-trans>
        <div class="bullet">
          <div class="bullet-circle"></div>
        </div>
        <div class="body light item info-item">
          <a :href="link"
             class="hvr-grow-rotate">{{ item }}
            <div class="line"></div>
          </a>

        </div>
      </div>
    </div>
    <div class="info-sub role body light">
      <div class="info-title"
           data-trans>Technologies</div>
      <div class="li"
           v-for="(tech, index) in info.technologies"
           :key="index"
           data-trans>
        <div class="bullet">
          <div class="bullet-circle"></div>
        </div>
        <div class="item">{{ tech }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.project-info
  text-transform capitalize

.info-sub
  font-size 18px
  margin-bottom 30px
  letter-spacing 2px

  @media only screen and (max-width: 1100px)
    margin-bottom 20px

  @media only screen and (max-width: 1100px)
    font-size 14px
    letter-spacing 1px

.info-title
  font-size 16px
  text-transform uppercase
  letter-spacing 2px
  margin-right 14px
  line-height 30px
  font-weight 800

  @media only screen and (max-width: 1100px)
    font-size 16px
    letter-spacing 1px
    font-weight 500 !important

.li .item
  line-height 50px

.line
  margin-top -10px

  @media only screen and (max-width: 1100px)
    margin-top -10px
</style>
