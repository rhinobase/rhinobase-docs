import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import theme from "theme";

const components = {
  h1: (props: any) => <Heading as="h1" {...props} />,
  h2: Heading,
  p: Text,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
