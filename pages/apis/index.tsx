// import { Container } from "@chakra-ui/react";
import Sidebar from "components/wrapper/Sidebar";
import sitemap from "sitemap.json";

export default function Apis() {
  return (
    <Sidebar options={sitemap[2].items ?? []}>
      <div className="container"></div>
    </Sidebar>
  );
}
