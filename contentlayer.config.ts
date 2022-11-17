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
        // headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "article/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    author: { type: "string" },
    publishedDate: { type: "string" },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        publishedDate: {
          raw: doc.publishedDate,
          // iso: new Date(doc.publishedDate).toISOString(),
          // text: new Date(doc.publishedDate).toDateString(),
        },
        author: doc.author,
        title: doc.title,
        description: doc.description,
        slug: `/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string" },
    package: { type: "string" },
    description: { type: "string" },
    id: { type: "string" },
    scope: {
      type: "enum",
      options: ["usage", "theming", "props"],
      default: "usage",
    },
    version: { type: "string" },
    author: { type: "string" },
    video: { type: "string" },
    category: { type: "string" },
    aria: { type: "string" },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        // headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}));

const Changelog = defineDocumentType(() => ({
  name: "Changelog",
  filePathPattern: "changelog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    slug: { type: "string" },
    version: { type: "string" },
    releaseUrl: { type: "string" },
    releaseDate: { type: "string" },
  },
  computedFields: {
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        title: doc.title,
        description: doc.description,
        slug: "/changelog",
        version: doc.version,
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article, Changelog, Doc, Guides],
  mdx: {
    // rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
});
