const contador = new Map()
export function headerWindow() {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(divPai => {
        divPai.querySelectorAll('div').forEach(div => {

            div.addEventListener('click', e => {

                // alert('Calma lá amigão, essa função ainda não estra pronta 🤨')

                const corpoPagina = divPai.parentNode.parentNode.childNodes
                if (div.className === 'minimize') {
                    corpoPagina[0].parentNode.classList.add('minimized-parent')
                    document.querySelector('.footer').appendChild(corpoPagina[0].parentNode)
                    corpoPagina.forEach(el => {
                        if (el.classList && !el.classList.contains('header-window') && el.style.height !== '0px') {

                            (function verificaMap() {
                                contador.forEach((value, key) => {
                                    !document.body.contains(key) ? contador.delete(key) : {}
                                })
                            })()

                            el.classList.add('minimized')

                            // Object.assign(el.parentNode.style, {
                            //     left: `${contador.size * 30}%`,
                            //     zIndex: `${contador.size + 9}`,
                            // })

                            el.parentNode.scrollIntoView({ behavior: "smooth", block: "end" })
                            if (el.style.display !== 'none') {
                                contador.set(el.parentNode, el)
                                console.log('contador: ', contador)
                            }
                            console.log('length: ', contador.entries.length)
                        }
                    })

                }

                if (div.className === 'maximize') {

                    corpoPagina[0].parentNode.classList.remove('minimized-parent')

                    corpoPagina.forEach(el => {
                        document.querySelector('#' + el.parentNode.dataset.class).appendChild(el.parentNode)
                        if (el.classList && !el.classList.contains('header-window')) {

                            // el.style.removeProperty('transform')
                            // el.style.removeProperty('height')
                            // el.parentNode.style.removeProperty('padding-bottom')
                            // el.parentNode.style.removeProperty('height')

                            // maximiza a pagina minimizada (remove os estilos inline adicionados)

                            el.classList.remove('minimized')
                        }

                        el.parentNode.scrollIntoView({ behavior: "smooth", block: "start" })

                        contador.delete(el.parentNode)
                    })

                }

            })

        })
    })
}