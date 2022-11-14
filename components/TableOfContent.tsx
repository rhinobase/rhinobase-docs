import { Button, VStack } from "@chakra-ui/react";
import { useScrollSpy } from "hooks/useScrollspy";
import Link from "next/link";
import React from "react";
import getTableOfContent from "utils/getTableOfContent";

type TableOfContentProps = {
  source: string;
};

export default function TableOfContent(props: TableOfContentProps) {
  const headings = getTableOfContent(props.source);
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "0% 0% -24% 0%",
    },
  );

  return (
    <VStack
      position="sticky"
      top={0}
      alignItems="start"
      display={{ base: "none", lg: "flex" }}
      py={3}
    >
      {headings.map((value) => (
        <Link key={value.id} href={`#${value.id}`}>
          <Button
            variant="link"
            isActive={activeId == value.id}
            colorScheme={activeId == value.id ? "messenger" : undefined}
          >
            {value.text}
          </Button>
        </Link>
      ))}
    </VStack>
  );
}
