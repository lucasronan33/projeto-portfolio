const cmd = async () => {
    try {
        const res = await fetch('/cmd')

        const parser = new DOMParser()
        const doc = parser.parseFromString(await res.text(), 'text/html')
        const html = doc.body.firstElementChild.outerHTML
        return html
    } catch (err) {
        const html = err
        return html
    }
}