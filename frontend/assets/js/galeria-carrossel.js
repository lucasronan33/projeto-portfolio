const styleCarrossel = document.querySelector('.carrossel-galeria-content').style
document.addEventListener('DOMContentLoaded', () => {


    window.addEventListener('resize', () => {
        displayCarrossel()
    })
    displayCarrossel()

})

function displayCarrossel() {
    if (window.innerWidth > window.innerHeight) {
        styleCarrossel.overflowX = 'hidden'
    } else {
        styleCarrossel.overflowX = 'auto'
    }
}