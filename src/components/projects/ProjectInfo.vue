<template>
  <div class="project-info section">
    <div class="section-title">info</div>
    <div class="info-sub year body light">
      <span class="info-title bold">Year </span>{{ info.year }}
    </div>
    <div class="info-sub role body light">
      <span class="info-title bold">Role </span>{{ info.role }}
    </div>
    <div class="info-sub role body light">
      <span class="info-title bold">Links</span>
      <div class="li"
           v-for="(link, item) in info.links"
           :key="item">
        <div class="bullet">
          <div class="bullet-circle"></div>
        </div>
        <div class="body light item info-item">
          <a :href="link">{{ item }}</a>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="info-sub role body light">
      <span class="info-title bold">Technologies</span>
      <div class="li"
           v-for="(tech, index) in info.technologies"
           :key="index">
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
  font-size 20px
  letter-spacing 0px
  margin-right 15px
  line-height 30px

  @media only screen and (max-width: 1100px)
    font-size 16px
    letter-spacing 1px
    font-weight 500 !important

.li .item
  line-height 50px

.line
  margin-top -8px

  @media only screen and (max-width: 1100px)
    margin-top -10px
</style>
