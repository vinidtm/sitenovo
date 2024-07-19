import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Paginainicial = () => {
  return (
    <>
      <Head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            padding-top: 70px; /* To account for the fixed header */
          }

          .header {
            background-color: red;
            padding-top: 20px;
            padding-bottom: 5px;
            text-align: center;
            color: white;
            font-size: 22px; /* Adjusted font size */
            width: 100vw; /* Ensure it spans the full viewport width */
            position: absolute; /* Position absolute to ensure full width */
            top: 0; /* Align it to the top */
            left: 0; /* Align it to the left edge */
            box-sizing: border-box; /* Include padding in width calculation */
            z-index: 1000; /* Ensure it appears above other elements */
          }

          .main {
            background-color: #f8f8f8;
            text-align: left;
            margin-top: 70px;
          }

          .article h2 {
            color: #333;
            font-size: 2em; /* Adjusted font size */
            margin-bottom: 20px;
          }

          .article p {
            font-size: 1.2em; /* Increased font size */
            line-height: 1.6; /* Added line-height for better readability */
          }

          .images {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
          }

          .imageWrapper {
            padding: 5px;
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 20px 0;
            width: 100%;
          }

          .imageWrapper img {
            width: 100%;
            height: auto;
          }

          .author {
            color: #777;
            font-size: 1.1em; /* Increased font size */
            margin-bottom: 20px;
          }

          .subArticle {
            border-top: 1px solid #ddd;
            padding-top: 20px;
            margin-top: 20px;
          }

          .subArticle h3 {
            color: #333;
            font-size: 1.7em; /* Increased font size */
          }

          blockquote {
            background-color: #eaeaea;
            border-left: 4px solid #ccc;
            margin: 20px 0;
            padding: 10px 20px;
            color: #555;
            font-size: 1.3em; /* Increased font size */
          }

          .buttonWrapper {
            text-align: center;
            margin-top: 20px;
          }

          .button {
            background-color: red;
            color: white;
            padding: 14px 28px; /* Increased padding */
            text-decoration: none;
            border-radius: 5px;
            animation: pulse 1.5s infinite;
            display: inline-block;
            font-size: 1.1em; /* Increased font size */
            font-weight: bold; /* Set font weight to bold */
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          /* Mobile adjustments */
          @media (max-width: 600px) {
            .header {
              font-size: 20px; /* Adjusted font size */
              padding-top: 15px;
              padding-bottom: 10px;
            }

            .container {
              padding: 10px;
              padding-top: 60px;
            }

            .article h2 {
              font-size: 1.7em; /* Adjusted font size */
            }

            .article p {
              font-size: 1.1em; /* Increased font size */
            }

            .author {
              font-size: 1em; /* Adjusted font size */
            }

            blockquote {
              font-size: 1.1em; /* Increased font size */
              padding: 10px;
            }

            .button {
              padding: 12px 24px; /* Increased padding */
              font-size: 1em; /* Increased font size */
              font-weight: bold; /* Set font weight to bold */
            }

            .images, .imageWrapper {
              flex-direction: column;
              align-items: center;
              gap: 5px;
            }

            .imageWrapper {
              padding: 5px 0;
            }
          }
        `}</style>
      </Head>
      <div className="container">
        <header className="header">
          <h1>SAÚDE</h1>
        </header>
        <main className="main">
          <section className="article">
            <h2>
              Ozempic Natural ou Receita Bariátrica? Veja como as famosas abusam dessa bebida de limão para emagrecer MUITO!
            </h2>
            <div className="images">
              <div className="imageWrapper">
                <Image src="/image1.webp" alt="Image 1" width={1024} height={576} layout="responsive" />
              </div>
            </div>
            <p>
              O Médico nutrólogo Gustavo Fedrizzi gravou um vídeo explicando como fazer em casa essa receita de Ozempic natural a partir da fórmula original. Veja abaixo como fazer:
            </p>
            <p className="author">
              Por Samuel Barbosa Chetto <br />
              Atualizado há 2 horas <br />
              Terça-feira, 16 de Julho de 2024
            </p>
            <section className="subArticle">
              <div className="imageWrapper">
                <Image src="/image2.jpg" alt="Image 2" width={1024} height={701} layout="responsive" />
              </div>
              <p>
              <strong>A Bebida Bariátrica do Limão,</strong> conhecida como o Ozempic Natural, chegou com tudo e está sendo apontado pelos maiores canais de notícia como uma <strong>“Cirurgia Bariátrica” natural</strong> e sem efeitos colaterais.
              </p>
              <p>
                Ocasionando emagrecimentos rápidos e extremos, como o caso da Cantora Maiara
              </p>
              <div className="images">
                <div className="imageWrapper">
                  <Image src="/image3.webp" alt="Image 3" width={1024} height={576} layout="responsive" />
                </div>
              </div>
              <blockquote>
                “Eu nunca vi nada parecido com isso. Nenhuma dieta, treino ou jejum tem esse efeito <strong>foi 15kg que desceu pelo ralo em 30 dias</strong>, sem custos e sem efeitos colaterais(...) é uma revolução no mundo da nutrição.”
              </blockquote>
              <p>
                Mas por questões de segurança, o nutricionista está <strong>revelando a receita em um vídeo privado.</strong>
              </p>
              <div className="buttonWrapper">
                <a href="https://elixirbioativo.com/" className="button">
                  ACESSE O VÍDEO E APRENDA A RECEITA
                </a>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Paginainicial;
