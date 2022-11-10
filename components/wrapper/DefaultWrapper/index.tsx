import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function DefaultWrapper(props: WrapperProps) {
  const bgColor = useColorModeValue(
    "gray.100",
    "gray.700",
  );

  return (
    <>
      <Header />
      <Box h="64px" w="100%" bgColor={bgColor} />
      <Box>{props.children}</Box>
      <Container maxW="7xl">
        <Footer />
      </Container>
    </>
  );
}
