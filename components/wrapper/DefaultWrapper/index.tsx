import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function DefaultWrapper(props: WrapperProps) {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Box pos="fixed" w="100%" bgColor={bgColor} zIndex={100}>
        <Container maxW="8xl">
          <Header />
        </Container>
      </Box>
      <Box pt="64px">{props.children}</Box>
      <Container maxW="8xl">
        <Footer />
      </Container>
    </>
  );
}
