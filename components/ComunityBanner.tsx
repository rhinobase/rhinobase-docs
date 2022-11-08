import {
  Text,
  Container,
  Heading,
  Box,
  chakra,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function ComunityBanner() {
  return (
    <Box bg="#5865F2">
      <Container maxW="7xl" py="8">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <Flex color="white">
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize="48px"
              mr="5"
            >
              <FaDiscord />
            </Flex>
            <Box>
              <Heading size="md" lineHeight="1.2" mb="1">
                Connect with the community
              </Heading>
              <Text opacity={0.7}>
                Feel free to ask questions, report issues, and meet new people.
              </Text>
            </Box>
          </Flex>
          <chakra.button
            width={{ base: "100%", md: "auto" }}
            mt={{ base: "6", md: 0 }}
            color="gray.800"
            as="a"
            justifyContent="center"
            display="inline-flex"
            alignItems="center"
            href="https://discord.gg"
            rel="noopener"
            target="_blank"
            fontWeight="bold"
            shadow="md"
            bg="white"
            px="24px"
            h="56px"
            rounded="lg"
            fontSize="md"
          >
            Join the #rhinobase Discord!
          </chakra.button>
        </Flex>
      </Container>
    </Box>
  );
}
