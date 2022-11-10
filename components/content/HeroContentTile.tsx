import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Spacer,
  AspectRatio,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type HeroContentTileprops = {
  title: string;
  href: string;
  description: string;
  image: string;
  tag: string;
};

export default function HeroContentTile(props: HeroContentTileprops) {
  return (
    <Box
      w="100%"
      px={10}
      borderBottom="2px"
      borderColor="gray.100"
    >
      <HStack alignItems="start">
        <VStack width="xl" spacing={5} alignItems="start">
          <Heading size="md">{props.title}</Heading>
          <Text>{props.description}</Text>

          <Link href={props.href}>
            <Button
              variant="link"
              _hover={{ textDecor: "none" }}
              colorScheme="messenger"
              size="md"
              fontWeight={600}
              rightIcon={<FaArrowRight />}
            >
              {props.tag}
            </Button>
          </Link>
        </VStack>
        <Spacer />
        <AspectRatio
          h="200px"
          width="500px"
          ratio={16 / 9}
          borderTopRadius="md"
          overflow="hidden"
          display={{base: "none", md: "block"}}
        >
          <Image src="https://via.placeholder.com/150?text=%20" alt="" />
        </AspectRatio>
      </HStack>
    </Box>
  );
}
