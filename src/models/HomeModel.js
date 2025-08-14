const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    data: { type: String, required: true },
    tipo: { type: String, required: true },
    nome: { type: String, required: true },
})

const HomeModel = new mongoose.model('trabalhos', HomeSchema)
class Home {
    constructor(body) {
        this.body = body
        this.trabalho = null
        this.errors = []
    }

    async cadastrar() {
        this.valida()
        if (this.errors.length > 0) return
        await trabalhoExists()
        if (this.errors.length > 0) return
    }

    async trabalhoExists() {

    }
    async valida() {

    }
}

module.exports = Home