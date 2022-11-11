import { Box } from "@chakra-ui/react";
import Header from "./DefaultWrapper/Header";
import Sidebar from "./Sidebar";
import sitemap from "sitemap.json"

type WrapperProps = {
  children: JSX.Element;
};

export default function QuickstartWrapper(props: WrapperProps) {
  return (
    <>
      <Header />
      <Box pt="64px">
        <Sidebar options={sitemap[1].items ?? []}>{props.children}</Sidebar>
      </Box>
    </>
  );
}
