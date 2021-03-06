import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: {
      // phone: { data: '(682) 206 2426', link: 'tel:1-682-206-2426' },
      email: { data: 'camerons@limitunknown.com', link: 'mailto:csanders@protonmail.com' },
      gitlab: { data: 'abstracted1', link: 'https://gitlab.com/users/abstracted1/projects' },
      linkedin: { data: 'camerons99', link: 'https://www.linkedin.com/in/camerons99/' },
      codepen: { data: 'abstracted', link: 'https://codepen.io/abstracted' }
    },
    projects: [
      {
        name: 'pixagen',
        description: 'Pixagen is a digital image exploration utility & creative inspiration catalyst. With Pixagen, I wanted to automate the process of discovering interesting images I would not have discovered under normal circumstances.',
        year: '2018',
        role: 'Developer, Designer',
        links: { 'live site': 'https://pixagen.app', 'gitlab': 'https://gitlab.com/abstracted1/Pixagen', tutorial: 'https://youtu.be/Uzk18DmrfwM' },
        technologies: ['es6', 'vuejs', 'vuetifyjs', 'vuex', 'vue router', 'material design', 'axios'],
        screenshots: { folder: 'pixagen', amount: 14 }
      },
      {
        name: 'google images api',
        description: 'Google Images Metadata Scraper is a nodejs and puppeteer powered google images custom api. When I created it, I wanted the ability to obtain the related images links that google generates along with the images. This API\'s primarily purpose was the image gatherer in my Pixagen project.',
        year: '2018',
        role: 'Developer',
        links: { gitlab: 'https://gitlab.com/abstracted1/gimgmetadata' },
        technologies: ['es6', 'nodejs', 'puppeteer', 'bash', 'axios'],
        screenshots: false
      },
      {
        name: 'spintax editor',
        description: 'Spintax Editor is a tool created for the copy writers at Simplicity Studios. The editor can be used to edit and create article generators with syntax highlighting, live preview and error checking.',
        year: '2017',
        role: 'Developer',
        links: { 'live site': 'http://portfolio.limitunknown.com/projects/spintax' },
        technologies: ['javascript', 'oop', 'regex', 'html', 'css'],
        screenshots: false
      },
      {
        name: 'red river logistics',
        description: 'While working with Red River Logistics, I created a variety of marketing materials including their corporate branding and website.',
        year: '2015',
        role: 'Developer, Designer, Branding, Video Editor',
        links: { 'live site': 'https://redriverlogistics.com', 'presentation': 'http://portfolio.limitunknown.com/projects/rrl_presentation.pptx', 'promo video': 'https://youtu.be/gRlDYBkWP1c', 'hero video': 'https://youtu.be/OzWJmbf_6gE' },
        technologies: ['photoshop', 'illustrator', 'php', 'javascript', 'html', 'css'],
        screenshots: { folder: 'rrl', amount: 7 }
      },
      {
        name: 'bash scripting guide',
        description: 'Due to my involvement with the Linux Academy community, I was contracted to create a bash scripting guide for one of their courses. The guide itself is a high level overview of bash for people with existing basic programming knowledge.',
        year: '2015',
        role: 'Writer',
        links: { guide: 'http://portfolio.limitunknown.com/projects/bash_guide.pdf' },
        technologies: ['bash', 'indesign'],
        screenshots: false
      },
      {
        name: 'code.org poster',
        description: 'Created for a design contest at TSTC. This is a poster created for Code.org encouraging children, specifically girls, to get into code.',
        year: '2014',
        role: 'Designer',
        links: { poster: 'http://portfolio.limitunknown.com/projects/code_org.png' },
        technologies: ['photoshop', 'illustrator', 'lightwave 3D'],
        screenshots: { folder: 'codeorg', amount: 6 }
      }
    ],
    transimate: {
      done: false
    }
  },
  mutations: {
    transimateStatus (state, payload) {
      state.transimate.done = payload
    }
  },
  actions: {
    transimateStatus ({state, commit}, payload) {
      commit('transimateStatus', payload)
    }
  }
})
