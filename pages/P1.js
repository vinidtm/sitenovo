import React from 'react';
import Footer from './footer';
import Head from 'next/head';

const P1 = () => {
  return (
    <>
    <Head>
    <title>Elixir Bioativo</title>
    <meta name="description" content="Está é o site oficial do Elixir Bioativo" />
    <link rel='shortcut icon' href='/Icon.jpg' />
    <script>
          {`
            var urlBackRedirect = 'http://localhost:3000/termos_de_uso';
            urlBackRedirect = urlBackRedirect.trim() +
                (urlBackRedirect.indexOf("?") > 0 ? '&' : '?') +
                document.location.search.replace('?', '').toString();
            history.pushState({}, "", location.href);
            history.pushState({}, "", location.href);
            window.onpopstate = function () {
                setTimeout(function () {
                    location.href = urlBackRedirect;
                }, 1);
            };
          `}
        </script>    
    </Head>
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao meu site Next.js!</p>
    <Footer/>
    </div>
    </>
  );
};

export default P1;
