document.addEventListener('DOMContentLoaded', () => {


    const celGaleria = document.querySelectorAll('.cel-galeria')

    celGaleria.forEach(divGaleria => {
        divGaleria.addEventListener('click', e => {

        })
    })

})


function criarSpan() {
    const divFundoSpan = document.createElement('span')
    divFundoSpan.style.height = document.body.scrollHeight + 'px'
    document.body.insertBefore(divFundoSpan, document.body)

    const span = document.createElement('span')
    const container = document.createElement('div')
    const imageProfile = document.createElement('div')
    const divButtons = document.createElement('div')
    const btnSave = document.createElement('button')
    const btnCancel = document.createElement('button')

    divFundoSpan.classList.add('divFundoSpan')
    span.classList.add('spanImageProfile')
    container.id = 'container'
    imageProfile.classList.add('divImageProfile')
    divButtons.className = 'buttons'
    btnSave.classList.add('buttons');
    btnCancel.classList.add('buttons');
    btnCancel.id = 'btnCancel'

    btnSave.innerText = 'Salvar'
    btnCancel.innerText = 'Cancelar'

    divFundoSpan.appendChild(span)
    span.appendChild(container)
    container.append(imageProfile, divButtons)
    divButtons.append(btnSave, btnCancel)


    divFundoSpan.addEventListener('click', (event) => {
        if (event.target === divFundoSpan) {
            divFundoSpan.remove()
        }
    })
}