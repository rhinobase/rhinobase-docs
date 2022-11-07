import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import ApplicationTypeTile from "components/ApplicationTypeTile";
import DefaultWrapper from "components/wrapper/DefaultWrapper";

export default function Home() {
  return (
    <Container maxW="4xl" my={5}>
      <Box my={20}>
        <Heading>Start Building</Heading>
        <Text fontSize="2xl" mb={10}>
          Choose your application type to get started
        </Text>
      </Box>
      <HStack>
        <ApplicationTypeTile />
        <ApplicationTypeTile />
        <ApplicationTypeTile />
        <ApplicationTypeTile />
      </HStack>
    </Container>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultWrapper>{page}</DefaultWrapper>;
};
