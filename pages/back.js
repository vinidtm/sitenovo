import React from 'react';
import Footer from './footer';
import Head from 'next/head';

const promocao = () => {
  return (
    <>
    <Head>
    <title>Promoção - Elixir Bioativo</title>
    <meta name="description" content="Está é o site oficial do Elixir Bioativo" />
    <link rel='shortcut icon' href='/Icon.jpg' />
    </Head>

    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao meu site Next.js!</p>

    <Footer/>
    </div>
    </>
  );
};

export default promocao;


