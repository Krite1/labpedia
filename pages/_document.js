import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    // AdSense script commented out for review readiness
    const adClient = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-XXXX'
    return (
      <Html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* If AdSense approved, uncomment below */}
          {/*
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`} crossOrigin="anonymous"></script>
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
