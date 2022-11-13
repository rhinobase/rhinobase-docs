import { Button, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type ContentWrapperProps = {
  children: JSX.Element;
  title: string;
  href: string;
};

export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <>
      <HStack alignItems="start" mt={20} mb={5}>
        <Heading size="lg">{props.title}</Heading>
        <Spacer />
        <Link href={props.href}>
          <Button
            display={{ base: "none", md: "block" }}
            variant="ghost"
            colorScheme="messenger"
            rightIcon={<FaArrowRight />}
          >
            learn more
          </Button>
        </Link>
      </HStack>
      {props.children}
      <Flex mb={20}>
        <Spacer />
        <Link href={props.href}>
          <Button
            display={{ base: "block", md: "none" }}
            variant="ghost"
            colorScheme="messenger"
            rightIcon={<FaArrowRight />}
          >
            learn more
          </Button>
        </Link>
      </Flex>
    </>
  );
}
