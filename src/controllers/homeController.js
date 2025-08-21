exports.index = async (req, res) => {
    const trabalhos = await Home.buscaTrabalhos();
    res.render("index", { trabalhos });
};