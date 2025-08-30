export function contato() {
    const form = document.querySelector('.content-window-contato')
    const enviaremail = document.querySelector('input[name="enviaremail"]')
    const inputs = document.querySelectorAll(['input[type="text"], input[name="email"]'])


    form.addEventListener('keydown', function (e) {

        if (enviaremail.value === 'node sendmail.js' && e.key === 'Enter') {
            console.log(e.key)

            form.submit()
        }

    })

    inputs.forEach(input => {

        // condicional para não selecionar o input de submit
        if (input.name !== 'enviaremail') {
            input.addEventListener('input', e => {

                input.style.width = (input.value.length) + "ch";
                input.style.background = 'rgba(0,0,0,0)'

                if (e.inputType === 'deleteContentBackward' && input.value.length < 1) {
                    input.removeAttribute('style')
                }

            })
        }

    })
}
if (window.location.href === '/contato') contato()