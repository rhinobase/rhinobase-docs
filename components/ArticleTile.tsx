import {
  Avatar,
  Box,
  Text,
  Image,
  Heading,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";
// import dateFormat from "dateformat";

export type ArticleTileType = {
  id: string;
  image: string;
  title: string;
  description: string;
  tag?: string;
  user: {
    profile_image: string;
    name: string;
  };
  date: string;
};

export default function ArticleTile(props: ArticleTileType) {
  return (
    <Link href={`/articles/${props.id}`}>
      <AspectRatio
        ratio={16 / 9}
        overflow="hidden"
        mb={5}
        w="100%"
        borderRadius="xl"
      >
        <Image src={props.image} alt={props.tag} />
      </AspectRatio>
      <Text color="messenger.500" fontWeight={600} mb={3}>
        {props.tag}
      </Text>
      <Heading size="md" mb={2}>
        {props.title}
      </Heading>
      <Text color="GrayText">{props.description}</Text>
      <HStack mt={5}>
        <Avatar name={props.user.name} src={props.user.profile_image} />
        <Box>
          <Text fontWeight={600} textTransform="capitalize">
            {props.user.name}
          </Text>
          {/* <Text color="GrayText">
            {dateFormat(props.date, "mmmm d, yyyy")}
          </Text> */}
        </Box>
      </HStack>
    </Link>
  );
}
