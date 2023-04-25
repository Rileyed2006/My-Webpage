const open = document.getElementByID('open')
const close = document.getElementByID('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})
close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})