import MDXComponents from "components/MDXComponents";
import { allArticles, Article } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { toArray } from "utils/js-utils";
import DefaultWrapper from "components/wrapper/DefaultWrapper";
import TableOfContent from "components/TableOfContent";

export default function ArticleWrapper({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(doc.body.code);
  return (
    <>
      <div className="container m-auto my-0 max-w-7xl lg:my-20">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-[2] px-4">
            <h1 className="mt-8 mb-1 text-3xl font-semibold">{doc.title}</h1>
            <h2 className="mt-8 text-xl font-medium">{doc.description}</h2>
            <div className="my-8 flex flex-col rounded-md bg-gray-100 p-2 dark:bg-slate-700 lg:hidden">
              <h1 className="ml-4 mt-3 text-xl font-bold text-default-500">
                Table of Content
              </h1>
              <TableOfContent headings={doc.frontMatter.headings} />
            </div>
            <div className="text-justify">
              <Component components={MDXComponents} />
            </div>
          </div>
          <div className="flex-[1]">
            <div className="sticky top-24">
              <TableOfContent headings={doc.frontMatter.headings} />
            </div>
          </div>
        </div>
      </div>
      {/* <Container maxW="6xl" my={{ base: 0, lg: 20 }}>
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
    </Container> */}
    </>
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
