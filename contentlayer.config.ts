import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import siteConfig from "./configs/site-config.json";
// import { getTableOfContents } from "./src/utils/get-table-of-contents";
// import { rehypeMdxCodeMeta } from "./src/utils/rehype-code-meta";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

const Guides = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "quickstart/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    category: { type: "string" },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        description: doc.description,
        tags: doc.tags,
        author: doc.author,
        slug: `/${doc._raw.flattenedPath}`,
        // editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        // headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Guides],
  mdx: {
    // rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
});
