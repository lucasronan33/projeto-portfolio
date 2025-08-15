document.addEventListener('DOMContentLoaded', () => {

    const divFiltros = document.querySelectorAll('.cel-filtros')

    const filtrosSelecionados = []
    // estilização filtros, marca/desmarca checkbox oculta
    divFiltros.forEach(div => {
        console.log('div: ', div)
        div.addEventListener('click', e => {
            console.log(e.target)
            console.log('divclick')

            const checkbox = div.querySelector('input')
            checkbox.checked === true ? checkbox.checked = false : checkbox.checked = true

            console.log(div.textContent.trim())

            const celGaleria = document.querySelectorAll('.cel-galeria')

            celGaleria.forEach(divGaleria => {

                if (divGaleria.textContent.indexOf(div.textContent.trim()) !== div.textContent.trim()) {
                    console.log(divGaleria.style.display)
                }
            })

        })
    })

    // exibindo somente projetos com tags selecionadas

})