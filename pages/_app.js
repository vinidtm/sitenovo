import Head from 'next/head';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
    return <>
    <Head>
        {/* Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MF42VBT');`,
            }}
          />
          {/* End Google Tag Manager */}
          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-KK3W3K20DY`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-KK3W3K20DY', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* Hotmart Launcher */}
          <script
            id='hotmart_launcher_script'
            dangerouslySetInnerHTML={{
              __html: `
                (function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
                (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
                e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
                })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');

                hot('account','70ee6891-41eb-3bdb-bf7e-d8dae21f2c70');
              `,
            }}
          />
          {/* End Hotmart Launcher */}

    </Head>
    <Component {...pageProps}/>
        {/* Google Tag Manager (noscript) */}
        <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF42VBT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
    </>
}