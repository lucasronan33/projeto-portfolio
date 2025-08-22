require('dotenv')
const validator = require('validator')
const nodemailer = require('nodemailer')

class Email {
    constructor(body) {
        this.body = body
        this.email = null
        this.errors = []
    }

    async enviarEmail() {
        this.valida()

        if (this.errors.length > 0) return


        const mailOptions = {
            from: `${this.body.nome} <${this.body.email}>`,
            to: process.env.SMTP_TO,
            subject: this.body.assunto,
            text: this.body.mensagem,
        }

        try {
            const transporter = this.criarTransporte()
            const info = await transporter.sendMail(mailOptions)
            return info
        } catch (error) {
            console.log(error)
            this.errors.push(error)
        }

    }

    valida() {
        this.cleanUp()

        console.log('this.body: ' + this.body)

        if (Object.values(this.body).some(valor => valor === '')) {
            this.errors.push('Preencha todos os campos do formulário')
            return
        }

        if (!validator.isEmail(this.body.email)) {
            this.errors.push('Email inserido é inválido!')
            return
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            assunto: this.body.assunto,
            mensagem: this.body.mensagem,
        }
    }

    criarTransporte() {

        // Create a transporter for SMTP
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

    }


}

module.exports = Email