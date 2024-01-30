import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { Intersection } from '@splidejs/splide-extension-intersection'
import '@splidejs/splide/css'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { debounce, onDomReady, scrollTriggerInit, sel, vh } from './utils'
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

switch (sel('.page-wrapper').getAttribute('data-page')) {
  case 'home':
    Home()
    break
  case 'use-case':
    useCase()
    break
  case 'contact':
    contact()
    break
  case 'legal':
    legal()
    break
  case 'error':
    error()
    break
  default:
    console.log('unknown data-page')
}
