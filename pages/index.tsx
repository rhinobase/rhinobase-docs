import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ApplicationTypeTile from "components/ApplicationTypeTile";
import ComunityBanner from "components/ComunityBanner";
import ContentTile from "components/ContentTile";
import HeroContentTile from "components/HeroContentTile";
import PatternDots from "components/utils/PatternDots";
import DefaultWrapper from "components/wrapper/DefaultWrapper";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaInnosoft } from "react-icons/fa";

export default function Home() {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Box py={5} pos="relative">
        <Box
          pos="absolute"
          w="100%"
          h="90%"
          bgColor={bgColor}
          top={0}
          left={0}
          borderBottomRadius="40px"
          zIndex="-1"
          overflow="hidden"
        >
          <PatternDots />
          <Box
            position="absolute"
            w="100%"
            h="100%"
            bgGradient={`linear(to-b, ${bgColor}, transparent)`}
          />
        </Box>
        <Container maxW="7xl">
          <Box my={20}>
            <Heading>Start Building</Heading>
            <Text fontSize="2xl" mb={10}>
              Choose your application type to get started
            </Text>
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={10}
            mx={{ base: 5, lg: 0 }}
          >
            <ApplicationTypeTile
              id="native"
              image="https://via.placeholder.com/150?text=%20"
              title="Native/Mobile App"
              content="Mobile or Desktop app that runs natively on a device"
              example="e.g., IOS, Andriod"
            />
            <ApplicationTypeTile
              id="singlepage"
              image="https://via.placeholder.com/150?text=%20"
              title="Single-Page App"
              content="JavaScript web app that runs in the browser"
              example="e.g., AngularJS + Node.js, React"
            />
            <ApplicationTypeTile
              id="regular"
              image="https://via.placeholder.com/150?text=%20"
              title="Regular Web App"
              content="Traditional web app that runs on the server"
              example="e.g., Express.js, ASP.NET"
            />
            <ApplicationTypeTile
              id="backend"
              image="https://via.placeholder.com/150?text=%20"
              title="Backend/API"
              content="An API or service protected by Auth0"
              example="e.g., Express.js API, ASP.NET API"
            />
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="7xl" my={8}>
        <HStack>
          <Text fontSize="2xl" as="b" ml={10}>
            Multiparty payments
          </Text>
          <Spacer />
          <Link href={""}>
            <Button
              variant="ghost"
              colorScheme="messenger"
              my={2}
              mx={10}
              rightIcon={<FaArrowRight />}
            >
              learn more
            </Button>
          </Link>
        </HStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          mt={8}
          mb={20}
          mx={8}
        >
          <ContentTile
            title={"Accept online payments"}
            href={""}
            image={"https://via.placeholder.com/150?text=%20"}
            description={
              "Build a payment form or use a prebuilt checkout page to accept online payments."
            }
            icon={<FaInnosoft size="20px" />}
            tags={["PAYMENTS"]}
          />
          <ContentTile
            title={"Create a subscription"}
            href={""}
            image={"https://via.placeholder.com/150?text=%20"}
            description={
              "Set up recurring billing for your SaaS or e-commerce business."
            }
            icon={<FaInnosoft size="20px" />}
            tags={["BILLING"]}
          />
          <ContentTile
            title={"Receive payouts"}
            href={""}
            image={"https://via.placeholder.com/150?text=%20"}
            description={"Set up your bank account to receive payouts."}
            icon={<FaInnosoft size="20px" />}
            tags={["PAYMENTS"]}
          />
        </SimpleGrid>
        <HStack>
          <Text fontSize="2xl" as="b" ml={10}>
            Clone a sample project
          </Text>
          <Spacer />
          <Link href={""}>
            <Button
              variant="ghost"
              colorScheme="messenger"
              my={2}
              mx={10}
              rightIcon={<FaArrowRight />}
            >
              learn more
            </Button>
          </Link>
        </HStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          mt={10}
          mb={20}
          mx={8}
        >
          <ContentTile
            title={"Accept a payments"}
            href={""}
            icon={<FaGithub size="20px" />}
            tags={["WEB", "IOS", "ANDROID"]}
          />
          <ContentTile
            title={"Start a simple subscription"}
            href={""}
            icon={<FaGithub size="20px" />}
            tags={["WEB", "MOBILE WEB"]}
          />
          <ContentTile
            title={"Use a prebuilt checkout form"}
            href={""}
            icon={<FaGithub size="20px" />}
            tags={["WEB", "MOBILE WEB"]}
          />
        </SimpleGrid>
        <HStack>
          <Text fontSize="2xl" as="b" ml={10}>
            Clone a sample project
          </Text>
          <Spacer />
          <Link href={""}>
            <Button
              variant="ghost"
              colorScheme="messenger"
              my={2}
              mx={10}
              rightIcon={<FaArrowRight />}
            >
              learn more
            </Button>
          </Link>
        </HStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          mt={10}
          mb={20}
          mx={8}
        >
          <ContentTile
            title={"How cards work"}
            href={""}
            description={
              "See how a credit or debit card payment works online step by step."
            }
          />
          <ContentTile
            title={"Payouts"}
            href={""}
            description={"Set up your bank account to receive payouts."}
          />
          <ContentTile
            title={"Declines"}
            href={""}
            description={"Identify causes and build automatic retires."}
          />
          <ContentTile
            title={"Receipts"}
            href={""}
            description={"Send email receipts built by us or customized."}
          />
          <ContentTile
            title={"Refunds"}
            href={""}
            description={
              "Refund or cancel customers' payments and avoid dispute."
            }
          />
          <ContentTile
            title={"Wbhook events"}
            href={""}
            description={
              "Get notified about payments events and trigger actions."
            }
          />
        </SimpleGrid>
        <HeroContentTile
        title={"Stripe CLI"}
        href={""}
        tag={"Set Up The CLI"}
        description={
          "Interact with Stripe from your terminal to bootstrap sample projects, send test mode API requests, and debug your integration."
        }
        image={"https://via.placeholder.com/150?text=%20"}
      />
      </Container>

      <ComunityBanner />
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultWrapper>{page}</DefaultWrapper>;
};
