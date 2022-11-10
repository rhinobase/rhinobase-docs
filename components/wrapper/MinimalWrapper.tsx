import { Box } from "@chakra-ui/react";
import Header from "./DefaultWrapper/Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function MinimalWrapper(props: WrapperProps) {
  return (
    <>
      <Header />
      <Box pt="64px">{props.children}</Box>
    </>
  );
}
