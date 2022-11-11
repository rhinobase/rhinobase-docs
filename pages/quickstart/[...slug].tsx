import MDXComponents from "components/MDXComponents";
import { allGuides, Guide } from ".contentlayer/generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { toArray } from "utils/js-utils";
import QuickstartWrapper from "components/wrapper/QuickstartWrapper";

export default function QuickstartPage({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(doc.body.code);
  return <Component components={MDXComponents} />;
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
