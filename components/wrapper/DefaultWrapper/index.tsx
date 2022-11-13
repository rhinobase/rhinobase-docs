import { Container } from "@chakra-ui/react";
import MinimalWrapper from "../MinimalWrapper";
import Footer from "./Footer";

type WrapperProps = {
  children: JSX.Element;
};

export default function DefaultWrapper(props: WrapperProps) {
  return (
    <MinimalWrapper>
      <>
        {props.children}
        <Container maxW="7xl">
          <Footer />
        </Container>
      </>
    </MinimalWrapper>
  );
}
