const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    data: { type: String, required: true },
    tipo: { type: String, required: true },
    nome: { type: String, required: true },
    tags: { type: String, required: true },
    descricao: { type: String, required: true },
    linkImg: { type: String, required: true },
    linkgithub: { type: String, required: false },
    linkprojeto: { type: String, required: false },
});

const LoginModel = new mongoose.model("users", LoginSchema);
class Login {
    constructor(body) {
        this.body = body;
        this.user = null;
        this.errors = [];
    }

    async cadastrar() {
        await this.userExists();
        if (this.errors.length > 0) {
            console.log(this.errors)
            return
        };

        this.user = await LoginModel.create(this.body);
    }

    async userExists() {
        this.user = await LoginModel.findOne({ nome: this.body.user });

        if (this.user) this.errors.push("user ja registrado");
        this.user =
        };
}

    static async buscausers() {
    const user = await LoginModel.find().sort({ data: 1 });
    console.log(user)
    return user;
}
}
module.exports = Login;
