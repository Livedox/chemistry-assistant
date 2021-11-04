import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script async src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.GOOGLE_TAG_CODE}></script>
        <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GOOGLE_TAG_CODE}');`}} />
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym("${process.env.YANDEX_CODE}", "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
          });`}} />

        </Head>
        <body>
          <noscript><div><img src={"https://mc.yandex.ru/watch/" + process.env.YANDEX_CODE} style={{position:"absolute", left:"-9999px"}} alt="" /></div></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument