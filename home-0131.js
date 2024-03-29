import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { Intersection } from '@splidejs/splide-extension-intersection'

import { sel, selAll, addSplideClasses, onDomReady, connectSplideArrows, connectSplideBullets, splideAutoWidth, scrollTriggerInit, mq, vh } from './utils'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default function home() {
  addSplideClasses('hero__slider')
  const heroSlider = new Splide('.hero__slider', {
    arrows: false,
    pagination: false,
    type: 'fade',
    rewind: true,
    // autoplay: 'pause',
    autoplay: true,
    interval: 3000,
    speed: 1500,
  })
  // heroSlider.mount({ Intersection })
  heroSlider.mount()

  addSplideClasses('logos__slider')
  const classPrefix = 'logos'
  addSplideClasses(classPrefix + '__slider')
  const slider = new Splide(sel(`.${classPrefix}__slider`), {
    arrows: false,
    pagination: false,
    gap: '5rem',
    type: 'loop',
    autoWidth: true,
    autoScroll: { speed: 0.6, autoStart: false },
    breakpoints: {
      767: {
        gap: '2rem',
      },
    },
  })
  splideAutoWidth(slider)
  slider.mount({ AutoScroll })

  //   console.log('home.js')
  const cards$ = [...selAll('.props__card')]
  const propsDots$ = sel('.props__line-w')
  const propsPlane$ = sel('.props__plane-w')
  // const cards$ = gsap.utils.toArray('.props__card')
  const propsTl = gsap
    // .timeline({ defaults: { paused: true } })
    .timeline()
    .fromTo(
      cards$,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.2,
      },
      0
    )
    .from(propsDots$, { opacity: 0, duration: 3 }, 0.5)
    .fromTo(propsPlane$, { opacity: 0 }, { opacity: 1, duration: 1 }, 1)
    .to(
      propsPlane$,
      {
        duration: 3,
        ease: 'power1.inOut',
        immediateRender: true,
        motionPath: {
          path: '#planePath',
          align: '#planePath',
          alignOrigin: [0.5, 0.5],
          autoRotate: 90,
          start: 1,
          end: 0.25,
        },
      },
      0
    )

  // MotionPathHelper.create('.astronaut')

  const cardsSt = ScrollTrigger.create({
    animation: propsTl,
    trigger: '.props__cards',
    start: 'top 75%',
    // markers: true,
  })
  // let documentHeight = document.body.clientHeight
  // new ResizeObserver((entries) => {
  //   const newHeight = entries[0].contentRect.height // only one item [0] - body
  //   if (newHeight !== documentHeight) {
  //     console.log('ref')

  //     documentHeight = newHeight
  //     cardsSt.refresh()
  //   }
  // }).observe(document.body)
  //

  // addSplideClasses('blog__slider')

  // const blogSplide = new Splide('.blog__slider', {
  //   arrows: false,
  //   pagination: false,
  //   perPage: 2,
  //   perMove: 2,
  //   // gap: '5rem',
  //   type: 'fade',
  //   direction: 'ttb',
  //   height: 'none',
  //   // autoWidth: true,
  //   // autoScroll: { speed: 0.6, autoStart: false },
  //   // breakpoints: {
  //   //   767: {
  //   //     gap: '2rem',
  //   //   },
  //   // },
  // })
  // blogSplide.mount()
  // connectSplideArrows(blogSplide, 'blog')
  sel('#blog-next-new').onpointerdown = () => {
    sel('#blog-next').click()
  }
  sel('#blog-prev-new').onpointerdown = () => {
    sel('#blog-prev').click()
  }
  const testInfoSlider$ = sel('.testimonials__info-slider')
  addSplideClasses(testInfoSlider$)
  const testSlider = new Splide(testInfoSlider$, {
    arrows: false,
    pagination: false,
    gap: '2rem',
    type: 'loop',
    perPage: 1,
    speed: 1500,
    interval: 5000,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    autoplay: 'pause',
    intersection: {
      inView: {
        autoplay: true,
      },
      outView: {
        autoplay: false,
      },
    },
    breakpoints: {
      747: {
        autoplay: false,
      },
    },
  })
  const testImgSlider$ = sel('.testimonials__img-slider')
  addSplideClasses(testImgSlider$)
  const testImgSlider = new Splide(testImgSlider$, {
    type: 'fade',
    rewind: true, // to make it "loop" with the type fade
    arrows: false,
    pagination: false,
    perPage: 1,
    speed: 1000,
    // autoWidth: true,
  })
  testImgSlider.sync(testSlider)
  testSlider.mount({ Intersection })
  testImgSlider.mount()
  connectSplideArrows(testSlider, 'testimonials')
  connectSplideBullets(testSlider, 'testimonials')

  mq.add('(min-width: 991px)', () => {
    const heroTl = gsap
      .timeline({ defaults: { ease: 'none' } })
      .to('.header__info', { y: -120 }, 0)
      .to('.hero__box-2-st', { y: 80, rotateZ: 5 }, 0)
      .to('.hero__box-1-st', { y: 160, x: 40, rotateZ: 10 }, 0)
    ScrollTrigger.create({
      animation: heroTl,
      trigger: 'body',
      start: 'top top',
      end: vh(100) + ' top',
      // markers: true,
      scrub: true,
    })
  })
  const faqBg$ = sel('.faq-blog__img-w')
  // faqBg$.style.height = '200vh'
  gsap.set(faqBg$, { height: '300vh', y: '-100vh' })
  ScrollTrigger.create({
    animation: gsap.to(faqBg$, { y: '50vh', ease: 'none' }),
    trigger: '.faq-blog__bg',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  })

  mq.add('(min-width: 479px)', () => {
    // TABS
    // fix tabs changing width due to the text weight change
    selAll('.features__tab').forEach((tab) => {
      const width = tab.getBoundingClientRect().width
      tab.style.width = width + 10 + 'px'
    })
  })
}
