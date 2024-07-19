import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import { Helmet } from "react-helmet";

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
        <div className='headline'>
          Revelamos a fórmula do Ozempic Natural, já são mais de <span style={{ fontWeight: 'bold', color: 'white' }}>13.537</span> mulheres que visualizaram o vídeo abaixo ↓
        </div>
        <div className='video-player-container'>
          <div dangerouslySetInnerHTML={{ __html: '<script type="text/javascript" id="scr_669a9192176782000a9f7bd2"></script>' }} />
          <Helmet>
            <script type="text/javascript">var s=document.createElement("script");s.src="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/ab-test/669a9192176782000a9f7bd2/player.js",s.async=!0,document.head.appendChild(s);</script>
          </Helmet>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .headline {
          background-color: red;
          padding: 10px;
          text-align: center;
          color: yellow;
          font-size: 18px;
          width: 100vw; /* Ensure it spans the full viewport width */
          position: absolute; /* Position absolute to ensure full width */
          top: 0; /* Align it to the top */
          left: 0; /* Align it to the left edge */
          box-sizing: border-box; /* Include padding in width calculation */
          z-index: 1000; /* Ensure it appears above other elements */
        }

        .video-player-container {
          margin-top: 60px; /* Adjust this to provide spacing between headline and content below */
        }

        @media (min-width: 768px) {
          .headline {
            width: 100vw; /* Ensure it spans the full viewport width */
            margin: 0; /* Remove margin adjustments */
          }
        }
      `}</style>
    </>
  );
};

export default Home;
