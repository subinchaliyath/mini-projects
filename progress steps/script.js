const progress = document.querySelector('.progress-line')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.progress-circle')

let count = 1
next.addEventListener('click', () => {
    count++;
    count>circles.length? count=circles.length:count;
    update()
    console.log(count);

})

prev.addEventListener('click', () => {
    count--;
    count<1?count=1:count;
    update()
    console.log(count);

})
const update=()=>{
    circles.forEach((circle,index)=>{
        if(index<count){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }

    })
    const actives= document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*99.9+'%'
}
