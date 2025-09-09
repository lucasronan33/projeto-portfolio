export function headerWindow() {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(divPai => {
        divPai.querySelectorAll('div').forEach(div => {

            div.addEventListener('click', e => {

                // alert('Calma lá amigão, essa função ainda não estra pronta 🤨')

                if (div.className === 'minimize') {

                    const corpoPagina = divPai.parentNode.parentNode.childNodes
                    corpoPagina.forEach(el => {

                        if (el.classList && !el.classList.contains('header-window')) {
                            console.log('el.classList: ', el.classList)

                            Object.assign(el.style, {
                                transform: 'scaleY(0)',
                                height: '0px',
                            })

                            Object.assign(el.parentNode.style, {
                                paddingBottom: '0px',
                                height: 'fit-content',
                            })
                            console.log(el.style.transform)
                            console.log(el.parentNode)

                            el.parentNode.scrollIntoView({ behavior: "smooth", block: "end" })


                        }
                    })

                }

                if (div.className === 'maximize') {

                    const corpoPagina = divPai.parentNode.parentNode.childNodes
                    corpoPagina.forEach(el => {

                        if (el.classList && !el.classList.contains('header-window')) {

                            el.style.removeProperty('transform')
                            el.style.removeProperty('height')
                            el.parentNode.style.removeProperty('padding-bottom')
                            el.parentNode.style.removeProperty('height')

                        }

                        el.parentNode.scrollIntoView({ behavior: "smooth", block: "start" })
                    })

                }

            })

        })
    })
}