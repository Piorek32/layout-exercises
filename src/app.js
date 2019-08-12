import './app.scss';
import './scripts/slider.js'
import './scripts/animations.js'



const contentWraper = document.querySelector('.slider_content_wraper')
const menu = document.querySelector('.main_menu')
const hamburgerBtn = document.querySelector(".hamburger_box ")

const showhamburger = () => {

    menu.classList.toggle("show")
    contentWraper.classList.toggle('down')

}

hamburgerBtn.addEventListener('click', showhamburger)











