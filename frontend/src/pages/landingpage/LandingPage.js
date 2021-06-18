import React from "react";
import { Link } from "react-router-dom";

import "./landingpage.css";

export default class landingpage extends React.Component {
  render() {
    return (
      <div className="tudo">
        <section id="bemvindo">
          <div className="divimg"></div>
          <div class="bemvindo-container fade-in-text">
            <h1 class="mb-4 pb-0">
              Bem Vindo ao<span> mapa </span>interativo da{" "}
              <span>Fundação Luiza Andaluz </span>Centro de Conhecimento
            </h1>
            <Link to="/mapa">
              <a class="play-btn mb-4"></a>
            </Link>
            <p class="mb-4 pb-0">
              <span style={{ color: "#FFB81D" }}>Clique</span> para ir para o
              Mapa!
            </p>
            <br />
            <p class="mb-4 pb-0 ">
              <span style={{ color: "#FFB81D" }}>Novo no website? </span>Deslize
              para baixo ou clique{" "}
              <a href="#navegar">
                <span style={{ color: "#FFB81D" }}>Aqui</span>
              </a>{" "}
              para descobrir como navegar o mapa.
            </p>
          </div>
        </section>

        <section id="navegar">
          <div className="divimg"> </div>
          <div class="container" data-aos="fade-up">
            <div className="escurecido">
              <div class="row">
                <div class="col-lg-12 espacamento">
                  <h1>
                    Como navegar o nosso{" "}
                    <span style={{ color: "#FFB81D" }}>Mapa Interativo</span>?
                  </h1>
                  <p>
                    Pode consultar as diferentes histórias clicando nos pontos
                    do mapa. Cada ponto correspondente a localização da
                    história. Clique para ver detalhes de uma história.
                  </p>
                </div>
                <div class="col-lg-6">
                  <h2>
                    Registar a sua{" "}
                    <span style={{ color: "#FFB81D" }}>História</span>
                  </h2>
                  <p>
                    Para registar a sua história,{" "}
                    <span style={{ color: "#FFB81D" }}>
                      clique no botão "adicionar história"
                    </span>{" "}
                    no canto superior direito. De seguida,{" "}
                    <span style={{ color: "#FFB81D" }}>
                      preencha o formulário
                    </span>{" "}
                    com os seus dados e histórias. Pode colocar{" "}
                    <span style={{ color: "#FFB81D" }}>
                      fotografias ou vídeos
                    </span>{" "}
                    que tenha das suas histórias ou relacionados.{" "}
                    <span style={{ color: "#FFB81D" }}>Contribua</span> para
                    esta memorabilia da{" "}
                    <span style={{ color: "#FFB81D" }}>
                      Fundação Luiza Andaluz
                    </span>
                    . Ajude-nos a{" "}
                    <span style={{ color: "#FFB81D" }}>imortalizar</span> aqui
                    as suas histórias e experiências!
                  </p>
                </div>
                <div class="col-lg-6">
                  <h2>
                    Alguma <span style={{ color: "#FFB81D" }}>dúvida</span>?
                  </h2>

                  <p>
                    Gosta do nosso site? Deixe o seu feedback! Ideias e
                    sugestões também são bem vindas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
