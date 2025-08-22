const CadastrarTrabalho = require('../models/CadastrarTrabalhoModel')
const Email = require('../models/EmailModel')

exports.index = async (req, res) => {
    const trabalhos = await CadastrarTrabalho.buscaTrabalhos();
    res.render("index", { trabalhos });
};

exports.sendmail = async (req, res) => {
    try {

        const email = new Email(req.body);
        email.valida()

        console.log('email: ' + email.body)
        if (email.errors.length > 0) {
            res.send(email.errors)
            return
        }

        await email.enviarEmail()

        if (email.errors.length > 0) {
            res.send(email.errors)
            return
        }
        res.render('sendmail', { email: email.body })
        return
    } catch (e) {
        console.log(e)
        res.send(e)
        return
    }
}