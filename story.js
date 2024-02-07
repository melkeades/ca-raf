import Splide from '@splidejs/splide'
import { addSplideClasses, sel, splideAutoWidth } from './utils'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css'

import './story.styl'

export default function Story() {
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
}
