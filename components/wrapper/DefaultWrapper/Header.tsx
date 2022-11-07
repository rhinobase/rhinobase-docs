import {
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import FullLogo from "components/brand/FullLogo";
import { FaGithub, FaDiscord, FaYoutube, FaMoon, FaSun } from "react-icons/fa";
import Searchbar from "./Searchbar";
import Link from "next/link";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <HStack m={3}>
      <Link href="/">
        <FullLogo logo={{ size: 40, borderRadius: "md", p: 1 }} size="lg" />
      </Link>
      <Spacer />
      <Searchbar />
      <Spacer />
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
        icon={<SwitchIcon />}
      />
    </HStack>
  );
}
