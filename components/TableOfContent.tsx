import {
  Box,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useScrollSpy } from "hooks/useScrollspy";
import Link from "next/link";

type TableOfContentProps = {
  headings: {
    text: string;
    id: string;
    level: number;
  }[];
};

export default function TableOfContent(props: TableOfContentProps) {
  const activeId = useScrollSpy(props.headings.map(({ id }) => `[id="${id}"]`));
  const show = useBreakpointValue({ base: true, lg: false });
  return (
    <VStack py={3}>
      <Box w="300px">
        <UnorderedList>
          {props.headings.map((value) => (
            <Link key={value.id} href={`#${value.id}`}>
              <Text
                as={show ? ListItem : undefined}
                fontWeight={activeId == value.id ? 700 : 500}
                textColor={activeId == value.id ? "messenger.600" : undefined}
                _hover={{fontWeight:700}}
              >
                {value.text}
              </Text>
            </Link>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );
}
