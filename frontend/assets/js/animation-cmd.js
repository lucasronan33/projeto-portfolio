export const windowCMD = async () => {
    try {
        const res = await fetch('/cmd')

        const parser = new DOMParser()
        const doc = parser.parseFromString(await res.text(), 'text/html')
        // console.log(doc)
        const html = doc.body.firstElementChild

        return html
    } catch (err) {
        const html = err
        return html
    }
}