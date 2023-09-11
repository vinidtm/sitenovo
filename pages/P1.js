import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Video01 from './video01';


const P1 = () => {
  return (
    <>
    <Head>
    <title>Saúde Perfeita</title>
    <link rel='shortcut icon' href='/Icon.jpg' />
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
    <p className='attention'>
    ATENÇÃO: ASSISTA O VÍDEO ANTES QUE SAIA DO AR </p>
    </div>

    
    <Footer />
    </div>
    </>
  );
};

export default P1;
