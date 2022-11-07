import { HStack, StackDivider, Text } from "@chakra-ui/react";
import Link from "next/link";

export type FooterListItemProps = {
  title: string;
  href: string;
  tag?: {
    title: string;
    color: string;
  };
  description?: string;
};

export default function FooterListItem(props: FooterListItemProps) {
  return (
    <Link href={props.href}>
      <HStack divider={<StackDivider />} mb={2}>
        <Text>{props.title}</Text>
        {props.description && <Text color="gray.500">{props.description}</Text>}
      </HStack>
    </Link>
  );
}
