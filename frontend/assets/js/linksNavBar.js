const navbar = document.querySelector('.navbar')

const arrayNavbar = [
    btnSobre = navbar.querySelector('.btnSobre'),
    btnTrabalhos = navbar.querySelector('.btnTrabalhos'),
    btnGaleria = navbar.querySelector('.btnGaleria'),
    btnContato = navbar.querySelector('.btnContato'),
]

const arrayAlvosNavbar = [
    sobre = document.querySelector('.sobre'),
    trabalhos = document.querySelector('.trabalhos'),
    galeria = document.querySelector('.galeria'),
    contato = document.querySelector('.contato'),
]

for (const index in arrayNavbar) {
    scrollInto(arrayNavbar[index], arrayAlvosNavbar[index])
}

function scrollInto(div, alvo) {
    div.addEventListener('click', e => {
        alvo.scrollIntoView({ behavior: "smooth", block: "start" })
    })
}