import {
  Heading,
  Text,
  Image,
  AspectRatio,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import DefaultWrapper from "components/wrapper/DefaultWrapper";

export default function NotFound() {
  return (
    <Container maxW="7xl" h="600px" letterSpacing={1}>
      <VStack alignItems="start" justifyContent="center" h="100%" gap={4}>
        <AspectRatio h="100px" width="100px">
          <Image src="https://via.placeholder.com/150?text=%20" alt="" />
        </AspectRatio>
        <Text textColor="red" fontSize="xl">
          404 ERROR
        </Text>
        <Heading size="lg">
          We could not find the page you were looking for.
        </Heading>
        <Text fontSize="xl">
          You may have mistyped the address or the page was moved or deleted.
          <br />
          You can search for more results or head to our{" "}
          <Link href="/">
            <Button
              fontSize="xl"
              textColor="messenger.600"
              variant="link"
              _hover={{ textDecor: "none" }}
            >
              homepage.
            </Button>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
}

NotFound.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultWrapper>{page}</DefaultWrapper>;
};
