import { GridItem, Text } from "@chakra-ui/react";
import FooterListItem, { FooterListItemProps } from "./FooterListItem";

export type FooterListProps = {
  title: string;
  href?: string;
  items: FooterListItemProps[];
};

export default function FooterList(props: FooterListProps) {
  return (
      <GridItem w="100%" p={3}>
        <Text as="b" my={5}>{props.title}</Text>
        {props.items.map((item, index) => (
          <FooterListItem key={index} {...item} />
        ))}
      </GridItem>
  );
}
