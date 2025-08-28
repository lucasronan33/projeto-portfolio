document.addEventListener('DOMContentLoaded', filtros)

export function filtros() {
    const divFiltros = document.querySelectorAll('.cel-filtros')

    const celGaleria = document.querySelectorAll('.cel-galeria')

    // estilização filtros, marca/desmarca checkbox oculta
    let tagsAtivas = []
    divFiltros.forEach(divFiltro => {
        divFiltro.addEventListener('click', () => {

            const checkbox = divFiltro.querySelector('input')
            if (checkbox.checked === true) {
                checkbox.checked = false

                const cleanTextDivFiltro = divFiltro.textContent.trim()

                tagsAtivas = tagsAtivas.filter(filtro => {
                    if (filtro === cleanTextDivFiltro) {
                        return false
                    }
                    return true
                })

                console.log('filtroDesmarcado: ', cleanTextDivFiltro)

                celGaleria.forEach(divGaleria => {
                    tagsAtivas.forEach(tag => {
                        if (divGaleria.className.includes(tag)) {
                            divGaleria.style.display = 'flex'
                        } else {
                            divGaleria.style.display = 'none'

                        }
                    })
                    if (tagsAtivas.length === 0) {
                        divGaleria.style.display = 'flex'
                    }
                })

                console.log('divGaleria (pos-if): ', tagsAtivas)
            } else {
                checkbox.checked = true

                celGaleria.forEach(divGaleria => {
                    const cleanTextDivFiltro = divFiltro.textContent.trim()
                    if (!divGaleria.className.includes(cleanTextDivFiltro)) {

                        !tagsAtivas.includes(cleanTextDivFiltro) ? tagsAtivas.push(cleanTextDivFiltro) : {}
                        divGaleria.style.display = 'none'

                    }
                })

                console.log('divsFiltradas: ', tagsAtivas)
            }

        })
    })

    // exibindo somente projetos com tags selecionadas

}