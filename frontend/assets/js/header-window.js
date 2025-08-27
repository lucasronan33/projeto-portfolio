document.addEventListener('DOMContentLoaded', () => {

    const divControlesAba = document.querySelectorAll('.divControlesAba')

    divControlesAba.forEach(div => {
        // div.addEventListener('click', () => {
        //     alert('Calma lá amigão, essa função ainda não estra pronta 🤨')
        // })

        const divPai = div.parentNode.parentNode

        console.log('divPai: ', divPai)

        div.querySelector('.close').addEventListener('click', () => {

        })
    })

})