import * as Chakra from "@chakra-ui/react";
import { TData, THead, Table } from "./Table";
import NextImage from "next/image";
import Link from "next/link";
import CodeBlock from "./CodeBlock";
import { InlineCode } from "./InlineCode";
import { Pre } from "./Pre";
import { MDXComponents } from "mdx/types";
import { LinkedHeading } from "./LinkedHeading";
import { Anchor } from "./Anchor";
import { VideoPlayer } from "./video-player";

const { Alert, AspectRatio, chakra, Kbd, Box } = Chakra;

const Components: MDXComponents = {
  ...Chakra,
  Image: (props) => (
    <Box my="5">
      <NextImage
        layout="responsive"
        width={700}
        height={400}
        objectFit="contain"
        {...props}
      />
    </Box>
  ),
  LinkedImage: ({ href, ...props }) => (
    <Link href={href} target="_blank">
      <Box display="block" my="10">
        <Components.Image {...props} />
      </Box>
    </Link>
  ),
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  code: InlineCode,
  pre: (props) => {
    if (typeof props.children === "string") return <Pre {...props} />;
    return <CodeBlock {...props} />;
  },
  kbd: Kbd,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? "br" : undefined}
      height={reset ? undefined : "24px"}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
  VideoPlayer,
  AspectRatio,
};

export default Components;
