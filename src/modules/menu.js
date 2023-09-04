export const menu = () => {
  const modalMenu = document.querySelector("menu")
  const body = document.querySelector("body")

  body.addEventListener('click', (e)=> {
    if ( e.target.closest(".menu")) {
      modalMenu.classList.add('active-menu')

    } else if ( e.target.classList.contains("close-btn") || e.target.matches("li>a") || !e.target.classList.contains("active-menu")) {
      modalMenu.classList.remove('active-menu')
    } 
   })
}
  