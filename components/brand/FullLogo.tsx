import { Flex, Heading } from "@chakra-ui/react";
import Logo, { LogoProps } from "./Logo";

type initialProps = {
  size?: string;
  logo: LogoProps;
};

export default function FullLogo({ size, logo }: initialProps) {
  return (
    <Flex role="group">
      <Logo {...logo} />
      <Heading ml={3} size={size ?? "3xl"}>
        rhinobase
      </Heading>
    </Flex>
  );
}
