import {
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button,
  Box,
} from "@chakra-ui/react";
import FullLogo from "components/brand/FullLogo";
import { FaGithub, FaDiscord, FaYoutube, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [show, setShow] = useState(false);

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
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="togglemode"
          icon={<SwitchIcon size="20px" />}
        />
      </HStack>
    </Box>
  );
}
