document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('resize', () => {
        sobre()
    })
    sobre()
})

function sobre() {
    if (window.innerWidth > window.innerHeight) {
        document.querySelector('.sobreDesktop').style.display = 'flex'
        document.querySelector('.sobreMobile').style.display = 'none'
        console.log('sobreDesktop')
    } else {
        document.querySelector('.sobreMobile').style.display = 'flex'
        document.querySelector('.sobreDesktop').style.display = 'none'
        console.log('sobreMobile')
    }
}