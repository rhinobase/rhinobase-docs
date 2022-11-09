import {
  ButtonGroup,
  Text,
  Container,
  Button,
  HStack,
  StackDivider,
  Box,
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
    <HStack
      h="calc(100vh - 64px)"
      alignItems="flex-start"
      divider={<StackDivider />}
    >
      <ButtonGroup
        variant="ghost"
        colorScheme="messenger"
        px={2}
        py={3}
        flexDir="column"
        spacing={0}
        w="280px"
      >
        {props.options.map((value, index) => (
          <React.Fragment key={index}>
            {value.header && (
              <Text as="b" alignSelf="start" mx={3} mb={8}>
                {value.header}
              </Text>
            )}
            {value.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{ marginBottom: "8px" }}
              >
                <Button w="100%" size="sm" justifyContent="start">
                  {item.title}
                </Button>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </ButtonGroup>
      <Box h="100%" w="100%" overflow="auto" py={10}>
        <Container maxW="6xl">{props.children}</Container>
      </Box>
    </HStack>
  );
}
