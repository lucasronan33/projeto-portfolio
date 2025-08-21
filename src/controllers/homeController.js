const CadastrarTrabalho = require('../models/CadastrarTrabalhoModel')

exports.index = async (req, res) => {
    const trabalhos = await CadastrarTrabalho.buscaTrabalhos();
    res.render("index", { trabalhos });
};