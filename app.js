const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')
const header = document.querySelector('.header')

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

button.addEventListener('click',()=>{
    header.classList.toggle('active-1')
})


