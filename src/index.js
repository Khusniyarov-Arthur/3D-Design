import {menu} from './modules/menu'
import {timer} from './modules/timer'
import {modal} from './modules/modal'
import {smoothScroll} from './modules/smoothScroll'
import {tabs} from './modules/tabs'
import {validate} from './modules/validate'
import {slider} from './modules/slider'
import {calc} from './modules/calc'
import {swiper} from './modules/swiper'
import {sendForm} from './modules/sendForm'



menu()
timer("3 june 2023 23:00 :59")
modal()
smoothScroll()
tabs()
validate()
slider()
calc(100)
swiper()
sendForm({
  formId: 'form1', 
  someElem:[ 
    {
    type: 'block',
    id: 'total'
    }
  ]
})

sendForm({
  formId: 'form2', 
})

sendForm({
  formId: 'form3', 
})
