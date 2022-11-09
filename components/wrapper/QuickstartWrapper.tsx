import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./DefaultWrapper/Header";
import Sidebar from "./Sidebar";

type WrapperProps = {
  children: JSX.Element;
};

const options = [
  {
    title: "Regular Web App",
    items: [
      { title: "Django", href: "/quickstart/django" },
      { title: "Laraval", href: "/quickstart/laraval" },
      { title: "Express", href: "/quickstart/express" },
      { title: "Go", href: "/quickstart/go" },
      { title: "Python", href: "/quickstart/python" },
      { title: "PHP", href: "/quickstart/php" },
      { title: "Next.js", href: "/quickstart/nextjs" },
      { title: "Ruby On Rails", href: "/quickstart/ruby_on_rails" },
      { title: "Java", href: "/quickstart/java" },
    ],
  },
  {
    title: "Single Page App",
    items: [
      { title: "Angular", href: "/quickstart/angular" },
      { title: "Javascript", href: "/quickstart/javascript" },
      { title: "React", href: "/quickstart/react" },
      { title: "Vue", href: "/quickstart/vue" },
    ],
  },
  {
    title: "Native/Mobile App",
    items: [
      { title: "Android", href: "/quickstart/android" },
      { title: "Flutter", href: "/quickstart/flutter" },
      { title: "IOS / macOS", href: "/quickstart/ios" },
      { title: "React Native", href: "/quickstart/react_native" },
    ],
  },
  {
    title: "Backend/API",
    items: [
      { title: "Django API", href: "/quickstart/django_api" },
      { title: "Python API", href: "/quickstart/python_api" },
      { title: "PHP API", href: "/quickstart/php_api" },
      { title: "Laraval API", href: "/quickstart/laraval_api" },
      { title: "Ruby On Rails API", href: "/quickstart/ruby_on_rails_api" },
      { title: "Go API", href: "/quickstart/go_api" },
      { title: "Node (Express) API", href: "/quickstart/node_express_api" },
    ],
  },
];

export default function QuickstartWrapper(props: WrapperProps) {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Box pos="fixed" w="100%" bgColor={bgColor} zIndex={100}>
        <Header />
      </Box>
      <Box pt="64px">
        <Sidebar options={options}>{props.children}</Sidebar>
      </Box>
    </>
  );
}