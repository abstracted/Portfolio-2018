import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: {
      phone: { data: '(682) 206 2426', link: 'tel:1-682-206-2426' },
      email: { data: 'camerons@limitunknown.com', link: 'mailto:csanders@protonmail.com' },
      gitlab: { data: 'abstracted1', link: 'https://gitlab.com/users/abstracted1/projects' },
      linkedin: { data: 'camerons99', link: 'https://www.linkedin.com/in/camerons99/' },
      codepen: { data: 'abstracted', link: 'https://codepen.io/abstracted' }
    },
    projects: [
      {
        name: 'pixagen',
        description: 'Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet',
        info: {
          year: '2018',
          role: 'Developer, Designer',
          link: 'https://pixagen.app'
        },
        screenshots: ['http://limitunknown.com/blah.jpg'],
        technologies: ['javascript', 'vuejs', 'vuetifyjs', 'material design', 'html', 'css', 'illustrator']
      },
      {
        name: 'spintax editor',
        description: 'Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet',
        info: {
          year: '2017',
          role: 'Developer',
          link: 'https://limitunknown.com/projects/spintax'
        },
        screenshots: ['http://limitunknown.com/blah.jpg'],
        technologies: ['javascript', 'regex', 'html', 'css']
      },
      {
        name: 'red river logistics',
        description: 'Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet',
        info: {
          year: '2016',
          role: 'Developer, Designer, Branding, Video Editor',
          link: 'https://redriverlogistics.com'
        },
        screenshots: ['http://limitunknown.com/blah.jpg'],
        technologies: ['photoshop', 'illustrator', 'php', 'javascript', 'html', 'css', 'wordpress']
      },
      {
        name: 'seo keyword checker',
        description: 'Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet',
        info: {
          year: '2015',
          role: 'Developer',
          link: 'https://codepen.io/abstracted/pen/demQWP'
        },
        screenshots: ['http://limitunknown.com/blah.jpg'],
        technologies: ['javascript', 'jquery', 'regex', 'html', 'css']
      },
      {
        name: 'bash scripting guide',
        description: 'Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet',
        info: {
          year: '2014',
          role: 'Writer'
        },
        screenshots: ['http://limitunknown.com/blah.jpg'],
        technologies: ['bash', 'indesign']
      },
      {
        name: 'code.org poster',
        description: 'Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet',
        info: {
          year: '2014',
          role: 'Designer'
        },
        screenshots: ['http://limitunknown.com/blah.jpg'],
        technologies: ['photoshop', 'illustrator', 'Lightwave 3D']
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
