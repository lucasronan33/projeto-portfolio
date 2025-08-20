const carrossel = document.querySelector('.carrossel-galeria-content')
const celGaleria = document.querySelectorAll('.cel-galeria')
const btnAvancar = document.querySelector('.btn-avancar')
const btnVoltar = document.querySelector('.btn-voltar')

document.addEventListener('DOMContentLoaded', () => {


    window.addEventListener('resize', () => {
        displayCarrossel()
    })
    displayCarrossel()

    carrossel.addEventListener('scroll', () => {

        if (carrossel.scrollLeft > 0) {
            btnVoltar.style.display = 'flex'
        } else {
            btnVoltar.style.display = 'none'
        }
    })
    btnAvancar.addEventListener('click', () => {
        carrossel.scrollBy({
            left: carrossel.offsetWidth * 0.5,
            behavior: 'smooth'
        })
    })

    btnVoltar.addEventListener('click', () => {
        carrossel.scrollBy({
            left: -(carrossel.offsetWidth * 0.5),
            behavior: 'smooth'
        })
    })

})

function displayCarrossel() {
    if (window.innerWidth > window.innerHeight) {
        carrossel.style.overflowX = 'hidden'
        celGaleria.forEach(div => {
            div.style.width = '20vw'
        })
        btnAvancar.style.display = 'flex'

    } else {
        carrossel.style.overflowX = 'auto'
        celGaleria.forEach(div => {
            div.style.width = '45vw'
        })
        btnAvancar.style.display = 'none'
        btnVoltar.style.display = 'none'
    }
}