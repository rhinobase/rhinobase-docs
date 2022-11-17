import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import siteConfig from "./configs/site-config.json";
import getTableOfContents from "./utils/getTableOfContent";
// import { rehypeMdxCodeMeta } from "./src/utils/rehype-code-meta";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

const User = defineNestedType(() => ({
  name: "User",
  fields: {
    profile_image: { type: "string", required: true },
    name: { type: "string", required: true },
  },
}));

const Guides = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "quickstart/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    user: { type: "nested", of: User },
    category: { type: "string" },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        ...doc,
        slug: `/${doc._raw.flattenedPath}`,
        headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "article/**/*.mdx",
  contentType: "mdx",
  fields: {
    image: { type: "string", required: true },
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tag: { type: "string" },
    user: { type: "nested", of: User },
    date: { type: "string" },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: "json",
      resolve: (doc) => ({
        ...doc,
        date: new Date(doc.date ?? "").toISOString(),
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
