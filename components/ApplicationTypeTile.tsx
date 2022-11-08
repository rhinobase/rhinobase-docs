import { Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

type ApplicationTypeTileProps = {
  image: string;
  title: string;
  content: string;
  example: string;
};

export default function ApplicationTypeTile(props: ApplicationTypeTileProps) {
  return (
    <Flex
      h="320px"
      flexDir="column"
      alignItems="center"
      border="4px"
      borderColor="transparent"
      _hover={{ borderColor: "messenger.200" }}
      justifyContent="center"
      boxShadow="0px 2px 4px rgb(0 0 0 / 12%)"
      borderRadius="md"
      p={7}
      transition="border 0.1s ease 0s"
      bgColor="white"
    >
      <Image
        borderRadius="2xl"
        boxSize="100px"
        src={props.image}
        alt={props.title}
        boxShadow="lg"
        mb={7}
      />
      <Text textAlign="center" as="b" fontSize="lg" mb={2}>
        {props.title}
      </Text>
      <Text textAlign="center" noOfLines={2} mb={1}>
        {props.content}
      </Text>
      <Text fontSize="13px" noOfLines={1} color="GrayText" mt={1}>
        {props.example}
      </Text>
    </Flex>
  );
}
