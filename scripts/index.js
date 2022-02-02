const menuButton = document.getElementById("menu-button");
const navBar = document.querySelector(".nav-menu");
const subMenu = document.querySelectorAll(".sub-menu");
const dropDownBtns = document.querySelectorAll(".dropdown")
menuButton.addEventListener("click", toggleMenu);
function toggleMenu()
{
    menuButton.classList.toggle("toggle")
    navBar.classList.toggle("active")
  
    subMenu.forEach((element) =>{
 
        element.classList.toggle("active");     
    })
}
