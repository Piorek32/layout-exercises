const sliderButtons = Array.from(document.querySelectorAll('.slider_buttons button'));
const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
var auto = true;
const intervalTime = 5000;
let slideInterval;



sliderButtons.forEach((val, i) => {
    val.addEventListener('click', () => {
        selectSlide(i);
        if (auto) {
            clearInterval(slideInterval)
        }
    })

})


const setCurrentBtn = (slide) => {
    let current = document.querySelector('button.current');
    current.classList.remove("current")
    sliderButtons[slide].classList.add("current")

}

const selectSlide = (slide) => {
    let current = document.querySelector('.current');
    current.classList.remove('current')
    slides[slide].classList.add("current")
    setCurrentBtn(slide)

}

const nextSlide = () => {
    let current = document.querySelector('.current');
    let currentBtn = document.querySelector('button.current');
    setTimeout(() => {
        current.classList.remove('current')
        currentBtn.classList.remove('current')
    }, 400)

    if (current.nextElementSibling) {
        let q = current.nextElementSibling
        q.classList.add('current')
        let i = q.dataset.id;
        sliderButtons[i].classList.add("current")
    } else {
        slides[0].classList.add("current")
        sliderButtons[0].classList.add("current")
    }

}


if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}

