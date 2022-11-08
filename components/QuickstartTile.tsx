import { Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

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
        spacing={5}
      >
        <Image src={props.image} alt={props.title} width={30} height={30} />
        <Heading size="md" fontWeight={500}>
          {props.title}
        </Heading>
      </HStack>
    </Link>
  );
}
