const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circle = document.getElementById('.circle')


let currentActive = 1

nex.addEventListener('cick', () =>{
    currentActive++
    if (currentActive > 4){
        currentActive = 4
    }
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1){
        currentActive < 1
    }
    update()
})

function update(){
    console.log(currentActive-1)/3*100 + '%'

    if(currentActive == 1){
        prev.disabled = true
    }
    else if(currentActive == 4){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled  false
    }
    circles.forEach((circle, index) => {
        if (index < currentActive){
            circle.calssList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
}