
const counter = document.querySelectorAll(".counter") // counter divi seçildi.

counter.forEach(counter => { // birden fazla div olduğu için içinde gezinmek için kullandık.
    const updateCounter = () =>{
        const target = +counter.getAttribute("data-target") 
        const c= +counter.innerText // stringi numbera çevirmek için kullandık.
        const increment = target/150 // sayı ne kadar büyükse o kadar uzun sürer.

        if(c<target){
            counter.innerText = `${Math.ceil(c + increment)}` //ceil ile sayı yuvarlanır.
            setTimeout(updateCounter,1)
        }

        else{
            counter.innerText = target
        }
    }

    updateCounter()
})

