import anime from 'animejs'
// eslint-disable-next-line
let ydiff = window.innerWidth / 6
export const transimate = {
  enter () {
    return anime({
      targets: '[data-trans]',
      opacity: [0.0, 1],
      rotate: [6, 0],
      translateY: [ydiff, 0],
      translateZ: [0, 0],
      translateX: [ydiff / 4, 0],
      easing: 'easeOutQuart',
      duration (el, i, l) {
        return 900
      },
      delay (el, i, l) {
        return i * 100
      },
      run (anim) {
        if (anim.progress >= 50) {
          let els = document.querySelectorAll('a')
          for (let el of els) {
            el.style.pointerEvents = 'initial'
          }
        }
      }
    })
  },
  leave () {
    return anime({
      targets: '[data-trans]',
      opacity: [1, 0.0],
      rotate: [0, -6],
      translateY: [0, ydiff * -1],
      translateZ: [0, 0],
      translateX: [0, ydiff * -1 / 4],
      easing: 'easeInQuart',
      duration (el, i, l) {
        return 600
      },
      delay (el, i, l) {
        return i * 50
      }
    })
  }
}
