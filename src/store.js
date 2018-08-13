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
        description: 'Pixagen is a digital image exploration utility & creative inspiration catalyst. With Pixagen, I wanted to automate the process of discovering ideas I wouldn\'t have normally thought of.',
        year: '2018',
        role: 'Developer, Designer',
        links: { 'live site': 'https://pixagen.app', 'gitlab': 'https://gitlab.com/abstracted1/Pixagen', tutorial: 'https://youtu.be/Uzk18DmrfwM' },
        technologies: ['es6', 'vuejs', 'vuetifyjs', 'vuex', 'vue router', 'material design', 'axios'],
        screenshots: { folder: 'pixagen', amount: 14 }
      },
      {
        name: 'google images api',
        description: 'Google images metadata scraper is a nodejs and puppeteer powered google images custom api. When I created it, I wanted the ability to obtain the related images links that google generates along with the images. This API\'s primarily purpose was the image gatherer in my Pixagen project.',
        year: '2018',
        role: 'Developer',
        links: { gitlab: 'https://gitlab.com/abstracted1/gimgmetadata' },
        technologies: ['es6', 'nodejs', 'puppeteer', 'bash', 'axios'],
        screenshots: false
      },
      {
        name: 'spintax editor',
        description: 'This was created for an SEO web agency in Dallas to improve the quality articles written by copy writers. Spintax editor is a tool for copy writers to edit spintax with syntax highlighting and error checking.',
        year: '2017',
        role: 'Developer',
        links: { 'live site': 'http://portfolio.limitunknown.com/projects/spintax' },
        technologies: ['javascript', 'oop', 'regex', 'html', 'css'],
        screenshots: false
      },
      {
        name: 'seo keyword checker',
        description: 'Seo keyword checker was created to be a lightweight replacement for the Yoast SEO Wordpress plugin. The demo listed below is a stripped down version that can be integrated into any platform.',
        year: '2016',
        role: 'Developer',
        links: { codepen: 'https://codepen.io/abstracted/pen/demQWP' },
        technologies: ['javascript', 'jquery', 'regex', 'html', 'css'],
        screenshots: false
      },
      {
        name: 'red river logistics',
        description: 'While working with Red River Logistics, I created a variety of marketing materials including their corporate branding and website.',
        year: '2015',
        role: 'Developer, Designer, Branding, Video Editor',
        links: { 'live site': 'https://redriverlogistics.com', 'presentation': 'http://portfolio.limitunknown.com/projects/rrl_presentation.pptx', 'promo video': 'https://youtu.be/gRlDYBkWP1c', 'hero video': 'https://youtu.be/OzWJmbf_6gE' },
        technologies: ['photoshop', 'illustrator', 'php', 'javascript', 'html', 'css', 'wordpress'],
        screenshots: { folder: 'rrl', amount: 7 }
      },
      {
        name: 'hancock criminal defense',
        description: 'This was a small project I took on to help a local attorney with their website design. The result was a custom wordpress theme with custom post types to suit their needs.',
        year: '2015',
        role: 'Developer, Designer',
        links: { 'live site': 'http://portfolio.limitunknown.com/projects/criminaldefense' },
        technologies: ['photoshop', 'illustrator', 'php', 'html', 'css', 'wordpress'],
        screenshots: { folder: 'criminaldefense', amount: 4 }
      },
      {
        name: 'lamp stack installer',
        description: 'Created for a company that needed a way to spin up bare metal lamp stack environments. The result is an automated LAMP stack installer that sets up webmin and letsencrypt.',
        year: '2014',
        role: 'Developer',
        links: { gitlab: 'https://gitlab.com/snippets/1721917' },
        technologies: ['bash', 'webmin'],
        screenshots: false
      },
      {
        name: 'bash scripting guide',
        description: 'Due to my involvement in the Linux Academy community, I was contracted to create a bash scripting guide for one of their courses. The guide itself is a high level overview of bash for people with existing basic programming knowledge.',
        year: '2014',
        role: 'Writer',
        links: { guide: 'http://portfolio.limitunknown.com/projects/bash_guide.pdf' },
        technologies: ['bash', 'indesign'],
        screenshots: false
      },
      {
        name: 'code.org poster',
        description: 'Created for a design contest in my college. This is a poster created for Code.org encouraging children, specifically girls, to get into code.',
        year: '2014',
        role: 'Designer',
        links: { poster: 'http://portfolio.limitunknown.com/projects/code_org.png' },
        technologies: ['photoshop', 'illustrator', 'lightwave 3D'],
        screenshots: { folder: 'codeorg', amount: 6 }
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
