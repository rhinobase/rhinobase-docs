import { Container } from "@chakra-ui/react";
import Sidebar from "components/wrapper/Sidebar";

export default function Apis() {
  return (
    <Sidebar
      options={[
        {
          title: "APIS",
          items: [
            {
              title: "Overview",
              href: "#overview",
            },
            {
              title: "Authentication API",
              href: "#auth",
            },
            {
              title: "Management API Explorer",
              href: "#management",
            },
          ],
        },
      ]}
    >
      <Container></Container>
    </Sidebar>
  );
}
