import React from 'react';
import Head from 'next/head';
import Footer from './footer';

const Promocao = () => {
  return (
    <>
      <Head>
        <title>Elixir Bioativo</title>
        <meta property="og:url" content="https://elixirbioativo.com/promocao"/>
        <meta name="description" content="Este é o site oficial do Elixir Bioativo" />
        <link rel="shortcut icon" href="/Icon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700;800&family=Roboto:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
      <style>{`
        
  .items-center {
    align-items: center;
  }
  
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid {
    display: grid;
  }
  
  .basis-1\/2 {
    flex-basis: 50%;
  }
  
  .flex {
    display: flex;
  }
  
  .gap-1 {
    gap: 4px;
  }
  
  .gap-2 {
    gap: 8px;
  }
  
  .gap-4 {
    gap: 16px;
  }
  
  .gap-6 {
    gap: 24px;
  }
  
  .gap-12 {
    gap: 48px;
  }
  
  .gap-24 {
    gap: 96px;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .basis-full {
    flex-basis: 100%;
  }
  
  html {
    scroll-behavior: smooth;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  body, center, dd, del, div, dt, em, footer, h1, h2, h3, h4, h5, h6, i, iframe, img, p, q, s, small, span, strike, strong, sub, sup, table, tbody, td, tr, u {
    margin: -1px 0 0 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: Roboto, sans-serif;
  }
  
  .u {
    -moz-user-select: none;
    -webkit-user-select: none;
    cursor: default;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  iframe, img, svg {
    max-width: 100%;
  }
  
  h1, h1 b, h1 span, h2, h2 b, h2 span, h3, h3 b, h3 span {
    font-family: Assistant, sans-serif;
  }
  
  a {
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }
  
  a.btn {
    font-family: Montserrat, sans-serif;
  }
  
  em span.lg, em span.md, em span.sm {
    font-style: italic;
  }
  
  @media (max-width: 600px) {
    .flex-large, .flex-small {
        margin-right: 0 !important;
        margin-bottom: 16px;
    }
  }
  
  .flexrow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .flex-large, .flex-small {
    flex-basis: 100%;
  }
  
  .flex-large:last-child, .flex-small:last-child {
    margin-right: 0 !important;
  }
  
  @media (min-width: 600px) {
    .flex-small {
        flex: 1;
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
    }
  
    .flex-small.half {
        flex: 0 0 calc(1 / 2 * 100%);
    }
  
    .flex-small.one-fifth {
        flex: 0 0 calc(1 / 5 * 100%);
    }
  
    .flex-small.two-fifths {
        flex: 0 0 calc(2 / 5 * 100%);
    }
  
    .flex-small.one-fourth {
        flex: 0 0 calc(1 / 4 * 100%);
    }
  
    .flex-small.two-fourths {
        flex: 0 0 calc(2 / 4 * 100%);
    }
  
    .flex-small.three-fourths {
        flex: 0 0 calc(3 / 4 * 100%);
    }
  
    .flex-small.one-third {
        flex: 0 0 calc(1 / 3 * 100%);
    }
  
    .flex-small.two-thirds {
        flex: 0 0 calc(2 / 3 * 100%);
    }
  }
  
  @media (min-width: 1000px) {
    .flex-large {
        flex: 1;
        margin-bottom: 0;
    }
  
    .flex-large.half {
        flex: 0 0 calc(1 / 2 * 100%);
    }
  
    .flex-large.one-fifth {
        flex: 0 0 calc(1 / 5 * 100%);
    }
  
    .flex-large.two-fifths {
        flex: 0 0 calc(2 / 5 * 100%);
    }
  
    .flex-large.one-fourth, .flex-large.two-fourths {
        flex: 0 0 calc(1 / 4 * 100%);
    }
  
    .flex-large.three-fourths {
        flex: 0 0 calc(3 / 4 * 100%);
    }
  
    .flex-large.one-third {
        flex: 0 0 calc(1 / 3 * 100%);
    }
  
    .flex-large.two-thirds {
        flex: 0 0 calc(2 / 3 * 100%);
    }
  }
  
  @media (min-width: 640px) {
    .sm\:gap-1 {
        gap: 6px;
    }
  
    .sm\:gap-2 {
        gap: 12px !important;
    }
  
    .sm\:gap-4 {
        gap: 24px;
    }
  
    .sm\:gap-6 {
        gap: 32px;
    }
  
    .sm\:gap-12 {
        gap: 64px;
    }
  
    .sm\:gap-24 {
        gap: 128px;
    }
  
    .sm\:grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  
    .sm\:grid-cols-5 {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  
    .sm\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  
    .sm\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  
    .sm\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  
    .sm\:grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  
  .zooming {
    animation: zooming 1.25s ease infinite;
  }
  
  @keyframes zooming {
    0% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(1, 1);
    }
  }
  
  /* styles.css */
  
  #division-PXbhzQ8772352 {
    position: relative;
    padding: 2vh 20vw 2vh 20vw;
    background-color: #ff0000;
  }
  
  @media (max-width: 1200px) {
    #division-PXbhzQ8772352 {
        padding: 1.5vh 15vw 1.5vh 15vw;
    }
  }
  
  @media (max-width: 640px) {
    #division-PXbhzQ8772352 {
        padding: 1.5vh 1.5vw 1.5vh 1.5vw;
    }
  }
  
  /* styles.css */
  
  .description-slfnYb8772352-element h3 {
    font-size: 2.31vw;
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: #ffffff;
    line-height: 1.1;
    font-weight: 800;
  }
  
  @media (max-width: 1200px) {
    .description-slfnYb8772352-element h3 {
        font-size: 2.80vw;
        padding-top: 0.75vh;
        padding-bottom: 0.75vh;
    }
  }
  
  @media (max-width: 640px) {
    .description-slfnYb8772352-element h3 {
        font-size: 5.60vw;
        padding-top: 0.75vh;
        padding-bottom: 0.75vh;
        text-align: center;
    }
  }
  
  
  /* styles.css */
  
  #division-RkYytd8853835 {
    position: relative;
    padding: 3vh 20vw 1vh 20vw;
    background-color: #ffffff;
    height: 2500px;
  }
  
  @media (max-width: 1200px) {
    #division-RkYytd8853835 {
        padding: 2.25vh 15vw 0.75vh 15vw;
    }
  }
  
  @media (max-width: 640px) {
    #division-RkYytd8853835 {
        padding: 1.5vh 1.5vw 0.75vh 1.5vw;

    }
  }
  
  /* styles.css */
  
  .headline-cgoCmJ8850752-element h1 {
    font-size: 2.31vw;
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 2vh;
    color: #000000;
    line-height: 1.1;
    font-weight: 700;
  }
  
  @media (max-width: 1200px) {
    .headline-cgoCmJ8850752-element h1 {
        font-size: 2.80vw;
        padding-top: 0.75vh;
        padding-bottom: 1.5vh;
    }
  }
  
  @media (max-width: 640px) {
    .headline-cgoCmJ8850752-element h1 {
        font-size: 5.60vw;
        padding-top: 0.75vh;
        padding-bottom: 2.25vh;
        text-align: center;
    }
  }
  
  /* styles.css */
  
  .text-HWdRgx6211866-element p {
    font-size: 1.65vw;
    text-align: left;
    padding-top: 2vh;
    padding-bottom: 2vh;
    color: #000000;
    line-height: 1.2;
    font-weight: 800;
  }
  
  @media (max-width: 1200px) {
    .text-HWdRgx6211866-element p {
        font-size: 2.50vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
    }
  }
  
  @media (max-width: 640px) {
    .text-HWdRgx6211866-element p {
        font-size: 4.00vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
        text-align: left;
    }
  }
  
  /* styles.css */
  
  .text-hRdGJN5870680-element p {
    font-size: 1.65vw;
    text-align: left;
    padding-top: 2vh;
    padding-bottom: 2vh;
    color: #000000;
    line-height: 1.2;
    font-weight: 500;
  }
  
  @media (max-width: 1200px) {
    .text-hRdGJN5870680-element p {
        font-size: 2.50vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
    }
  }
  
  @media (max-width: 640px) {
    .text-hRdGJN5870680-element p {
        font-size: 4.00vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
        text-align: left;
    }
  }
  
  /* styles.css */
  
  .text-CbuIvs4943101-element p {
    font-size: 1.65vw;
    text-align: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
    color: #000000;
    line-height: 1.2;
    font-weight: 500;
  }
  
  @media (max-width: 1200px) {
    .text-CbuIvs4943101-element p {
        font-size: 2.50vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
    }
  }
  
  @media (max-width: 640px) {
    .text-CbuIvs4943101-element p {
        font-size: 4.38vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
        text-align: center;
    }
  }
  
  /* styles.css */
  
  .text-xdwFvj5681405-element p {
    font-size: 1.65vw;
    text-align: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
    color: #000000;
    line-height: 1.2;
    font-weight: 500;
  }
  
  @media (max-width: 1200px) {
    .text-xdwFvj5681405-element p {
        font-size: 2.50vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
    }
  }
  
  @media (max-width: 640px) {
    .text-xdwFvj5681405-element p {
        font-size: 4.00vw;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;
        text-align: center;
    }
  }
  
  /* styles.css */
  
  a.button-BcKPHv6494987-element {
    background-color: #17ff00;
    border-radius: 12px;
    border: 2px solid #000000;
    color: #000000;
    padding: 16px 32px 16px 32px;
    font-weight: 600;
    display: block;
    width: fit-content;
    text-align: center;
    margin: 2vh auto 2vh auto;
    font-size: 1.65vw;
    box-sizing: border-box;
    max-width: 100%;
  }
  
  @media (max-width: 1200px) {
    a.button-BcKPHv6494987-element {
        font-size: 2.13vw;
        margin: 1.32vh auto 1.5vh auto;
    }
  }
  
  @media (max-width: 640px) {
    a.button-BcKPHv6494987-element {
        font-size: 3.94vw;
        margin: 1vh auto 1vh auto;
    }
  }
  
  
  
  .text-bPXCSD5180743-element p {
      font-size: 1.65vw;
      text-align: left;
      padding-top: 2vh;
      padding-bottom: 2vh;
      color: #000000;
      line-height: 1.2;
      font-weight: 400;
  }
  
  @media (max-width: 1200px) {
      .text-bPXCSD5180743-element p {
          font-size: 2.50vw;
          padding-top: 1.5vh;
          padding-bottom: 1.5vh;
      }
  }
  
  @media (max-width: 640px) {
      .text-bPXCSD5180743-element p {
          font-size: 4.38vw;
          padding-top: 1.5vh;
          padding-bottom: 1.5vh;
          text-align: left;
      }
  }
  
  .button-gLyiJR6028490-element a.button-gLyiJR6028490-element {
      background-color: #17ff00;
      border-radius: 12px;
      border: 2px solid #000000;
      color: #000000;
      padding: 16px 32px 16px 32px;
      font-weight: 600;
      display: block;
      width: fit-content;
      text-align: center;
      margin: 2vh auto 2vh auto;
      font-size: 1.65vw;
      box-sizing: border-box;
      max-width: 100%;
  }
  
  @media (max-width: 1200px) {
      .button-gLyiJR6028490-element a.button-gLyiJR6028490-element {
          font-size: 2.13vw;
          margin: 1.32vh auto 1.5vh auto;
      }
  }
  
  @media (max-width: 640px) {
      .button-gLyiJR6028490-element a.button-gLyiJR6028490-element {
          font-size: 3.94vw;
          margin: 1vh auto 1vh auto;
      }
  }
  
  .division-hrLNal6711176__wrapper #division-hrLNal6711176 {
      position: relative;
      padding: 3vh 20vw 1vh 20vw;
      background-color: #ffffff;
  }
  
  @media (max-width: 1200px) {
      .division-hrLNal6711176__wrapper #division-hrLNal6711176 {
          padding: 2.25vh 15vw 0.75vh 15vw;
      }
  }
  
  @media (max-width: 640px) {
      .division-hrLNal6711176__wrapper #division-hrLNal6711176 {
          padding: 1.5vh 1.5vw 0.75vh 1.5vw;
      }
  }
  
  .division-CRpNbe0176061__wrapper #division-CRpNbe0176061 {
      position: relative;
      padding: 3vh 20vw 10vh 20vw;
      background-color: #ffffff;
  }
  
  @media (max-width: 1200px) {
      .division-CRpNbe0176061__wrapper #division-CRpNbe0176061 {
          padding: 2.25vh 15vw 7.5vh 15vw;
      }
  }
  
  @media (max-width: 640px) {
      .division-CRpNbe0176061__wrapper #division-CRpNbe0176061 {
          padding: 1.5vh 1.5vw 7.5vh 1.5vw;
      }
  }
  
  .text-RAAabp0176061-element p {
      font-size: 1.65vw;
      text-align: left;
      padding-top: 2vh;
      padding-bottom: 2vh;
      color: #000000;
      line-height: 1.2;
      font-weight: 500;
  }
  
  @media (max-width: 1200px) {
      .text-RAAabp0176061-element p {
          font-size: 2.50vw;
          padding-top: 1.5vh;
          padding-bottom: 1.5vh;
      }
  }
  
  @media (max-width: 640px) {
      .text-RAAabp0176061-element p {
          font-size: 4.38vw;
          padding-top: 1.5vh;
          padding-bottom: 1.5vh;
          text-align: left;
      }
  }
  
  .division-YRyjkr7253746__wrapper #division-YRyjkr7253746 {
      position: relative;
      padding: 3vh 20vw 1vh 20vw;
      background-color: #ffffff;
  }
  
  @media (max-width: 1200px) {
      .division-YRyjkr7253746__wrapper #division-YRyjkr7253746 {
          padding: 2.25vh 15vw 0.75vh 15vw;
      }
  }
  
  @media (max-width: 640px) {
      .division-YRyjkr7253746__wrapper #division-YRyjkr7253746 {
          padding: 1.5vh 1.5vw 0.75vh 1.5vw;
      }
  }
  
  .footer-wSjtSp7253746-element {
      text-align: center;
      font-size: 1.20vw;
      color: #000000;
  }
  
  .footer-wSjtSp7253746-element a {
      padding: 0 !important;
      color: #000000 !important;
  }
  
  @media (max-width: 1200px) {
      .footer-wSjtSp7253746-element {
          text-align: center;
          font-size: 1.95vw;
          color: #000000;
      }
  }
  
  @media (max-width: 640px) {
      .footer-wSjtSp7253746-element {
          text-align: center;
          font-size: 3.30vw;
          color: #000000;
      }
  }
  
      `}</style>
        <div className="fundoback">
          <div className="description-slfnYb8772352-element">
            <h3>
              <span style={{ backgroundColor: '#22ff00', color: '#000000' }}>
                ATENÇÃO:
              </span>
              &nbsp;NÃO FECHE ESTA PÁGINA
            </h3>
          </div>
        </div>
        <div className="division-RkYytd8853835__wrapper">
          <div id="division-RkYytd8853835" className="QvBtcQ5665127">
            <div className="headline-cgoCmJ8850752">
              <div className="headline-cgoCmJ8850752-element headline">
                <h1>
                  VOCÊ ACABOU DE&nbsp;
                  <span style={{ backgroundColor: '#22ff00' }}>GANHAR R$50,00</span>!
                </h1>
              </div>
            </div>
            <div>
                <p>
                  Gostaria de receber um&nbsp;<u>desconto imperdível</u>&nbsp;para ter acesso às&nbsp;
                  <span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>&nbsp;e descobrir as receitas secretas capazes de fazer seu metabolismo acelerar e queimar esse peso que você tanto sonha em perder?
                </p>
            </div>
            <div>
                <p>
                  <b>Então dá só uma olhada...</b><br /><br />
                  <span style={{ fontStyle: 'italic' }}>Provavelmente você só verá esta página&nbsp;<b>UMA ÚNICA VEZ</b>&nbsp;na sua vida..</span><br /><br />
                  Você foi uma das mulheres&nbsp;<b>SELECIONADAS</b>&nbsp;para ter acesso às&nbsp;
                  <span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>&nbsp;com uma oportunidade única e exclusiva!<br /><br />
                  A cada 100 pessoas que caem na nossa página, sorteamos&nbsp;<b>UMA</b>&nbsp;para ganhar um&nbsp;<b>DESCONTO EXCLUSIVO</b>...<br /><br />
                  <span style={{ fontStyle: 'italic' }}>Este desconto só é válido agora, neste exato segundo!</span><br /><br />
                  Você tem a oportunidade agora mesmo de&nbsp;<b>finalmente conseguir emagrecer</b>...
                </p>
            </div>
            <div>
                <p>
                  <b>Antes por&nbsp;<span style={{ color: '#ff0000' }}><del>R$ 147,00</del></span>, agora por apenas&nbsp;<span style={{ backgroundColor: '#ffff00' }}>R$ 97,00</span></b><br /><br />
                  <b>34% DE DESCONTO (<span style={{ backgroundColor: '#ffff00' }}>-R$50.00</span>)</b>&nbsp;para você ter acesso às&nbsp;
                  <span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>!!
                </p>
            </div>
            <div>
                <p>
                  Basta&nbsp;<b>clicar no botão abaixo</b>:
                </p>
            </div>
            <div className="button-BcKPHv6494987">
              <a href="https://pay.hotmart.com/N85479244N?off=jjank6uv&checkoutMode=10&sck=back97" target="_self" className="btn button-BcKPHv6494987-element zooming">
                QUERO GARANTIR ESSA CONDIÇÃO ESPECIAL
              </a>
            </div>
            <div>
                <p>
                  <b>Hoje, você desejaria...</b><br /><br />
                  <span style={{ fontStyle: 'italic' }}>...que a sua autoestima estivesse maior...</span><br /><br />
                  <span style={{ fontStyle: 'italic' }}>...que a sua saúde estivesse melhor e sem risco de ter que correr para o hospital...</span><br /><br />
                  <span style={{ fontStyle: 'italic' }}>...que as pessoas ao seu redor te elogiassem pela sua beleza e pelo seu corpo magro?</span><br /><br />
                  <b>ENTÃO...</b><br /><br />
                  O&nbsp;<span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>&nbsp;é para você,&nbsp;<b>MULHER</b>...<br /><br />
                  Um programa criado por um dos maiores&nbsp;<b>cientistas</b>&nbsp;especializados em emagrecimento do mundo, onde você vai descobrir as fórmulas caseiras secretas feitas com&nbsp;
                  <span style={{ color: '#ff0000' }}><b>INGREDIENTES NATURAIS</b></span>..<br /><br />
                  A única capaz de fazer você&nbsp;<u><b>emagrecer de forma natural</b></u>...<br /><br />
                  E se tornar uma mulher mais&nbsp;<u><b>magra, bonita e feliz</b></u>...<br /><br />
                  <b>A DECISÃO ESTÁ NAS SUAS MÃOS!</b>&nbsp;<br /><br />
                  Decisão que pode salvá-la da terrível obesidade que está assolando a sua geração...<br /><br />
                  Basta CLICAR NO BOTÃO ABAIXO agora mesmo e seja bem-vinda às&nbsp;
                  <span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>
                </p>
            </div>
            <div className="button-BcKPHv6494987">
              <a href="https://pay.hotmart.com/N85479244N?off=jjank6uv&checkoutMode=10&sck=back97" target="_self" className="btn button-BcKPHv6494987-element zooming">
                QUERO GARANTIR ESSA CONDIÇÃO ESPECIAL
              </a>
            </div>
               <div>
                <p>
                  <span style={{ backgroundColor: '#ffff00' }}><b>AVISO:</b></span><br /><br />
                  Você está coberta por nossa&nbsp;<b>GARANTIA BLINDADA</b>...<br /><br />
                  Se o programa não gerar resultados rápidos e efetivos na sua vida, ou se, por qualquer motivo, você não gostar das&nbsp;
                  <span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>...<br /><br />
                  Basta entrar em contato com nossa equipe, por e-mail ou whatsapp, que você receberá 100% do valor investido de forma rápida e sem nenhuma burocracia!<br /><br />
                  Aproveite nosso desconto especial de&nbsp;<span style={{ color: '#ff0000' }}><del>R$147,00</del></span>… agora por apenas&nbsp;<span style={{ backgroundColor: '#ffff00' }}><b>R$ 97,00</b></span><br />
                </p>
            </div>
            <div className="button-BcKPHv6494987">
              <a href="https://pay.hotmart.com/N85479244N?off=jjank6uv&checkoutMode=10&sck=back97" target="_self" className="btn button-BcKPHv6494987-element zooming">
                QUERO GARANTIR ESSA CONDIÇÃO ESPECIAL
              </a>
            </div>
            <div>
                <p>
                  Teste durante 30 dias&nbsp;<b>sem nenhum compromisso</b>&nbsp;e veja o poder de tudo o que você vai aprender no&nbsp;
                  <span style={{ color: '#ff0000' }}><b>Elixir Bioativo</b></span>...<br /><br />
                  <b>Está bem, como garanto minha condição especial?</b><br /><br />
                  <span style={{ backgroundColor: '#ffff00' }}><b>Passo 1</b></span>: Clique no botão verde acima e preencha seus dados nos campos corretos<br /><br />
                  <span style={{ backgroundColor: '#ffff00' }}><b>Passo 2</b></span>: Quando concluir a compra, você receberá o acesso pelo email cadastrado<br /><br />
                  <span style={{ backgroundColor: '#ffff00' }}><b>Passo 3</b></span>: Acesse a Elixir Bioativo e transforme a sua vida<br /><br />
                  <span style={{ fontStyle: 'italic' }}>Atenciosamente, Equipe Elixir Bioativo...</span><br />
                </p>
              </div>
        </div>
        </div>
        <Footer />
        </div>
    </>
  );
};

export default Promocao;
