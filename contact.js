import gsap from 'gsap'
import { sel, selAll } from './utils'

export default function Contact() {
  const partnersList$ = sel('.contact-info__list')
  const partnersItems$ = [...selAll('.contact-info__item')]
  partnersItems$.forEach((item, i) => {
    item.style.transition = 'unset'
  })

  gsap.from(partnersItems$, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out',
    // delay: 0.5,
    //   stagger: 0.2,
    stagger: {
      each: 0.15,
    },
    scrollTrigger: {
      trigger: partnersList$,
      start: 'top 75%',
    },
  })
}
