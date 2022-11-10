import {
  HStack,
  Text,
  Image,
  useColorModeValue,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import Link from "next/link";

export type ContentTileProps = {
  title: string;
  href: string;
  image?: string;
  description?: string;
  icon?: JSX.Element;
  tags?: string[];
};

export default function ContentTile(props: ContentTileProps) {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  if (props.image) {
    return (
      <Link href={props.href}>
        <Box
          w="100%"
          h="100%"
          borderBottom="2px"
          borderColor={bgColor}
          py={4}
          _hover={{ borderColor: "messenger.200" }}
          transition="border 0.1s ease 0s"
        >
          <AspectRatio ratio={3 / 1} mb={5} borderRadius="md" overflow="hidden">
            <Image src={props.image} alt={props.title} />
          </AspectRatio>
          <Text size="md" fontWeight={600} color="messenger.500">
            {props.title}
          </Text>
          <Text mt={2}>{props.description}</Text>
          {(props.icon || props.tags) && (
            <HStack mt={5}>
              {props.icon}
              <Text
                fontSize="12px"
                textTransform="uppercase"
                fontWeight={600}
                color="GrayText"
              >
                {props.tags?.join(" · ")}
              </Text>
            </HStack>
          )}
        </Box>
      </Link>
    );
  }

  return (
    <Link href={props.href}>
      <Box
        w="100%"
        h="100%"
        border="2px"
        borderColor={bgColor}
        borderRadius="md"
        p={4}
        _hover={{ borderColor: "messenger.200" }}
        transition="border 0.1s ease 0s"
      >
        <Text size="md" fontWeight={600} color="messenger.500">
          {props.title}
        </Text>
        <Text mt={2}>{props.description}</Text>
        {(props.icon || props.tags) && (
          <HStack mt={5}>
            {props.icon}
            <Text
              fontSize="12px"
              textTransform="uppercase"
              fontWeight={600}
              color="GrayText"
            >
              {props.tags?.join(" · ")}
            </Text>
          </HStack>
        )}
      </Box>
    </Link>
  );
}
