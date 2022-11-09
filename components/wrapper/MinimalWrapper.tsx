import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./DefaultWrapper/Header";

type WrapperProps = {
  children: JSX.Element;
};

export default function MinimalWrapper(props: WrapperProps) {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Box pos="fixed" w="100%" bgColor={bgColor} zIndex={100}>
        <Header />
      </Box>
      <Box pt="64px">{props.children}</Box>
    </>
  );
}
