import {
  ButtonGroup,
  Text,
  Container,
  Button,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type SidebarProps = {
  children: JSX.Element;
  options: {
    header?: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
};

export default function Sidebar(props: SidebarProps) {
  return (
    <Container maxW="8xl">
      <HStack alignItems="flex-start" mt={10} divider={<StackDivider />}>
        {props.options.map((value, index) => (
          <React.Fragment key={index}>
            <ButtonGroup 
              variant="ghost"
              colorScheme="messenger"
              px={2}
              py={3}
              flexDir="column"
              spacing={0}
            >
              {value.header && <Text as="b" alignSelf="start" mx={3} mb={8}>{value.header}</Text>}
              {value.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  style={{ marginBottom: "8px" }}
                >
                  <Button>{item.title}</Button>
                </Link>
              ))}
            </ButtonGroup>
          </React.Fragment>
        ))}
        <Container maxW="6xl">{props.children}</Container>
      </HStack>
    </Container>
  );
}
