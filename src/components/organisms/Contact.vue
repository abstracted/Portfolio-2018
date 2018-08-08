<template>
  <div class="home-contact section">
    <div class="section-title">contact</div>
    <div class="li"
         v-for="(item, property) in contact"
         :key="property">
      <div class="bullet">
        <div :class="'icon icon-' + property"></div>
      </div>
      <div class="body light item contact-item">
        <a :href="item.link">{{ item.data }}</a>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    contact () {
      return this.$store.state.contact
    }
  },
  mounted () {
    console.log(this.projects)
  }
}
</script>
<style lang="stylus" scoped>
.contact-item
  line-height 50px
  font-size 20px
</style>
