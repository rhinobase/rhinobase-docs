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
  ExpandedIndex,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { FaAlignRight, FaExternalLinkAlt } from "react-icons/fa";

type SidebarNestedType = {
  title: string;
  href?: string;
  icon?: JSX.Element;
  isExternal?: boolean;
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
  const [active, setActive] = useState<ExpandedIndex>();

  useEffect(() => {
    setActive(props.active[1]);
  }, [props.active]);

  if (props.items) {
    return (
      <AccordionItem border={0} p={0}>
        <AccordionButton p={0} mb={2} as={"div"}>
          <Button
            size="sm"
            w="100%"
            leftIcon={<AccordionIcon />}
            justifyContent="start"
            colorScheme={isActive ? "messenger" : undefined}
          >
            {props.title}
          </Button>
        </AccordionButton>
        <AccordionPanel py={0} pr={0}>
          <Accordion allowToggle index={active} onChange={setActive}>
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
          colorScheme={isActive ? "messenger" : undefined}
          leftIcon={props.icon}
          justifyContent="start"
        >
          {props.title}
          <Spacer/>
          {props.isExternal && <FaExternalLinkAlt/>}
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

export function findActiveAccordion(
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

export function Sidebar(props: {options: SidebarNestedType[]}) {
  const router = useRouter();
  const [active, setActive] = useState<ExpandedIndex>();
  const currentIndex = useMemo(
    () => findActiveAccordion(props.options, router.pathname) ?? [],
    [props.options, router.pathname],
  );

  useEffect(() => {
    setActive(currentIndex[0]);
  }, [currentIndex]);

  return (
    <ButtonGroup
      variant="ghost"
      px={2}
      py={3}
      flexDir="column"
      spacing={0}
      w="280px"
    >
      <Accordion allowToggle index={active} onChange={setActive}>
        {props.options.map((item, index) => (
          <SidebarNested
            key={index}
            {...item}
            index={index}
            active={[...currentIndex]}
          />
        ))}
      </Accordion>
    </ButtonGroup>
  );
}

export default function SidebarWrapper(props: SidebarProps) {
  return (
    <HStack
      h="calc(100vh - 64px)"
      alignItems="flex-start"
      divider={<StackDivider />}
    >
      <Sidebar options={props.options} />
      <Box h="100%" w="100%" overflow="auto">
        <Container maxW="6xl">{props.children}</Container>
      </Box>
    </HStack>
  );
}
