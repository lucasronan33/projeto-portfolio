document.addEventListener('DOMContentLoaded', () => {


  const celGaleria = document.querySelectorAll('.cel-galeria')

  celGaleria.forEach(divGaleria => {
    divGaleria.addEventListener('click', e => {

    })
  })

})

function criarSpan(tituloDoProjeto, linkImg, descricaoProjeto, linkGithub, linkProjeto) {
  const divFundoSpan = document.createElement("span");
  divFundoSpan.classList.add("span-fullscreen");

  divFundoSpan.innerHTML = `
      <div class="content-fullscreen">
        <div class="content-container">
          <h3>${tituloDoProjeto}</h3>
          <img src="${linkImg}" alt="" srcset="">

          <content>
          <div class="descricao-projeto">
            <b>Descrição do Projeto: </b>
            <p>${descricaoProjeto}</p>
          </div>

          <div class="btn-links">
            <a href="${linkGithub}" class="link-github">
              <button data-text="Ir ao GitHub"></button>
            </a>
            <a href="${linkProjeto}" class="link-projeto">
              <button data-text="Visitar Aplicação"></button>
            </a>
          </div>
          </content>
        </div>
      </div>
    `;

  document.body.appendChild(divFundoSpan);

  // fechar clicando fora do conteúdo
  divFundoSpan.addEventListener("click", (event) => {
    if (event.target === divFundoSpan) {
      divFundoSpan.remove();
    }
  });
}
