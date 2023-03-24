const textEl =document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "Naomi Works At WildWaters <3"
let idx = 1
let speed = 300

speedEl.addEventListener('input', (element) =>{
    speed = 300/element.target.value
})

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length){
        idx = 1
    }
    setTimeout(writeText,speed)
}
