document.addEventListener('DOMContentLoaded', openTrabalho)

export function openTrabalho() {
  document.querySelectorAll(".cel-galeria").forEach(div => {
    div.addEventListener("click", () => {
      const nome = div.dataset.nome;
      const img = div.dataset.img;
      const descricao = div.dataset.descricao;
      const github = div.dataset.linkgithub;
      const projeto = div.dataset.linkprojeto;

      criarSpan(nome, img, descricao, github, projeto);
    });
  });



  const celGaleria = document.querySelectorAll('.cel-galeria')

  celGaleria.forEach(divGaleria => {
    divGaleria.addEventListener('click', e => {

    })
  })

  function criarSpan(tituloDoProjeto, linkImg, descricaoProjeto, linkGithub, linkProjeto) {
    const divFundoSpan = document.createElement("span");
    divFundoSpan.classList.add("span-fullscreen");

    divFundoSpan.innerHTML = `
      <div class="content-fullscreen">

      <div class="close">
        <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.7367 1.86182L54.5033 3.63037L31.1136 26.9995L54.5023 50.3696L50.9691 53.9067L27.5765 30.5337L4.18494 53.9067L0.651733 50.3696L24.0394 26.9995L0.650757 3.63037L2.41736 1.86182L4.18494 0.0932617L27.5765 23.4653L50.9691 0.0932617L52.7367 1.86182Z" fill="white" />
        </svg>
      </div>

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
    document.body.classList.add('no-scroll')

    // fechar clicando fora do conteúdo
    divFundoSpan.addEventListener("click", (event) => {
      if (event.target === divFundoSpan) {
        divFundoSpan.remove();
        document.body.classList.remove('no-scroll')
      }
    });

    divFundoSpan.querySelector('.close').addEventListener('click', () => {

      divFundoSpan.remove();
      document.body.classList.remove('no-scroll')
    })
  }
}