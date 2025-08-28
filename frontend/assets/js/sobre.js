export function sobre() {
    const sobre = document.querySelector('.sobre')

    if (sobre) {
        resize()
    }

    if (sobre) {
        window.addEventListener('resize', () => {
            resize()
        })
        resize()
    } else {
        return
    }
    function resize() {
        if (window.innerWidth > window.innerHeight) {
            document.querySelector('.sobreDesktop').style.display = 'flex'
            document.querySelector('.sobreMobile').style.display = 'none'
        } else {
            document.querySelector('.sobreMobile').style.display = 'flex'
            document.querySelector('.sobreDesktop').style.display = 'none'
        }
    }
}

document.addEventListener('DOMContentLoaded', sobre)