import {
  ButtonGroup,
  Container,
  HStack,
  StackDivider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type SidebarNestedType = {
  title: string;
  href?: string;
  items?: SidebarNestedType[];
};

type SidebarProps = {
  children: JSX.Element;
  options: SidebarNestedType[];
};

function SidebarNested(props: SidebarNestedType) {
  const [isActive, setActive] = useState(false);
  const router = useRouter();

  console.log(router.pathname, router.basePath);

  useEffect(() => {
    if (props.href == "") setActive(true);
  }, [router]);

  if (props.items) {
    return (
      <AccordionItem border={0} p={0}>
        <AccordionButton p={0}>
          <Button
            size="sm"
            w="100%"
            leftIcon={<AccordionIcon />}
            justifyContent="start"
          >
            {props.title}
          </Button>
        </AccordionButton>
        <AccordionPanel py={0} pr={0}>
          {props.items.map((item, index) => (
            <SidebarNested key={index} {...item} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    );
  }

  if (props.href)
    return (
      <Link href={props.href}>
        <Button w="100%" size="sm" isActive={isActive} justifyContent="start">
          {props.title}
        </Button>
      </Link>
    );

  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>neither href nor items are found!</AlertTitle>
      <AlertDescription>Please declare one of them.</AlertDescription>
    </Alert>
  );
}

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
        <Accordion allowToggle>
          {props.options.map((item, index) => (
            <SidebarNested key={index} {...item} />
          ))}
        </Accordion>
      </ButtonGroup>
      <Box h="100%" w="100%" overflow="auto">
        <Container maxW="6xl">{props.children}</Container>
      </Box>
    </HStack>
  );
}
