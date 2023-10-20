const btn = document.querySelector('.burger-menu')
const menu = document.querySelector('.nav')
const menu__button = document.querySelector('.header__btn-container')
const people = document.querySelector('.people__reviews')
const left_btn = document.querySelector('.leftbtn')
const right_btn = document.querySelector('.rightbtn')

btn.addEventListener('click', () => {
  menu.classList.toggle('right-menu')
  menu__button.classList.toggle('right-btn')
})

left_btn.addEventListener('click', () => {
people.classList.add('left')
})

