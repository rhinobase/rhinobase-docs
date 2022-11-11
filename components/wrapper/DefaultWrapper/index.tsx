import { Container, Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function DefaultWrapper(props: WrapperProps) {
  return (
    <>
      <Header />
      <Box>{props.children}</Box>
      <Container maxW="7xl">
        <Footer />
      </Container>
    </>
  );
}
