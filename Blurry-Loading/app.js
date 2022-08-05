const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let countOfPercent= 0
let blurcounter=100

let int=setInterval(blurring,30)

function blurring(){
    blurcounter--
    countOfPercent++;
    //console.log(countOfPercent)
    if(countOfPercent>=100){
        clearInterval(int)
    }
    loadText.innerHTML=countOfPercent+"%"
        loadText.style.opacity=countOfPercent/50;
    if(countOfPercent>50){
        loadText.style.opacity=(1-(countOfPercent/100))*2;
    }
    bg.style.filter=`blur(${blurcounter}px)`
}