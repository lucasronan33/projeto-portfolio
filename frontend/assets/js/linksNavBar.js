const navbar = document.querySelector('.navbar')

const btnSobre = navbar.querySelector('.btnSobre')
const btnTrabalhos = navbar.querySelector('.btnTrabalhos')
const btnGaleria = navbar.querySelector('.btnGaleria')
const btnContato = navbar.querySelector('.btnContato')
const btnIndex = document.querySelector('.btn-index')

const arrayNavbar = [btnSobre,
    btnTrabalhos,
    btnGaleria,
    btnContato,
    btnIndex,
]

const sobre = document.querySelector('#sobre')
const trabalhos = document.querySelector('#trabalhos')
const galeria = document.querySelector('#galeria')
const contato = document.querySelector('#contato')
const index = document.body

const arrayAlvosNavbar = [
    sobre,
    trabalhos,
    galeria,
    contato,
    index,
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

// const btnReload = document.querySelector('.btn-reload')

// btnReload.addEventListener('click', e => {
//     window.location.reload()
// })