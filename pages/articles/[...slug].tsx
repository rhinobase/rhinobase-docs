import MDXComponents from "components/MDXComponents";
import { allArticles, Article } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { toArray } from "utils/js-utils";
import DefaultWrapper from "components/wrapper/DefaultWrapper";
import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import TableOfContent from "components/TableOfContent";

export default function ArticleWrapper({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(doc.body.code);
  return (
    <Container maxW="6xl" my={{ base: 0, lg: 20 }}>
      <HStack alignItems="start" gap={8} py={3}>
        <Box>
          <Heading as="h1" apply="mdx.h1" fontSize={{ base: "26px" }}>
            {doc.title}
          </Heading>
          <Heading
            as="h2"
            apply="mdx.h2"
            fontSize={{ base: "22px" }}
            my={8}
            color="GrayText"
            size="lg"
            fontWeight={500}
          >
            {doc.description}
          </Heading>
          <Box
            minH="200px"
            bgColor="gray.100"
            p={4}
            borderRadius="md"
            flexDir="column"
            display={
              doc.frontMatter.headings.length == 0
                ? "none"
                : { base: "flex", lg: "none" }
            }
          >
            <Heading textColor="messenger.600" size="md" textAlign="center">
              Table of Content
            </Heading>
            <TableOfContent headings={doc.frontMatter.headings} />
          </Box>
          <Component components={MDXComponents} />
        </Box>
        <Box
          position="sticky"
          top="64px"
          alignItems="start"
          display={{ base: "none", lg: "flex" }}
        >
          <TableOfContent headings={doc.frontMatter.headings} />
        </Box>
      </HStack>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allArticles
    .map((t) => t._id.replace("articles/", "").replace(".mdx", ""))
    .map((id) => ({ params: { slug: id === "index" ? [] : id.split("/") } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = toArray(ctx.params?.slug ?? []);
  let doc: Article | undefined;
  if (params.length === 0) {
    doc = allArticles.find((t) => t._id === "articles/index.mdx");
  } else {
    doc = allArticles.find((article) =>
      article._id.endsWith(`${params.join("/")}.mdx`),
    );
  }
  return { props: { doc } };
};

ArticleWrapper.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultWrapper>{page}</DefaultWrapper>;
};
