import MDXComponents from "components/MDXComponents";
import { allGuides, Guide } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { toArray } from "utils/js-utils";
import QuickstartWrapper from "components/wrapper/QuickstartWrapper";
import TableOfContent from "components/TableOfContent";

export default function QuickstartPage({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(doc.body.code);
  return (
    <>
      <div className="flex flex-col py-10">
        <div>
          <h1 className="mb-4 text-4xl">{doc.title}</h1>
          <h2 className="mb-6 text-2xl">{doc.description}</h2>
          <Component components={MDXComponents} />
        </div>
        <TableOfContent headings={doc.frontMatter.headings} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allGuides
    .map((t) => t._id.replace("quickstart/", "").replace(".mdx", ""))
    .map((id) => ({ params: { slug: id === "index" ? [] : id.split("/") } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = toArray(ctx.params?.slug ?? []);
  let doc: Guide | undefined;
  if (params.length === 0) {
    doc = allGuides.find((t) => t._id === "quickstart/index.mdx");
  } else {
    doc = allGuides.find((guide) =>
      guide._id.endsWith(`${params.join("/")}.mdx`),
    );
  }
  return { props: { doc } };
};

QuickstartPage.getLayout = function getLayout(page: JSX.Element) {
  return <QuickstartWrapper>{page}</QuickstartWrapper>;
};
