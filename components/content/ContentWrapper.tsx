import {
  Button,
  Flex,
  Heading,
  Hide,
  HStack,
  Show,
  Spacer,
} from "@chakra-ui/react";
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
        <Heading size="lg">
          {props.title}
        </Heading>
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
      <Flex mb={10}>
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

{
  /* <Show breakpoint='(max-width: 400px)'>
  <Box>This text appears only on screens 400px and smaller.</Box>
</Show> */
}

//   <Show above='sm'>
//     <Box>This text appears at the "sm" value screen width or greater.</Box>
//   </Show>
//   <Hide below='md'>
//     <Box>This text hides at the "md" value screen width and smaller.</Box>
//   </Hide>
