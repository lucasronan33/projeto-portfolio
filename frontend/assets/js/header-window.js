const contador = new Map()
export function headerWindow() {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(divPai => {
        divPai.querySelectorAll('div').forEach(div => {

            div.addEventListener('click', e => {

                // alert('Calma lá amigão, essa função ainda não estra pronta 🤨')

                const corpoPagina = divPai.parentNode.parentNode.childNodes
                if (div.className === 'minimize') {

                    corpoPagina.forEach(el => {
                        if (el.classList && !el.classList.contains('header-window') && el.style.height !== '0px' && el.style.display !== 'none') {

                            (function verificaMap() {
                                contador.forEach((value, key) => {
                                    !document.body.contains(key) ? contador.delete(key) : {}
                                })
                            })()
                            Object.assign(el.style, {
                                width: '100%',
                                transform: 'scaleY(0)',
                                height: '0px',
                                paddingBottom: '2vh',
                            })

                            Object.assign(el.parentNode.style, {
                                width: '30%',
                                left: `${contador.size * 30}%`,
                                height: 'fit-content',
                                paddingBottom: '0px',
                                position: 'fixed',
                                bottom: '0',
                                zIndex: '9',
                            })

                            el.parentNode.scrollIntoView({ behavior: "smooth", block: "end" })
                            if (el.style.display !== 'none') {
                                contador.set(el.parentNode, el)
                                console.log('contador: ', contador)
                            }
                        }
                    })

                }

                if (div.className === 'maximize') {

                    corpoPagina.forEach(el => {

                        if (el.classList && !el.classList.contains('header-window')) {

                            // el.style.removeProperty('transform')
                            // el.style.removeProperty('height')
                            // el.parentNode.style.removeProperty('padding-bottom')
                            // el.parentNode.style.removeProperty('height')

                            // maximiza a pagina minimizada (remove os estilos inline adicionados)

                            for (const prop of el.style) {
                                if (prop !== 'display') {
                                    el.style.removeProperty(prop)
                                    console.log('removido: ', prop)
                                }
                            }

                            for (const prop of el.parentNode.style) {
                                el.parentNode.style.removeProperty(prop)

                            }
                        }

                        el.parentNode.scrollIntoView({ behavior: "smooth", block: "start" })

                        contador.delete(el.parentNode)
                    })

                }

            })

        })
    })
}