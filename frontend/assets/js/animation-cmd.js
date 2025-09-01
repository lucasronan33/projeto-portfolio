document.addEventListener('DOMContentLoaded', () => {

    const cmd = async () => {
        const res = await fetch('/cmd')

        const parser = new DOMParser()
        const doc = parser.parseFromString(await res.text(), 'text/html')

    }

})