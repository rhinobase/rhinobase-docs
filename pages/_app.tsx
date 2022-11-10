import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  extendTheme,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";
import Head from "next/head";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { NextPage } from "next";
import MinimalWrapper from "components/wrapper/MinimalWrapper";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const font = Plus_Jakarta_Sans();

const defaultTheme = extendTheme({
  // ...theme,
  fonts: {
    heading: font.style.fontFamily,
  },
});

const components: MDXComponents = {
  // a: (props) => <Link href={} {...props} />,
  // blockquote:
  // code:
  h1: (props) => (
    <Heading
      as="h1"
      mt="2rem"
      mb=".25rem"
      lineHeight={1.2}
      fontWeight="bold"
      fontSize="1.875rem"
      letterSpacing="-.025em"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      as="h2"
      mt="4rem"
      mb=".5rem"
      lineHeight={1.3}
      fontWeight="semibold"
      fontSize="1.5rem"
      letterSpacing="-.025em"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      mt="3rem"
      lineHeight={1.25}
      fontWeight="semibold"
      fontSize="1.25rem"
      letterSpacing="-.025em"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      as="h4"
      mt="3rem"
      lineHeight={1.375}
      fontWeight="semibold"
      fontSize="1.125rem"
      {...props}
    />
  ),
  li: ListItem,
  ol: OrderedList,
  p: (props) => <Text mt="1.25rem" lineHeight={1.7} {...props} />,
  // pre: Code,
  ul: (props) => <UnorderedList mt="0.5rem" ml="1.25rem" {...props} />,
  hr: (props) => <Divider my="4rem" {...props} />,
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MinimalWrapper>{page}</MinimalWrapper>);

  return (
    <ChakraProvider theme={defaultTheme}>
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
      <MDXProvider components={components}>
        {getLayout(<Component {...pageProps} />)}
      </MDXProvider>
    </ChakraProvider>
  );
}
