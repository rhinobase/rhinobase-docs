import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import theme from "theme";
import Head from "next/head";
import Script from "next/script";

const components = {
  h1: (props: any) => <Heading as="h1" {...props} />,
  h2: Heading,
  p: Text,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
      {process.env.NODE_ENV && (
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
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
