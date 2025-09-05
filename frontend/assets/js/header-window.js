export function headerWindow() {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(div => {
        div.addEventListener('click', e => {

            alert('Calma lá amigão, essa função ainda não estra pronta 🤨')
            console.log('click')
        })

        const divPai = div.parentNode.parentNode
    })
}