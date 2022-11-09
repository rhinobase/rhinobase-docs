import { Box } from "@chakra-ui/react";
import Image from "next/image";
import rhinobaseLogo from "../../public/ms-icon-310x310.png";
import { Lobster } from "@next/font/google";

export type LogoProps = {
  size?: number;
  borderRadius?: string;
  p?: number;
};

const lobster = Lobster({
  weight: "400",
});

export default function Logo({ size, borderRadius, p }: LogoProps) {
  return (
    <Box
      width={`${size}px` ?? "100px"}
      height={`${size}px` ?? "100px"}
      bgGradient="linear(to-br, cyan.300, messenger.500, pink.500, orange.500)"
      borderRadius={borderRadius ?? "xl"}
      p={p ?? 3}
      fontFamily={lobster.className}
    >
      <Image src={rhinobaseLogo} alt="rhinobase" />
    </Box>
  );
}
