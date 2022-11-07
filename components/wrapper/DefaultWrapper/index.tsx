import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function Wrapper(props: WrapperProps) {
  return (
    <>
      <Container maxW="8xl">
        <Header />
      </Container>
      {props.children}
      <Container maxW="8xl">
        <Footer />
      </Container>
    </>
  );
}
