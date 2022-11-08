import { Heading, Image, HStack } from "@chakra-ui/react";
import Link from "next/link";

export type QuickstartTileProps = {
  title: string;
  href: string;
  image: string;
};

export default function QuickstartTile(props: QuickstartTileProps) {
  return (
    <Link href={props.href}>
      <HStack
        h="72px"
        border="1px"
        borderColor="GrayText"
        borderRadius="md"
        p={7}
      >
        <Image src={props.image} alt={props.title} boxSize="50px" />
        <Heading size="md" fontWeight={500}>
          {props.title}
        </Heading>
      </HStack>
    </Link>
  );
}
