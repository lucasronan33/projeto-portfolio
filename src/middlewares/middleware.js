exports.middlewareLogin = async (req, res, next) => {
    if (!req.session.user) {
        res.send('Inicie uma sessão para acessar "/cadastrarTrabalhos"  <a href="/login">Login</a>')
        return
    }
    next()
}