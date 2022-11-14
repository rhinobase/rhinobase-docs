import { Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import getTableOfContent from "utils/getTableOfContent";

type TableOfContentProps = {
  source: string;
};

export default function TableOfContent(props: TableOfContentProps) {
  const headings = getTableOfContent(props.source);

  return (
    <VStack position="sticky" top={0} alignItems="start" display={{base:"none",lg:"flex"}} py={3}>
      {headings.map((value) => (
        <Link key={value.id} href={`#${value.id}`}>
          <Button variant="link">{value.text}</Button>
        </Link>
      ))}
    </VStack>
  );
}
