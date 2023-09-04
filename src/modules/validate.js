export const validate = () => {
  // 1 метод
  // const square = document.querySelector('.calc-square')
  // const count = document.querySelector('.calc-count')
  // const day = document.querySelector('.calc-day')
  
  // let validateNumber = (input) => {
  //   input.value = input.value.replace(/[^\d]/g, "");
  // }

  // square.addEventListener('input', ()=>{validateNumber(square)})
  // count.addEventListener('input', ()=>{validateNumber(count)})
  // day.addEventListener('input', ()=>{validateNumber(day)})
  // event- какое событие произошло
  // target - на чем произошло это событие

  const calcItem = document.querySelectorAll('input.calc-item')
  const typeEmail = document.querySelectorAll('[type=email]')
  const allTypeText = document.querySelectorAll('[name="user_name"]')
  const typeTel = document.querySelectorAll('[type=tel]')

  calcItem.forEach( input => input.addEventListener('input', (event)=>{
    event.target.value = event.target.value.replace(/[^\d]/g, "")
  }) )

  allTypeText.forEach( input => input.addEventListener('input', (event)=>{
    event.target.value = event.target.value.replace(/[^а-я\-\s]/gi, "")
  }) )

  typeEmail.forEach( input => input.addEventListener('input', (event)=>{
    event.target.value = event.target.value.replace(/[^a-z\@\-\_\.\!\~\*\`]/gi, "")
  }) )

  // typeTel.forEach( input => input.addEventListener('input', (event)=>{
  //   event.target.value = event.target.value.replace(/[^\d\(\)\-]/g, "")
  // }) )

  //  typeTel.forEach( input => input.addEventListener('blur', (event)=>{
  //   event.target.value = event.target.value.replace(/[\s]+/g, " ")
  // }) )

  typeTel.forEach( input => input.addEventListener('blur', (event)=>{
    event.target.value = event.target.value.replace(/^[\-\s]+|[^\d\s\(\)\-]+|[\-\s]+$/g, "")
    event.target.value = event.target.value.replace(/[\s]+/g, " ")
    event.target.value = event.target.value.replace(/[\-]+/g, "-")
    event.target.value = event.target.value.replace(/^[\-\s]+/g, "")
    event.target.value = event.target.value.replace(/[\-\s]+$/g, "")
  }) )
  
  // let validate = () => {
  //   allTypeText.value = allTypeText.value.replace(/[^\d]/g, "");
  // }
}

