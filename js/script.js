const scrollingChildren = document.querySelector('#scroll').children
const scrollingChildrenDown = document.querySelector('#scrollDown').children
const scrollSec = document.querySelectorAll('[data-scroll]')

for (let i = 0; i < scrollingChildren.length; i++) {

    scrollingChildren[i].addEventListener('click', () => {

        let theId = scrollingChildren[i].getAttribute('id')

        for (let s = 0; s < scrollSec.length; s++) {

            let theData = scrollSec[s].getAttribute('data-scroll');
            if (theId === theData) {
                window.scrollTo(0, scrollSec[s].offsetTop)
            }
        }
    })
}

for (let i = 0; i < scrollingChildrenDown.length; i++) {

    scrollingChildrenDown[i].addEventListener('click', () => {

        let theId = scrollingChildrenDown[i].getAttribute('id')

        for (let s = 0; s < scrollSec.length; s++) {

            let theData = scrollSec[s].getAttribute('data-scroll');
            if (theId === theData) {
                window.scrollTo(0, scrollSec[s].offsetTop)
            }
        }
    })
}

const hamburgerBtn = document.getElementById("hamburger-menu")
const menuUl = document.getElementById("scroll")
const menuUlChildren = document.getElementById("scroll").children

hamburgerBtn.addEventListener('click', () => {
    menuUl.classList.toggle("display-flex")
    for(let p = 0; p < menuUlChildren.length; p++) {
        menuUlChildren[p].addEventListener('click', () => {
            menuUl.classList.remove('display-flex')
        })
    }
});