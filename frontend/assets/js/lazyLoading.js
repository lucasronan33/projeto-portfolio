import { headerWindow } from './header-window.js'
import { sobre } from './sobre.js'
import { contato } from './contato.js'
import { galeria } from './galeria-carrossel.js'
import { filtros } from './filtros.js'
import { openTrabalho } from './openTrabalho.js'
import { windowCMD } from './animation-cmd.js'

// const observerMutations = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//         if (mutation.type === 'childList') {
//             mutation.addedNodes.forEach(node => {
//                 if (node.nodeType === 1) {
//                     headerWindow()
//                     if (node.matches('.sobre')) {
//                         sobre()
//                     } else if (node.matches('.galeria')) {
//                         filtros()
//                         openTrabalho()
//                         galeria()
//                     } else if (node.matches('.contato')) {
//                         contato()
//                     }
//                 }
//             })
//         }
//     })
// })
// observerMutations.observe(document.body, { childList: true, subtree: true })
document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    function resize() {
        if (window.innerWidth > window.innerHeight) {
            document.querySelector('.footer').style.display = 'flex'
        } else {
            document.querySelector('.footer').style.display = 'block'
        }
    }

    const sections = document.querySelectorAll('.lazy-section')

    // Armazenamos os timers de cada seção
    const timers = new Map()

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {

            const section = entry.target
            const url = section.getAttribute('data-url')

            // Se não houver timer para essa seção, cria um
            if (entry.isIntersecting && !timers.has(section)) {

                const timer = setTimeout(async () => {
                    const cmd = await windowCMD()
                    section.appendChild(cmd)

                    const contentCMD = section.querySelector('.content-animation')
                    const animation = section.querySelector('.divAnimation')
                    contentCMD.appendChild(animation)

                    // dispara a animação
                    const lines = section.querySelectorAll('.animate')
                    animateLine(0, lines, url, section)

                    // remove o timer depois da animação e para de observar
                    timers.delete(section)
                    obs.unobserve(section)

                }, 500);// 0,5s de espera

                timers.set(section, timer)


            } else {
                // Se a seção saiu da tela antes do tempo, cancela o timer
                if (timers.has(section)) {
                    clearTimeout(timers.get(section))
                    timers.delete(section)
                }
            }
        })
    }, { threshold: 0.2 }) //começa a carregar quando 20% da seção aparece na tela

    sections.forEach(async section => {
        setTimeout(() => {
            observer.observe(section)
        }, 1000)

    })



    function typeWriter(element, text, speed = 100, callback) {
        let i = 0

        element.textContent = ''
        element.classList.add('cursor')

        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i)
                i++

                // recursão com delay para cada char
                setTimeout(typing, speed)
            } else {
                element.classList.remove('cursor')// remove o cursor
                if (callback) callback() // chama o proximo elemento
            }
        }
        typing()
    }

    async function animateLine(index = 0, element, url, section) {
        if (index >= element.length) {
            element[index - 1].classList.add('blink')
            setTimeout(async () => {
                try {
                    const html = await fetchSection(url)
                    section.innerHTML = html

                    headerWindow()
                    console.log(section.id)
                    if (section.id === 'sobre') {
                        sobre()
                    } else if (section.id === 'galeria') {
                        filtros()
                        openTrabalho()
                        galeria()
                    } else if (section.id === 'contato') {
                        contato()
                    }
                    return html
                }
                catch (err) {
                    section.innerHTML = `<p> Erro ao carregar seção</p>`
                    console.log(err)
                }
            }, 750 * 2);
            return
        }


        const line = element[index]
        const text = line.dataset.text

        if (line.classList.contains('line')) {
            // mostra direto
            line.textContent = text
            // espera um pouco e já pula pra próxima
            setTimeout(() => {
                animateLine(index + 1, element, url, section)
            }, 500);
        } else {
            typeWriter(line, text, 50, () => {
                // depois que a linha termina, chama a proxima
                animateLine(index + 1, element, url, section)
            })
        }
    }

    async function fetchSection(url) {
        try {
            const res = await fetch(url)

            // converte o fetch para um elemento HTML
            const parser = new DOMParser()
            const doc = parser.parseFromString(await res.text(), 'text/html')

            // retorna o elemento em string
            const html = doc.body.firstElementChild.outerHTML
            return html
        } catch (err) {
            console.log(err)
            const html = `<p> Erro ao carregar seção</p>`
            return html
        }
    }

})