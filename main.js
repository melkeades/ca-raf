import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { Intersection } from '@splidejs/splide-extension-intersection'
import '@splidejs/splide/css'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { debounce, onDomReady, scrollTriggerInit, sel, vh, addSplideClasses, connectSplideArrows, connectSplideBullets } from './utils'
import Home from './home'

import './style.styl'

// gsap.registerPlugin(ScrollTrigger)
const mq = gsap.matchMedia()

const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

const currentPage = sel('.page-wrapper').getAttribute('data-page')
switch (currentPage) {
  case 'home':
    Home()
    break
  case 'partners':
    // Partners()
    break
  case 'use-case':
    // useCase()
    break
  case 'contact':
    // contact()
    break
  case 'legal':
    // legal()
    break
  case 'error':
    // error()
    break
  default:
    console.log('unknown data-page:', currentPage)
}

const testInfoSlider$ = sel('.testimonials__info-slider')
if (testInfoSlider$) {
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
  })
  testImgSlider.sync(testSlider)
  testSlider.mount({ Intersection })
  testImgSlider.mount()
  connectSplideArrows(testSlider, 'testimonials')
  connectSplideBullets(testSlider, 'testimonials')
}
