import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { NextPage } from "next";
import MinimalWrapper from "components/wrapper/MinimalWrapper";
import { ColorModeProvider } from "providers/colorMode";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-default",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MinimalWrapper>{page}</MinimalWrapper>);

  return (
    <ColorModeProvider>
      <div className={`${font.variable} font-sans`}>
        <style jsx global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
        <Head>
          <title key="title">Rhinobase Docs</title>
          <meta
            name="description"
            content="Building the next-generation platform for No Code Apps"
          />
          <meta
            name="keywords"
            key="keywords"
            content="no,low,code,development,automation,compute,docs"
          />
          <meta property="og:title" content="Rhinobase Docs" />
          <meta
            property="og:description"
            content="Building the next-generation platform for No Code Apps"
          />
          <meta property="og:image" content="https://rhinobase.io/logo.png" />
          <meta property="og:site_name" content="Rhinobase" />
          <meta property="og:url" content="https://rhinobase.io" />
          <meta property="og:type" content={"website"} />
        </Head>
        {process.env.NODE_ENV == "production" && (
          <>
            {/* TODO: Add the Google analytics code */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=" />
            <Script
              id="google_analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '');`,
              }}
            />
          </>
        )}
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ColorModeProvider>
  );
}
