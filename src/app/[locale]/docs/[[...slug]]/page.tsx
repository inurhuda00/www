import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "config/site"

import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { badgeVariants } from "@/components//ui/badge"
import { ScrollArea } from "@/components//ui/scroll-area"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { redirect } from "@/navigation"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { allDocs } from "contentlayer/generated"
import { unstable_setRequestLocale } from "next-intl/server"
import Balancer from "react-wrap-balancer"
import { generatePageMeta } from "@/lib/seo"
import { notFound } from "next/navigation"

interface DocPageProps {
  params: {
    slug: string[]
    locale: string
  }
}

async function getDocFromParams(params: DocPageProps['params']) {
  const slug = params.slug?.join("/") || ""
  const locale = params?.locale

  if (!slug) {
    null
  }

  if (!locale) {
    null
  }

  const doc = allDocs.find((api) => api.slugAsParams === `docs${slug ? `/${slug}` : ''}` && api.locale === locale)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params)

  if (!doc) {
    return {}
  }

  return generatePageMeta({
    title: doc.title,
    description: doc.description,
    url: absoluteUrl(doc.slug),
    image: siteConfig.ogImage,
    image_alt: doc.title,
  })
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    locale: doc.locale,
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  unstable_setRequestLocale(params.locale)

  const doc = await getDocFromParams(params)

  if (!doc) notFound()


  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main
      className={cn(
        "relative py-6 lg:gap-10 lg:py-8 xl:grid",
        doc.toc && "xl:grid-cols-[1fr_300px]"
      )}
    >
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
