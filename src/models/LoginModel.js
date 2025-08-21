require('dotenv').config()
class Login {
    constructor(body) {
        this.body = body;
        this.user = null
        this.userName = process.env.USER
        this.userPass = process.env.PASS
        this.errors = [];
    }

    async login() {
        if (this.body.user !== this.userName || this.body.pass !== this.userPass) {

            return this.errors.push('usuario ou senha inválido')
        };
        this.user = {
            user: this.userName,
            pass: this.userPass,
        }
    }
}
module.exports = Login;
