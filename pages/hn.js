import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Comentariohn from './comentariohn';
import Videohn from './videohn';

const Hn = () => {
  return (
    <>
    <Head>
    <title>EpiFórmula</title>
    <link rel='shortcut icon' href='/Icon.jpg' />
    <script>
          {`
            function backfrio(){
              var back_redirect_back_link = 'https://epigalocatequina.online/promocaopv1';
              history['pushState']({}, '', location['href']);
              history['pushState']({}, '', location['href']);
              window['onpopstate'] = function() {
              setTimeout(function() {
                  location['href'] = back_redirect_back_link
              }, 1)
              }
          }
          setTimeout("backfrio()", 1200000); //1 minuto em ms
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
    <div className='video-player-container'>
    <Videohn/>
    <Comentariohn/>
    </div>    
    <Footer />
    </div>
    </>
  );
};

export default Hn;
