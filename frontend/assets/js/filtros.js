document.addEventListener('DOMContentLoaded', () => {

    const divFiltros = document.querySelectorAll('.cel-filtros')

    const celGaleria = document.querySelectorAll('.cel-galeria')

    // estilização filtros, marca/desmarca checkbox oculta
    divFiltros.forEach(div => {
        div.addEventListener('click', e => {

            let filtrosSelecionados = []

            const checkbox = div.querySelector('input')
            if (checkbox.checked === true) {
                checkbox.checked = false

                filtrosSelecionados.forEach(divSelecionada => { divSelecionada.style.display = 'flex' })
                console.log(filtrosSelecionados)

            } else {
                checkbox.checked = true

                celGaleria.forEach(divGaleria => {
                    const cleanTextDiv = div.textContent.trim()
                    if (divGaleria.className.indexOf(cleanTextDiv) === -1) {
                        filtrosSelecionados.push(divGaleria)
                    }
                })

                filtrosSelecionados.forEach(divSelecionada => { divSelecionada.style.display = 'none' })
                console.log('filtrosSelecionados: ', filtrosSelecionados)
                return filtrosSelecionados
            }

        })
    })

    // exibindo somente projetos com tags selecionadas

})