import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ApplicationTypeTile from "components/ApplicationTypeTile";
import ComunityBanner from "components/ComunityBanner";
import PatternDots from "components/utils/PatternDots";

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
              image="https://via.placeholder.com/150?text=%20"
              title="Native/Mobile App"
              content="Mobile or Desktop app that runs natively on a device"
              example="e.g., IOS, Andriod"
            />
            <ApplicationTypeTile
              image="https://via.placeholder.com/150?text=%20"
              title="Single-Page App"
              content="JavaScript web app that runs in the browser"
              example="e.g., AngularJS + Node.js, React"
            />
            <ApplicationTypeTile
              image="https://via.placeholder.com/150?text=%20"
              title="Regular Web App"
              content="Traditional web app that runs on the server"
              example="e.g., Express.js, ASP.NET"
            />
            <ApplicationTypeTile
              image="https://via.placeholder.com/150?text=%20"
              title="Backend/API"
              content="An API or service protected by Auth0"
              example="e.g., Express.js API, ASP.NET API"
            />
          </SimpleGrid>
        </Container>
      </Box>
      <ComunityBanner />
    </>
  );
}
