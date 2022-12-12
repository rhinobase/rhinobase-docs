import { allArticles } from ".contentlayer/generated";
import ArticleTile from "components/ArticleTile";

export default function Articles() {
  return (
    <>
      <div className="">
        <div className="container m-auto max-w-7xl py-20 px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((item, index) => (
              <ArticleTile key={index} href={item.slug} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* <Container maxW="7xl" my={20}>
      <SimpleGrid gap={10} columns={{ base: 1, md: 2, lg: 3 }}>
        {allArticles.map((item, index) => (
          <ArticleTile key={index} href={item.slug} {...item} />
        ))}
      </SimpleGrid>
    </Container> */}
    </>
  );
}
