import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="it">
      <Head>
      <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {/* <body suppressHydrationWarning={true}> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
