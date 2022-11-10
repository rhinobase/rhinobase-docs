import { Box, GridItem, Text } from "@chakra-ui/react";
import FooterListItem, { FooterListItemProps } from "./FooterListItem";

export type FooterListProps = {
  title: string;
  href?: string;
  items: FooterListItemProps[];
};

export default function FooterList(props: FooterListProps) {
  return (
    <GridItem w="100%" p={3}>
      <Box mb={4}>
        <Text as="b">{props.title}</Text>
      </Box>
      {props.items.map((item, index) => (
        <FooterListItem key={index} {...item} />
      ))}
    </GridItem>
  );
}
