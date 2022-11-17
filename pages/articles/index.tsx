import { Container, SimpleGrid } from "@chakra-ui/react";
import { allArticles } from ".contentlayer/generated";
import ArticleTile, { ArticleTileType } from "components/ArticleTile";

export default function Articles() {
  return (
    <Container maxW="7xl" my={20}>
      <SimpleGrid gap={10} columns={{ base: 1, md: 2 }}>
        {allArticles.map((item, index) => (
          <ArticleTile key={index} id={item.slug} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
