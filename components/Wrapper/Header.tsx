import {
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import FullLogo from "components/brand/FullLogo";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import Searchbar from "./Searchbar";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const value = useColorModeValue("dark_mode", "light_mode");

  return (
    <HStack m={3}>
      <FullLogo logo={{ size: 40, borderRadius: "md", p: 1 }} size="lg" />
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
      >
        <span className="material-symbols-rounded">{value}</span>
      </IconButton>
    </HStack>
  );
}
