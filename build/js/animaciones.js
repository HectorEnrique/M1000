const titulo = document.querySelector('.header__titulo')
const tituloSpan = document.querySelectorAll('.header__span')
const cardHeader = document.querySelector('.header__caja')
const isla = document.querySelector('.header__isla')
let spans = [...tituloSpan]

let tl = gsap.timeline({ defaults: { ease: 'expo.inOut', duration: 2.0 } })

tl.to(titulo, {
  opacity: 1,
  'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  y: 0
})
  .to(
    cardHeader,
    {
      opacity: 1,
      y: 0
    },
    '-=1.8'
  )
  .to(
    spans,
    {
      opacity: 1,
      'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      y: 0
    },
    '-=1.5'
  )
  .to(
    isla,
    {
      opacity: 1,
      bottom: '0'
    },
    '-=1.8'
  )
