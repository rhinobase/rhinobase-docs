import { Heading, Image, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export type QuickstartTileProps = {
  title: string;
  href: string;
  image: string;
};

export default function QuickstartTile(props: QuickstartTileProps) {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Link href={props.href}>
      <HStack
        h="72px"
        border="2px"
        borderColor={bgColor}
        borderRadius="md"
        p={7}
        _hover={{border:"2px", borderColor: "messenger.200" }}
        transition="border 0.1s ease 0s"
      >
        <Image src={props.image} alt={props.title} boxSize="50px" />
        <Heading size="md" fontWeight={500}>
          {props.title}
        </Heading>
      </HStack>
    </Link>
  );
}
