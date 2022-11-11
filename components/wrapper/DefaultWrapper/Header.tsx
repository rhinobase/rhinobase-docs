import {
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button,
  Box,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  ButtonGroup,
} from "@chakra-ui/react";
import FullLogo from "components/brand/FullLogo";
import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sidebar } from "../Sidebar";
import sitemap from "sitemap.json"

const options = [
  {
    title: "Article",
    href: "/articles",
  },
  {
    title: "Quickstarts",
    href: "/quickstart",
  },
  {
    title: "APIs",
    href: "/apis",
  },
  {
    title: "SDKs",
    href: "/sdks",
  },
  {
    title: "Github",
    href: "https://www.github.com",
    icon: <FaGithub />,
    isExternal: true,
  },
  {
    title: "Discord",
    href: "https://www.discord.gg",
    icon: <FaDiscord />,
    isExternal: true,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <FaYoutube />,
    isExternal: true,
  },
];

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Box
      className="navbar"
      pos="fixed"
      w="100%"
      zIndex={100}
      boxShadow={show ? "md" : undefined}
      transition="border 0.1s ease 0s"
    >
      <HStack p={3}>
        <Link href="/">
          <FullLogo logo={{ size: 40, borderRadius: "md", p: 1 }} size="lg" />
        </Link>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Link href="/articles">
            <Button variant="ghost">Article</Button>
          </Link>
          <Link href="/quickstart">
            <Button variant="ghost">Quickstarts</Button>
          </Link>
          <Link href="/apis">
            <Button variant="ghost">APIs</Button>
          </Link>
          <Link href="/sdks">
            <Button variant="ghost">SDKs</Button>
          </Link>
        </Box>
        <ButtonGroup display={{ base: "none", sm: "block" }}>
          <IconButton
            variant="ghost"
            aria-label="github"
            icon={<FaGithub size="24px" />}
          />
          <IconButton
            variant="ghost"
            aria-label="discord"
            icon={<FaDiscord size="24px" />}
          />
          <IconButton
            variant="ghost"
            aria-label="youtube"
            icon={<FaYoutube size="24px" />}
          />
        </ButtonGroup>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="togglemode"
          icon={<SwitchIcon size="20px" />}
        />
        <IconButton
          aria-label="menu"
          variant="ghost"
          size="md"
          icon={<FaBars style={{ marginLeft: 10 }} />}
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
        />
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Link href="/">
                <FullLogo
                  logo={{ size: 40, borderRadius: "md", p: 1 }}
                  size="lg"
                />
              </Link>
            </DrawerHeader>
            <DrawerBody px={0}>
              <Sidebar options={sitemap} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Box>
  );
}
