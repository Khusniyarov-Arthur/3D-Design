import { animate } from "./helpers"

export const modal = () => {
  let step = 0
  let size = 0
  
  const popupBtn = document.querySelectorAll('.popup-btn')
  const modal = document.querySelector('.popup')
  // const modalClose = document.querySelector('.popup-close')
  const popupContent = document.querySelector('.popup-content')

  const hidenOrVisible = () => {
  modal.style.display === "block" 
  ? modal.style.display = "none" 
  : modal.style.display = "block"
  }

  let clientWidth = () => {
    size = document.documentElement.clientWidth
    return size
  }
  // применял до helper
  // let go = () => {
  //   popupContent.style.opacity = step
  //   const modalMove = () => {
  //     let render = requestAnimationFrame(modalMove)
  //     step += 2
  //     step < 100 
  //     ? popupContent.style.opacity = `${step}%` 
  //     : cancelAnimationFrame(render)
  //   }
  //   modalMove()
  // }

    let go = () => {
      if (size > 768) {
        animate({
          duration: 2000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.opacity = progress 
          }
        });
      }
  }


  modal.addEventListener('click', (e)=> {
   !e.target.closest(".popup-content") || 
   e.target.classList.contains("popup-close") ? 
   modal.style.display = "none" : 
   hidenOrVisible;
  })



  popupBtn.forEach((item) => {
    item.addEventListener('click', hidenOrVisible)

    item.addEventListener('click', go)
  }) 

  addEventListener('resize', clientWidth)
  // modalClose.addEventListener('click', hidenOrVisible)
}
