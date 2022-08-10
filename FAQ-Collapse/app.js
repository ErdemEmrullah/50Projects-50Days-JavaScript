const toggles = document.querySelectorAll(".faq-toggle")
toggles.forEach(toggle =>{
    toggle.addEventListener("click",() =>{
        toggle.parentNode.classList.add("-active")
        console.log(toggle.parentNode)
    })
})