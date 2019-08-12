import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

const topBorder = document.querySelector(".top")
const rightBorder = document.querySelector(".right")
const bottomBorder = document.querySelector(".bottom")
const leftBorder = document.querySelector(".left")
const logo = document.querySelector('.logo_box_img')
const topSpan = document.querySelector(".top_span");
const rightSpan = document.querySelector(".right_span")
const bottomSpan = document.querySelector(".bottom_span");
const leftSpan = document.querySelector(".left_span")
const boxtTitel = document.querySelector('.box-titel')
const contentWraper = document.querySelector('.slider_content_wraper')
const wraperTitel = document.querySelector(".content_wraper_titel")
const slider = document.querySelector('.slider')



//logo box

TweenMax.from(topBorder,1, { width: 0})
TweenMax.from(rightBorder,0.7, { height: 0, delay : 1})
TweenMax.from(bottomBorder,1, { width: 0,delay : 1.7})
TweenMax.from(leftBorder,0.7, { height: 0,delay : 2.7})
//logo
TweenMax.from(logo,1, { opacity: 0,delay : 4})
//box undr logo
TweenMax.from(topSpan,1, { width: 0,delay : 4})
TweenMax.from(rightSpan,1, { height: 0,delay : 5})
TweenMax.from(bottomSpan,1, { width: 0,delay : 4})
TweenMax.from(leftSpan,1, { height: 0,delay : 5})
// TweenMax.from(logo,1, { opacity: 0,delay : 4})
TweenMax.from(slider,0.1, { opacity: 0,delay : 6})
TweenMax.from(wraperTitel,0.3, { opacity: 0,delay : 6})
TweenMax.from(boxtTitel,0.1, { opacity: 0,delay : 6.2})

