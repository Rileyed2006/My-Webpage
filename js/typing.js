const textEl =document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "We love progrraming!!!"
let idx = 1
let speed = 300

writeText()

function writeText(){
    textEl.innerText = text.slice(0,1)
}