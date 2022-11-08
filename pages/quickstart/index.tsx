import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import QuickstartTile, { QuickstartTileProps } from "components/QuickstartTile";
import React from "react";
import Sidebar from "components/Sidebar";
import PythonImage from "../../public/quickstart_icons/python.svg"
import LaravelImage from "../../public/quickstart_icons/laravel.svg"
import JavascriptImage from "../../public/quickstart_icons/javascript.svg"
import GolangImage from "../../public/quickstart_icons/golang.svg"
import PhpImage from "../../public/quickstart_icons/php.svg"
import NextjsImage from "../../public/quickstart_icons/nextjs.svg"
import RailsImage from "../../public/quickstart_icons/rails.svg"
import JavaImage from "../../public/quickstart_icons/java.svg"
import AngularImage from "../../public/quickstart_icons/angular.svg"
import VuejsImage from "../../public/quickstart_icons/vuejs.svg"
import AndroidImage from "../../public/quickstart_icons/android.svg"
import FlutterImage from "../../public/quickstart_icons/flutter.svg"
import AppleImage from "../../public/quickstart_icons/apple.svg"
import ReactImage from "../../public/quickstart_icons/react.svg"
import NodejsImage from "../../public/quickstart_icons/nodejs.svg"
import DjangoImage from "../../public/quickstart_icons/django.svg"

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
    items: [
      {
        title: "Django",
        href: "",
        image: PythonImage,
      },
      {
        title: "Laravel",
        href: "",
        image: LaravelImage,
      },
      {
        title: "Express",
        href: "",
        image: JavascriptImage,
      },
      {
        title: "Go",
        href: "",
        image: GolangImage,
      },
      {
        title: "Python",
        href: "",
        image: PythonImage,
      },
      {
        title: "PHP",
        href: "",
        image: PhpImage,
      },
      {
        title: "Next.js",
        href: "",
        image: NextjsImage,
      },
      {
        title: "Ruby On Rails",
        href: "",
        image: RailsImage,
      },
      {
        title: "Java",
        href: "",
        image: JavaImage,
      },
    ],
  },
  {
    title: "Single Page App",
    description: "Javascript web app that runs in the browser",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Angular",
        href: "",
        image: AngularImage,
      },
      {
        title: "Javascript",
        href: "",
        image: JavascriptImage,
      },
      {
        title: "React",
        href: "",
        image: ReactImage,
      },
      {
        title: "Vue",
        href: "",
        image: VuejsImage,
      },
    ],
  },
  {
    title: "Native/Mobile App",
    description: "Traditional web app that runs on the server",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Android",
        href: "",
        image: AndroidImage,
      },
      {
        title: "Flutter",
        href: "",
        image: FlutterImage,
      },
      {
        title: "IOS / macOS",
        href: "",
        image: AppleImage,
      },
      {
        title: "React Native",
        href: "",
        image: ReactImage,
      },
    ],
  },
  {
    title: "Backend/API",
    description: "Traditional web app that runs on the server",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Django API",
        href: "",
        image: DjangoImage,
      },
      {
        title: "Python API",
        href: "",
        image: PythonImage,
      },
      {
        title: "PHP API",
        href: "",
        image: PhpImage,
      },
      {
        title: "Laravel API",
        href: "",
        image: LaravelImage,
      },
      {
        title: "Ruby On Rails API",
        href: "",
        image: RailsImage,
      },
      {
        title: "Go API",
        href: "",
        image: GolangImage,
      },
      {
        title: "Node (Express) API",
        href: "",
        image: NodejsImage,
      },
    ],
  }
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
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mb={20}>
              {value.items.map((item, index) => (
                <QuickstartTile key={index} {...item} />
              ))}
            </SimpleGrid>
          </React.Fragment>
        ))}
      </Container>
    </Sidebar>
  );
}
