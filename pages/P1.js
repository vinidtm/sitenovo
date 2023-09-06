import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Video01 from './video01';
import Comment from './Comments';


const P1 = () => {
  return (
    <>
    <Head>
    <title>Elixir Bioativo</title>
    <meta name="description" content="Está é o site oficial do Elixir Bioativo" />
    <link rel='shortcut icon' href='/Icon.jpg' />
    <script>
          {`
            var urlBackRedirect = 'https://elixirbioativo.com/promocao';
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
<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64e71e94e1c7560009bcf18c/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64e71e94e1c7560009bcf18c/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/64e6b5497b941e0009cb566a/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>   
    </Head>
    <div>
    <div className='video-player-container'>
    <Video01/>
    <p className='attention'>
    ATENÇÃO: ASSISTA O VÍDEO ANTES QUE SAIA DO AR </p>
    </div>
    <div className='comments-container'>
    <Comment />
    </div>  
    <Footer />
    </div>
    </>
  );
};

export default P1;
