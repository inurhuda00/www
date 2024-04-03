import type { Metadata } from "next"

import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { ScrollArea } from "@/components//ui/scroll-area"
import { Mdx } from "@/components/mdx-components"
import { DashboardTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { notFound } from "next/navigation"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { siteConfig } from "config/site"
import { allPages } from "contentlayer/generated"
import { unstable_setRequestLocale } from "next-intl/server"
import Balancer from "react-wrap-balancer"

import { generatePageMeta } from "@/lib/seo"
import { PagePager } from "@/components/pager"

interface PageProps {
  params: {
    page: string[]
    locale: string
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params.page?.join("/") || ""
  const locale = params?.locale

  if (!slug) {
    null
  }

  if (!locale) {
    null
  }

  const page = allPages.find(
    (page) => page.slugAsParams === slug && page.locale === locale
  )

  if (!page) {
    return null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return generatePageMeta({
    title: page.title,
    description: page.description,
    url: absoluteUrl(page.slug),
    image: siteConfig.ogImage,
    image_alt: page.title,
  })
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    locale: page.locale,
    page: page.slugAsParams.split("/"),
  }))
}

export default async function ApiPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale)

  const page = await getPageFromParams(params)

  if (!page) notFound()

  const toc = await getTableOfContents(page.body.raw)

  return (
    <main
      className={cn(
        "relative py-6 lg:gap-10 lg:py-8 xl:grid",
        page.toc && "xl:grid-cols-[1fr_300px]"
      )}
    >
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Apis
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{page.title}</div>
        </div>
        <div className="space-y-2">
          {page.tag && page.label ? (
            <div className="flex items-center gap-x-3">
              <span className="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400">
                {page.tag}
              </span>
              <span className="font-mono text-xs text-zinc-400">
                {page.label}
              </span>
            </div>
          ) : null}

          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {page.title}
          </h1>
          {page.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{page.description}</Balancer>
            </p>
          )}
        </div>

        <div className="pb-12 pt-8">
          <Mdx code={page.body.code} />
        </div>
        <PagePager page={page} />
      </div>
      {page.toc && (
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
