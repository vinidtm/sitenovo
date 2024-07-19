import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Video01 from './video01';
import doutorfoto from './fotos/DrMarcoscirculo.png';
import Image from 'next/image';
import { Helmet } from "react-helmet"


const Home = () => {
  return (
    <>
    <Head>
    <title>Epigalocatequina - Fórmula A.M.B</title>
    <link rel='shortcut icon' href='/Icon.png' />
    <script>
          {`
            var urlBackRedirect = 'https://epigalocatequina.online//promocao';
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

<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/ab-test/655fadec01dd3c002efe655b/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/655fadec01dd3c002efe655b/thumbnail.jpg" as="image"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>

    </Head>
    <div>
    <div className='video-player-container'>
    <div dangerouslySetInnerHTML={{ __html: '<script type="text/javascript" id="scr_669a9192176782000a9f7bd2"></script>' }} />
      <Helmet>
      <script type="text/javascript">var s=document.createElement("script");s.src="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/ab-test/669a9192176782000a9f7bd2/player.js",s.async=!0,document.head.appendChild(s);</script>
      </Helmet>
    </div>
    <Footer />
    </div>
    </>
  );
};

export default Home;
