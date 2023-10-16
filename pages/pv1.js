import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import Videopv1 from './videopv1';
import Comentariopv1 from './comentariopv1';

const P1 = () => {
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

<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/652dc34892b09e000852d614/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/652dc34892b09e000852d614/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/652dc32afb781d0009e6bd6a/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>
    </Head>
    <div>
    <div className='video-player-container'>
    <Videopv1/>
    </div>
    <Comentariopv1/>
    <Footer />
    </div>
    </>
  );
};

export default P1;
