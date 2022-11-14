import {
  HStack,
  Divider,
  Text,
  Grid,
  Spacer,
  Button,
  ButtonGroup,
  IconButton,
  GridItem,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTwitch,
} from "react-icons/fa";
import FooterList, { FooterListProps } from "./FooterList";
import Logo from "components/brand/Logo";
import Link from "next/link";

const data: FooterListProps[] = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "",
      },
      {
        title: "Careers",
        href: "",
      },
      {
        title: "Articles",
        href: "https://www.rhinobase.io/articles",
      }
    ],
  },
  {
    title: "Product",
    items: [
      {
        title: "CLI",
        href: "",
      },
      {
        title: "Customers",
        href: "",
      },
      {
        title: "Enterprise",
        href: "",
      },
      {
        title: "Pricing",
        href: "",
      },
      {
        title: "Changelog",
        href: "",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Docs",
        href: "",
      },
      {
        title: "Support",
        href: "",
      },
      {
        title: "Status",
        href: "",
      },
      {
        title: "Contact",
        href: "",
      },
    ],
  },
  {
    title: "Talk to us",
    items: [
      {
        title: "Call +91",
        href: "",
      },
      {
        title: "Contact Sales",
        href: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={2}
        my={5}
      >
        <GridItem w="100%" p={3} colSpan={{ base: 1, sm: 2, md: 1 }}>
          <Link href="/">
            <Logo size={40} borderRadius="8" p={1} />
          </Link>
        </GridItem>

        {data.map((item, index) => (
          <FooterList key={index} {...item} />
        ))}
      </Grid>
      <Divider my={4} />
      <HStack
        mb={4}
        color="GrayText"
        gap={3}
        flexDir={{ base: "column-reverse", lg: "row" }}
      >
        <HStack flexDir={{ base: "column", lg: "row" }} gap={4}>
          <Text textAlign="center">
            © 2020 - {new Date().getFullYear()} Rhinobase® Inc. All Rights
            Reserved.
          </Text>
          <HStack>
          <Link href={""}>Privacy</Link>
          <Link href={""}>Terms</Link>
          </HStack>
        </HStack>
        <Spacer />

        <ButtonGroup spacing={1}>
          <IconButton
            variant="ghost"
            aria-label="twitter"
            icon={<FaTwitter />}
          />
          <IconButton variant="ghost" aria-label="github" icon={<FaGithub />} />
          <IconButton
            variant="ghost"
            aria-label="linkedin"
            icon={<FaLinkedin />}
          />
          <IconButton
            variant="ghost"
            aria-label="facebook"
            icon={<FaFacebook />}
          />
          <IconButton
            variant="ghost"
            aria-label="youtube"
            icon={<FaYoutube />}
          />
          <IconButton
            variant="ghost"
            aria-label="discord"
            icon={<FaDiscord />}
          />
        </ButtonGroup>
      </HStack>
    </>
  );
}
