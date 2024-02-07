import gsap from 'gsap'
import { sel, selAll } from './utils'

export default function Solutions() {
  const propList$ = sel('.props-ico__list')
  const propItems$ = [...selAll('.props-ico__item')]
  propItems$.forEach((item, i) => {
    item.style.transition = 'unset'
  })

  gsap.from(propItems$, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out',
    stagger: {
      each: 0.15,
    },
    scrollTrigger: {
      trigger: propList$,
      start: 'top 75%',
    },
  })
}
