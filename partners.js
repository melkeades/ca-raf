import gsap from 'gsap'
import { sel, selAll } from './utils'
import { ScrollTrigger } from 'gsap/all'

export default function Partners() {
  const partnersList$ = sel('.all-partners__list')
  const partnersItems$ = [...selAll('.partners__item')]
  partnersItems$.forEach((item, i) => {
    item.style.transition = 'unset'
  })

  gsap.from(partnersItems$, {
    x: -30,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out',
    // delay: 0.5,
    //   stagger: 0.2,
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: partnersList$,
      start: 'top 75%',
    },
  })
}
