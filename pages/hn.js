import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Comentariohn from './comentariohn';
import Videohn from './videohn';
import AoVivoBadge from './AoVivoBadge';

const Hn = () => {
  return (
    <>
    <Head>
    <title>Saúde Perfeita</title>
    <link rel='shortcut icon' href='/Icon.jpg' />
    <script>
          {`
            var urlBackRedirect = 'https://saudeperfeitahoje.online/promocaopv1';
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
<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/652fec117345460009191c09/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/652fec117345460009191c09/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/65245eae588221000a0fba1c/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>
    </Head>
    <div>
    <div className='cor-fundo-hn'>
    <AoVivoBadge/>
    <div className='video-player-container'>
    <Videohn/>
    </div>
    <Comentariohn/>
    </div>    
    <Footer />
    </div>
    </>
  );
};

export default Hn;
