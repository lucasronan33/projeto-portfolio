export function sobre() {
    const sobre = document.querySelector('.sobre')

    document.addEventListener('change', () => {


        if (sobre) {
            console.log('testeee')
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
                console.log('sobreDesktop')
            } else {
                document.querySelector('.sobreMobile').style.display = 'flex'
                document.querySelector('.sobreDesktop').style.display = 'none'
                console.log('sobreMobile')
            }
        }
    })
}

sobre()