const Login = require('../models/LoginModel')
exports.index = (req, res) => {
    res.render('loginCadastroTrabalhos')
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login()

        console.log('Login: ', login)

        if (login.errors.length > 0) {
            console.log(login.errors)
            return res.send('Erro: ' + login.errors + '<br><a href="/login">Login</a>')
        }

        req.session.user = login.user
        console.log('req.session.user: ', req.session.user)

        req.session.save(() => { return res.redirect('/cadastrarTrabalho') })
    } catch (error) {
        console.log('Error: ', error)
        return res.send('Error: ' + error)
    }

}
