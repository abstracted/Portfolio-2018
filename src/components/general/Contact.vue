<template>
  <div class="home-contact section">
    <div class="section-title body"
         data-trans>contact</div>
    <div class="li"
         v-for="(item, property) in contact"
         :key="property"
         data-trans>
      <div class="bullet">
        <component class="icon"
                   :is="property"></component>
      </div>
      <div class="body light item contact-item">
        <div v-if="tooltip"
             class="tooltip">{{ property }}</div>
        <a :href="item.link"
           class="hvr-shrink">{{ item.data }}
          <div class="line"></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import phone from '@/components/general/icons/Phone'
import codepen from '@/components/general/icons/Codepen'
import gitlab from '@/components/general/icons/Gitlab'
import email from '@/components/general/icons/Email'
import linkedin from '@/components/general/icons/Linkedin'
import twitter from '@/components/general/icons/Twitter'

export default {
  props: {
    tooltip: {
      type: Boolean,
      default: true
    }
  },
  components: {
    phone,
    codepen,
    gitlab,
    email,
    linkedin,
    twitter
  },
  computed: {
    contact () {
      return this.$store.state.contact
    }
  }
}
</script>
<style lang="stylus" scoped>
.contact-item
  line-height 50px
  font-size 20px

  @media only screen and (max-width: 1100px)
    font-size 18px
    line-height 48px

.icon
  width 20px
  height 20px
</style>
