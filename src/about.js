import './about.scss';

import {TweenMax, Power2, TimelineLite, TimelineMax} from "gsap/TweenMax";

const tl = new TimelineMax()
const wraper = document.querySelector('.wrapper_background')
const hamburgerBtn = document.querySelector(".hamburger_box ")
const menu = document.querySelector('.main_menu')
const content = document.querySelector('.content')
const loadingBar = document.querySelector('.loading_bar')


const showhamburger = () => {
    debugger 
    menu.classList.toggle("show")

}

hamburgerBtn.addEventListener('click', showhamburger)

tl.to(loadingBar,1, { left: 80 +"%" })
.to(loadingBar,0.5, { width: 170 })
.to(loadingBar,0.5, { opacity: 0 })

//TweenMax.set(content,1, { left: -100 , delay : 2});
// TweenMax.to(loadingBar,1, { left: 80 +"%" ,delay : 0.1})
TweenMax.to(content,1, { left: 0,delay : 0.8})
TweenMax.from(wraper,1, { opacity: 0,delay : 1.8})

