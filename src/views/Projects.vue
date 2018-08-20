<template>
  <div class="projects">
    <project-title :title="project.name" />
    <project-desc :description="project.description" />
    <project-info :info="{ role: project.role, year: project.year, technologies: project.technologies, links: project.links }" />
    <project-screenshots v-if="project.screenshots !== false"
                         :screenshots="project.screenshots" />
  </div>
</template>
<script>
import { transimate } from '@/transimate.js'
import title from '@/components/projects/ProjectTitle'
import desc from '@/components/projects/ProjectDesc'
import info from '@/components/projects/ProjectInfo'
import screenshots from '@/components/projects/ProjectScreenshots'
export default {
  props: ['name'],
  components: {
    'project-title': title,
    'project-desc': desc,
    'project-info': info,
    'project-screenshots': screenshots
  },
  computed: {
    project () {
      let i = 0
      let name = this.$props.name.replace(/-/gm, ' ')
      let projects = this.$store.state.projects
      for (let project in projects) {
        if (projects[project].name === name) {
          break
        }
        i++
      }
      return projects[i]
    }
  },
  data () {
    return {
      trans: null
    }
  },
  mounted () {
    window.scroll(0, 0)
    this.trans = transimate.enter()
  },
  beforeRouteLeave (to, from, next) {
    let els = document.querySelectorAll('a')
    for (let el of els) {
      el.style.pointerEvents = 'none'
    }
    els = document.querySelectorAll('.screenshot-item')
    for (let el of els) {
      el.style.pointerEvents = 'none'
    }
    if (this.trans !== null) {
      this.trans.pause()
      transimate.leave().finished.then(() => {
        next()
      })
    }
  }
}
</script>
