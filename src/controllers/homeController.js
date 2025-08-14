const Home = require("../models/HomeModel");

exports.index =async (req, res) => {
    const trabalhos = await Home.buscaTrabalhos();
    res.render("index", { trabalhos });
};

exports.cadastro = async (req, res) => {
    const trabalhos = await Home.buscaTrabalhos();
    res.render("cadastroTrabalhos", { trabalhos });
};

exports.sendTrabalho = async (req, res) => {
    try {
        const cadastro = new Home(req.body);

        await cadastro.cadastrar();

        if (cadastro.errors.length > 0) {
            console.log(cadastro.errors);
            res.send(cadastro.errors);
            return;
        }

        res.redirect("cadastrarTrabalho");
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};
