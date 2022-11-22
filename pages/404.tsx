import { Heading, Text, VStack, Container, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";

export default function NotFound() {
  return (
    <Container maxW="7xl" h="600px" letterSpacing={1}>
      <VStack alignItems="center" justifyContent="center" h="100%" gap={4}>
        <FaQuestion size={100} />
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
