exports.loginCadastrarTrabalhos = async (req, res, next) => {
    if (!req.session.user) {
        res.send('Necessário fazer login')
        return
    }
    next()
}