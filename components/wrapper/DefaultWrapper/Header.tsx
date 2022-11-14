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
  VStack,
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
import sitemap from "sitemap.json";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const actualColor = useColorModeValue("white", "gray.800");
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      pos="fixed"
      w="100%"
      zIndex={100}
      boxShadow={show ? "md" : undefined}
      transition="0.1s ease 0s"
      bgColor={router.pathname == "/" && !show ? bgColor : actualColor}
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
        <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="full">
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
              <VStack alignItems="start" px={2} py={3}>
                <Link href={"https://www.github.com"}>
                  <Button
                    w="100%"
                    variant="ghost"
                    size="sm"
                    rightIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                </Link>
                <Link href={"https://www.discord.gg"}>
                  <Button
                    w="100%"
                    variant="ghost"
                    size="sm"
                    rightIcon={<FaDiscord />}
                  >
                    Discord
                  </Button>
                </Link>
                <Link href={"https://www.youtube.com"}>
                  <Button
                    w="100%"
                    variant="ghost"
                    size="sm"
                    rightIcon={<FaYoutube />}
                  >
                    Youtube
                  </Button>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Box>
  );
}
