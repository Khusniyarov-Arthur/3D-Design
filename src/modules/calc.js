import { animate } from "./helpers"
export const calc = (price = 100)=>{
  const calcBlock = document.querySelector('.calc-block')
  const square = document.querySelector('.calc-square')
  const type = document.querySelector('.calc-type')
  const count = document.querySelector('.calc-count')
  const day = document.querySelector('.calc-day')
  const totalValue = document.getElementById('total')
  
  let countValue = 1
  let dayValue = 1
  let total = 0

  const calculate = () => {
    total = +type.value * +square.value * countValue * dayValue * price
  }

  calcBlock.addEventListener('input', (e)=> {
    day.value >= 1 && day.value < 5 ? dayValue = 2 : day.value >= 5 && day.value < 10 ? dayValue = 1.5 : dayValue = 1
    count.value > 1 ? countValue += count.value / 10 : countValue = 1
    
    if (type.value && square.value) {
      calculate()

      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
        totalValue.textContent = Math.floor(total * progress)
        }
      });
    } else {
      totalValue.textContent = 0
    }
  })
}


