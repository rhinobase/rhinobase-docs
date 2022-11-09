import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import QuickstartTile, { QuickstartTileProps } from "components/QuickstartTile";
import Sidebar from "components/wrapper/Sidebar";
import React from "react";
// Images
import PythonImage from "../../public/quickstart_icons/python.svg";
import LaravelImage from "../../public/quickstart_icons/laravel.svg";
import JavascriptImage from "../../public/quickstart_icons/javascript.svg";
import GolangImage from "../../public/quickstart_icons/golang.svg";
import PhpImage from "../../public/quickstart_icons/php.svg";
import NextjsImage from "../../public/quickstart_icons/nextjs.svg";
import RailsImage from "../../public/quickstart_icons/rails.svg";
import JavaImage from "../../public/quickstart_icons/java.svg";
import AngularImage from "../../public/quickstart_icons/angular.svg";
import VuejsImage from "../../public/quickstart_icons/vuejs.svg";
import AndroidImage from "../../public/quickstart_icons/android.svg";
import FlutterImage from "../../public/quickstart_icons/flutter.svg";
import AppleImage from "../../public/quickstart_icons/apple.svg";
import ReactImage from "../../public/quickstart_icons/react.svg";
import NodejsImage from "../../public/quickstart_icons/nodejs.svg";
import DjangoImage from "../../public/quickstart_icons/django.svg";

type QuickstartType = {
  id: string;
  title: string;
  description: string;
  image: string;
  items: QuickstartTileProps[];
};

const data: QuickstartType[] = [
  {
    id: "regular",
    title: "Regular Web App",
    description: "Traditional web app that runs on the server",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Django",
        href: "/quickstart/django",
        image: PythonImage,
      },
      {
        title: "Laravel",
        href: "/quickstart/django",
        image: LaravelImage,
      },
      {
        title: "Express",
        href: "/quickstart/django",
        image: JavascriptImage,
      },
      {
        title: "Go",
        href: "/quickstart/django",
        image: GolangImage,
      },
      {
        title: "Python",
        href: "/quickstart/django",
        image: PythonImage,
      },
      {
        title: "PHP",
        href: "/quickstart/django",
        image: PhpImage,
      },
      {
        title: "Next.js",
        href: "/quickstart/django",
        image: NextjsImage,
      },
      {
        title: "Ruby On Rails",
        href: "/quickstart/django",
        image: RailsImage,
      },
      {
        title: "Java",
        href: "/quickstart/django",
        image: JavaImage,
      },
    ],
  },
  {
    id: "singlepage",
    title: "Single Page App",
    description: "Javascript web app that runs in the browser",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Angular",
        href: "/quickstart/django",
        image: AngularImage,
      },
      {
        title: "Javascript",
        href: "/quickstart/django",
        image: JavascriptImage,
      },
      {
        title: "React",
        href: "/quickstart/django",
        image: ReactImage,
      },
      {
        title: "Vue",
        href: "/quickstart/django",
        image: VuejsImage,
      },
    ],
  },
  {
    id: "native",
    title: "Native/Mobile App",
    description: "Traditional web app that runs on the server",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Android",
        href: "/quickstart/django",
        image: AndroidImage,
      },
      {
        title: "Flutter",
        href: "/quickstart/django",
        image: FlutterImage,
      },
      {
        title: "IOS / macOS",
        href: "/quickstart/django",
        image: AppleImage,
      },
      {
        title: "React Native",
        href: "/quickstart/django",
        image: ReactImage,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend/API",
    description: "Traditional web app that runs on the server",
    image: "https://via.placeholder.com/150?text=%20",
    items: [
      {
        title: "Django API",
        href: "/quickstart/django",
        image: DjangoImage,
      },
      {
        title: "Python API",
        href: "/quickstart/django",
        image: PythonImage,
      },
      {
        title: "PHP API",
        href: "/quickstart/django",
        image: PhpImage,
      },
      {
        title: "Laravel API",
        href: "/quickstart/django",
        image: LaravelImage,
      },
      {
        title: "Ruby On Rails API",
        href: "/quickstart/django",
        image: RailsImage,
      },
      {
        title: "Go API",
        href: "/quickstart/django",
        image: GolangImage,
      },
      {
        title: "Node (Express) API",
        href: "/quickstart/django",
        image: NodejsImage,
      },
    ],
  },
];

export default function Quickstarts() {
  const options = data.map((value) => ({
    title: value.title,
    items: value.items.map((value) => ({
      title: value.title,
      href: value.href,
    })),
  }));
  return (
    <Sidebar options={options}>
      <>
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <Box pt={10} id={value.id}>
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
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mb={10}>
              {value.items.map((item, index) => (
                <QuickstartTile key={index} {...item} />
              ))}
            </SimpleGrid>
          </React.Fragment>
        ))}
      </>
    </Sidebar>
  );
}
