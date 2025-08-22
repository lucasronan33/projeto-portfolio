document.addEventListener('DOMContentLoaded', () => {
    const btnVoltarIndex = document.querySelector('#btn-voltarCadastrarTrabalhos')

    btnVoltarIndex.addEventListener('click', () => {
        console.log('teste')
        window.location.href = '/'
    })
})