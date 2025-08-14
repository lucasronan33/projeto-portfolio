const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
    data: { type: String, required: true },
    tipo: { type: String, required: true },
    nome: { type: String, required: true }
});

const HomeModel = new mongoose.model("trabalhos", HomeSchema);
class Home {
    constructor(body) {
        this.body = body;
        this.trabalho = null;
        this.errors = [];
    }

    async cadastrar() {
        await this.trabalhoExists();
        if (this.errors.length > 0) {
          console.log(this.errors)
          return};

        this.trabalho =await HomeModel.create(this.body);
    }

    async trabalhoExists() {
        this.trabalho = await HomeModel.findOne({ nome: this.body.nome });

        if (this.trabalho) this.errors.push("Trabalho ja registrado");
        this.body = {
            nome: this.body.nome,
            data: this.body.data,
            tipo: this.body.tipo
        };
    }

static    async buscaTrabalhos() {
        const trabalho = await HomeModel.find().sort({ data: 1 });
        console.log(trabalho)
        return trabalho;
    }
}
module.exports = Home;
