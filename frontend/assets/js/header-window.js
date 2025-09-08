export function headerWindow() {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(divPai => {
        divPai.querySelectorAll('div').forEach(div => {

            div.addEventListener('click', e => {

                // alert('Calma lá amigão, essa função ainda não estra pronta 🤨')

                console.log(div.className)
                console.log(e)
                if (div.className === 'close') {
                    console.log('close')
                    console.log(divPai.parentNode.parentNode.style.display = 'none')
                }
            })

        })
    })
}