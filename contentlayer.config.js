import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { codeImport } from "remark-code-import"
import remarkGfm from "remark-gfm"
import { getHighlighter } from "shiki"
import { visit } from "unist-util-visit"

import { locales } from "./config/site"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => {
      // check if path provide
      return doc.path
        ? doc.path
        : doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
  },
  locale: {
    type: "enum",
    of: locales.concat([null]),
    resolve: (doc) => {
      const locale = doc._raw.flattenedPath.split("/")[0]
      return locales.includes(locale) ? locale : null
    },
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    path: {
      type: "string",
    },
    tag: {
      type: "string",
    },
    label: {
      type: "string",
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children
            if (codeEl.tagName !== "code") {
              return
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/
              const match = codeEl.data?.meta.match(regex)
              if (match) {
                node.__event__ = match ? match[1] : null
                codeEl.data.meta = codeEl.data.meta.replace(regex, "")
              }
            }

            node.__rawString__ = codeEl.children?.[0].value
            node.__src__ = node.properties?.__src__
            node.__style__ = node.properties?.__style__
          }
        })
      },
      [
        rehypePrettyCode,
        {
          defaultLang: "json",
          getHighlighter: async () => {
            const highlighter = await getHighlighter({
              langs: ["ts", "js", "php", "c#", "java"],
              langAlias: {
                200: "json",
                201: "json",
                400: "json",
                109: "json",
                110: "json",
                111: "json",
                112: "json",
                113: "json",
                114: "json",
                115: "json",
                116: "json",
                117: "json",
                118: "json",
                119: "json",
              },
              themes: ["github-dark-dimmed"],
            })

            return highlighter
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== "pre") {
              return
            }

            preElement.properties["__withMeta__"] =
              node.children.at(0).tagName === "div"
            preElement.properties["__rawString__"] = node.__rawString__

            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__
            }

            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__
            }
          }
        })
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
