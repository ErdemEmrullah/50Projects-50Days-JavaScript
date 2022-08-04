const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
var yuzde=0;
let count=0;
next.addEventListener("click",()=>{
    yuzde =yuzde+33;
    if(yuzde>=100){
        yuzde=100;
    }
    console.log(yuzde+ "artıs 33er şekilde");
    count++;
    console.log(count);
    if(count==3){
        next.disabled=true;
        prev.disabled=false;
    }
    for(let i = 1;i<count;i++){
        circles[i].classList.add("active");
    }
    progress.style.width = yuzde+"%";
    }
    ) 
prev.addEventListener("click",()=>{
    yuzde=yuzde-33;
    count--;
     console.log(count+"geri");
    if(count==0){
        next.disabled=false;
        prev.disabled=true;
    }
    for(let i = 4;i>count;i--){
        circles[count].classList.remove("active");
    }
    progress.style.width = yuzde+"%";

})