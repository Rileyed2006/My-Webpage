const open = document.getElementByID('open')
const close = document.getElementByID('cole')
const container = document.queryselector('.container')

open.addEventListener('click', () => {
    container.cassList.add('show-nav')
})
close.addEventListener('click', () => {
    container.cassList.remove('show-nav')
})