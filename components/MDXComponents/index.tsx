import {
  Heading,
  Alert,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { InlineCode } from "./InlineCode";
import { Pre } from "./Pre";

const MDXComponents = {
  pre: (props) => {
    if (typeof props.children === "string") return <Pre {...props} />;
    return <CodeBlock {...props} />;
  },
  code: InlineCode,
  h2: Heading,
  p: Text,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  img: Image,
  a: Link,
  blockquote: Alert,
};

export default MDXComponents;
