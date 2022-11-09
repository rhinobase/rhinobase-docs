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
import React, { useEffect, useMemo, useState } from "react";

type SidebarNestedType = {
  title: string;
  href?: string;
  items?: SidebarNestedType[];
};

type SidebarProps = {
  children: JSX.Element;
  options: SidebarNestedType[];
};

function SidebarNested(
  props: SidebarNestedType & { index: number; active: number[] },
) {
  const isActive = props.index == props.active[0];

  if (props.items) {
    return (
      <AccordionItem border={0} p={0}>
        <AccordionButton p={0} mb={2} as={"div"}>
          <Button
            size="sm"
            w="100%"
            leftIcon={<AccordionIcon />}
            justifyContent="start"
            isActive={isActive}
          >
            {props.title}
          </Button>
        </AccordionButton>
        <AccordionPanel py={0} pr={0}>
          <Accordion allowToggle index={props.active[1]}>
            {props.items.map((item, index) => (
              <SidebarNested
                key={index}
                {...item}
                index={index}
                active={isActive ? props.active.slice(1) : []}
              />
            ))}
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    );
  }

  if (props.href)
    return (
      <Link href={props.href}>
        <Button
          w="100%"
          size="sm"
          mb={1}
          isActive={isActive}
          justifyContent="start"
        >
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

function findActiveAccordion(
  items: SidebarNestedType[],
  route: string,
): number[] | undefined {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.href && item.href == route) return [i];
    else if (item.items) {
      const result = findActiveAccordion(item.items, route);
      if (result) {
        result.unshift(i);
        return result;
      }
    }
  }
}

export default function Sidebar(props: SidebarProps) {
  const router = useRouter();
  const currentIndex = useMemo(
    () => findActiveAccordion(props.options, router.pathname) ?? [],
    [props.options, router.pathname],
  );

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
        <Accordion allowToggle index={currentIndex[0]}>
          {props.options.map((item, index) => (
            <SidebarNested
              key={index}
              {...item}
              index={index}
              active={[...(currentIndex ?? [])]}
            />
          ))}
        </Accordion>
      </ButtonGroup>
      <Box h="100%" w="100%" overflow="auto">
        <Container maxW="6xl">{props.children}</Container>
      </Box>
    </HStack>
  );
}
