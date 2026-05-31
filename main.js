let caixa = document.getElementById('caixa')
let body = document.querySelector ('body')

caixa.addEventListener('click', ()=>{
    caixa.classList.toggle('dark')
    body.classList.toggle('dark')
})