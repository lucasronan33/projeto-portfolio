export function headerWindow() {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(div => {
        div.addEventListener('click', e => {

            // alert('Calma lá amigão, essa função ainda não estra pronta 🤨')
            const target = e.target
            console.log(e.target)
            console.log(target.class)
            if (e.target.class === 'minimize') {
                console.log('minimize')
            }
        })

        const divPai = div.parentNode.parentNode
    })
}