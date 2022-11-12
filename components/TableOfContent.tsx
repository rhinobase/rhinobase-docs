import { Button, ButtonGroup, VStack } from "@chakra-ui/react";
import React from "react";
import getTableOfContent from "utils/getTableOfContent";

type TableOfContentProps = {
  source: string;
};

export default function TableOfContent(props: TableOfContentProps) {
  const headings = getTableOfContent(props.source);
  return (
    <VStack>
      <ButtonGroup>
        {headings.map((value) => (
          <Button key={value.id} variant="link">
            {value.text}
          </Button>
        ))}
      </ButtonGroup>
    </VStack>
  );
}
