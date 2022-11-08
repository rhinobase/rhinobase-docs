import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { QuickstartTileProps } from "components/QuickstartTile";
import React from "react";
import Sidebar from "components/Sidebar";

type QuickstartType = {
  title: string;
  description: string;
  image: string;
  items: QuickstartTileProps[];
};

const data: QuickstartType[] = [
  {
    title: "Regular Web App",
    description: "Traditional web app that runs on the server",
    image: "https://via.placeholder.com/150?text=%20",
    items: [],
  },
];

export default function Quickstarts() {
  return (
    <Sidebar
      options={[
        {
          items: [
            {
              title: "Regular Web App",
              href: "#regular",
            },
            {
              title: "Single-Page App",
              href: "#singlepage",
            },
            {
              title: "Native/Mobile App",
              href: "#native",
            },
            {
              title: "Backend/API",
              href: "#backend",
            },
          ],
        },
      ]}
    >
      <Container maxW="6xl">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <Box>
              <HStack gap={5}>
                <Image
                  src={value.image}
                  alt={value.title}
                  boxSize="75px"
                  borderRadius="xl"
                />
                <Heading>{value.title}</Heading>
              </HStack>
              <Text fontSize="2xl" my={5}>
                {value.description}
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}></SimpleGrid>
          </React.Fragment>
        ))}
      </Container>
    </Sidebar>
  );
}
