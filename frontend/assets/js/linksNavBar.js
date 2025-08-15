const navbar = document.querySelector('.navbar')

const arrayNavbar = [
    btnSobre = navbar.querySelector('.btnSobre'),
    btnTrabalhos = navbar.querySelector('.btnTrabalhos'),
    btnGaleria = navbar.querySelector('.btnGaleria'),
    btnContato = navbar.querySelector('.btnContato'),
    btnIndex = document.querySelector('.btn-index'),
]

console.log('btn-index: ', arrayNavbar.btnIndex)
const arrayAlvosNavbar = [
    sobre = document.querySelector('.sobre'),
    trabalhos = document.querySelector('.trabalhos'),
    galeria = document.querySelector('.galeria'),
    contato = document.querySelector('.contato'),
    index = document.body,
]

for (const index in arrayNavbar) {
    scrollInto(arrayNavbar[index], arrayAlvosNavbar[index])
}

function scrollInto(div, alvo) {
    div.addEventListener('click', e => {
        console.log('click')
        console.log('div: ', div)
        console.log('alvo: ', alvo)
        alvo.scrollIntoView({ behavior: "smooth", block: "start" })
    })
}

// document.addEventListener(
//     'click', e => {
//         console.log('e.target: ', e.target)
//     }
// )

// BUTTON DE RELOAD
// BUTTON TEMPORARIO

const btnReload = document.querySelector('.btn-reload')

btnReload.addEventListener('click', e => {
    window.location.reload()
})