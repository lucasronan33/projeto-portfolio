const CadastrarTrabalho = require("../models/CadastrarTrabalhoModel");

exports.cadastro = async (req, res) => {
    const trabalhos = await CadastrarTrabalho.buscaTrabalhos();
    res.render("cadastroTrabalhos", { trabalhos });
};

exports.sendTrabalho = async (req, res) => {
    try {
        const cadastro = new CadastrarTrabalho(req.body);

        await cadastro.cadastrar();

        if (cadastro.errors.length > 0) {
            console.log(cadastro.errors);
            res.send(cadastro.errors);
            return;
        }

        res.redirect("/cadastrarTrabalho");
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};
