import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Video01 from './video01';
import doutorfoto from './fotos/DrMarcoscirculo.png';
import Image from 'next/image';


const Home = () => {
  return (
    <>
    <Head>
    <title>Home - Saúde Perfeita</title>
    <link rel='shortcut icon' href='/Icon.jpg' />
    <script>
          {`
            var urlBackRedirect = 'https://saudeperfeitahoje.online/promocao';
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
<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64fb816f909f89000a902842/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64fb816f909f89000a902842/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/64a04c94580477000a850ea4/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>
    </Head>
    <div>
    <div className='video-player-container'>
    <Video01/>
    </div>
    <div className='doutor'>
  <Image
    src={doutorfoto}
    alt='Dr. Marcos'
    width={250}
    height={250}
  />
  <div className='texto-doutor'>
    <h2>Dr. Marcos Camargo </h2>
    <p> Cientista e pesquisador especialista no emagrecimento natural a mais de 10 anos, profissional dedicado e que já transformou a vida de milhares de pessoas que sofriam constantemente para perder peso. </p>
    <p> Com uma historia pessoal de superação enfrentando e vencendo sua própria luta contra o sobrepeso, ele compreende profundamente a batalha contra a balança e divulga como passar por isso de forma natural e saudável.</p>   </div>
        </div>
    <Footer />
    </div>
    </>
  );
};

export default Home;
