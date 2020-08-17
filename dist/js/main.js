document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.left',
    translateX: [500, 0],
    left: '200px',
    borderRadius: ['0%', '100%'],
    easing: 'easeInOutQuad',
    opacity: [0, 0.7]
  })

  anime({
    targets: '.contentwrapper h1',
    translateX: [-400, 0],
    easing: 'easeInOutQuad',
    opacity: [0, 1]
  })

  anime({
    targets: 'p',
    translateY: [100, 0],
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    duration: 900,
    delay: (el, i) => {
      return 1000 + 100 * i
    }
  })

  anime({
    targets: '.home',
    translateY: [-400, 0],
    easing: 'easeOutExpo',
    duration: 800
  })

  anime({
    targets: '.projects',
    translateY: [-400, 0],
    easing: 'easeOutExpo',
    duration: 1000
  })

  anime({
    targets: '.logs',
    translateY: [-400, 0],
    easing: 'easeOutExpo',
    duration: 1500
  })

  anime({
    targets: '.logo',
    translateY: [-200, 0],
    easing: 'easeInOutQuad',
    duration: 1200
  })
  
})
