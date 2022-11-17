import MDXComponents from "components/MDXComponents";
import { allGuides, Guide } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { toArray } from "utils/js-utils";
import MinimalWrapper from "components/wrapper/MinimalWrapper";
import { Box, Heading, HStack } from "@chakra-ui/react";
import TableOfContent from "components/TableOfContent";

export default function ArticleWrapper({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(doc.body.code);
  return (
    <HStack alignItems="start" gap={8} py={3}>
      <Box>
        <Heading as="h1" mb={2}>
          {doc.title}
        </Heading>
        <Heading as="h2" mb={5} color="GrayText" size="lg" fontWeight={500}>
          {doc.description}
        </Heading>
        <Component components={MDXComponents} />
      </Box>
      <TableOfContent source={doc.body.raw} />
    </HStack>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allGuides
    .map((t) => t._id.replace("articles/", "").replace(".mdx", ""))
    .map((id) => ({ params: { slug: id === "index" ? [] : id.split("/") } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = toArray(ctx.params?.slug ?? []);
  let doc: Guide | undefined;
  if (params.length === 0) {
    doc = allGuides.find((t) => t._id === "articles/index.mdx");
  } else {
    doc = allGuides.find((guide) =>
      guide._id.endsWith(`${params.join("/")}.mdx`),
    );
  }
  return { props: { doc } };
};

ArticleWrapper.getLayout = function getLayout(page: JSX.Element) {
  return <MinimalWrapper>{page}</MinimalWrapper>;
};
