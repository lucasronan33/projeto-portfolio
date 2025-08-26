document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.lazy-section')

    const observer = new IntersectionObserver(async (entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target
                const url = section.getAttribute('data-url')

                // mostra o loader
                const lines = section.querySelectorAll('.animate')
                animateLine(0, lines, url, section)


                // para de observar depois de carregar o fetch
                obs.unobserve(section)
            }
        })
    }, { threshold: 0.2 }) //começa a carregar quando 20% da seção aparece na tela

    sections.forEach(section => observer.observe(section))



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
                    return html
                }
                catch (err) {
                    section.innerHTML = `<p> Erro ao carregar seção</p>`
                    console.log(err)
                }
            }, 750 * 2);
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
            const html = await res.text()
            return html
        } catch (err) {
            console.log(err)
            const html = `<p> Erro ao carregar seção</p>`
        }
    }

})