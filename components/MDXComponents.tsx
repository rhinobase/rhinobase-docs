import { Code, Heading, Text, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const MDXComponents = {
  code: Code,
  h2: Heading,
  p: Text,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  img: Image,
  a: Link,
};

export default MDXComponents;
