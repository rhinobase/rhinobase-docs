import {
  HStack,
  Divider,
  Text,
  Grid,
  Spacer,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import FooterList, { FooterListProps } from "./FooterList";

const data: FooterListProps[] = [
  {
    title: "Platform",
    items: [
      {
        title: "Access Management",
        href: "",
      },
      {
        title: "Extensibility",
        href: "",
      },
      {
        title: "Login Security",
        href: "",
      },
      {
        title: "User Management",
        href: "",
      },
      {
        title: "Authentication",
        href: "",
      },
    ],
  },
  {
    title: "Use Cases",
    items: [
      {
        title: "CIAM",
        href: "",
        description: "For your Customers",
      },
      {
        title: "B2B",
        href: "",
        description: "For your Business Partner",
      },
      {
        title: "B2E",
        href: "",
        description: "For your Employee",
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        title: "Access Management",
        href: "",
      },
      {
        title: "Extensibility",
        href: "",
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        title: "Access Management",
        href: "",
      },
      {
        title: "Extensibility",
        href: "",
      },
      {
        title: "Login Security",
        href: "",
      },
    ],
  },
];

{
  /* <VStack
m={3}
divider={<StackDivider borderColor="gray.200" />}
spacing={4}
align="stretch"
> */
}

export default function Footer() {
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
        h="max-content"
        my={5}
      >
        {data.map((item, index) => (
          <FooterList key={index} {...item} />
        ))}
      </Grid>
      <Divider my={4} />
      <HStack mb={4}>
        <Text color="GrayText">
          © 2020 - {new Date().getFullYear()} Rhinobase® Inc. All Rights
          Reserved.
        </Text>
        <Spacer />
        <ButtonGroup variant="link">
          <Button>Status</Button>
          <Button>Legal</Button>
          <Button>Privacy</Button>
          <Button>Terms</Button>
        </ButtonGroup>
      </HStack>
    </>
  );
}
