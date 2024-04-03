import type { Metadata } from "next"

import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { ScrollArea } from "@/components//ui/scroll-area"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { notFound } from "next/navigation"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { allApis } from "contentlayer/generated"
import { unstable_setRequestLocale } from "next-intl/server"
import Balancer from "react-wrap-balancer"

import { generatePageMeta } from "@/lib/seo"
import { siteConfig } from "config/site"

interface ApiPageProps {
  params: {
    slug: string[]
    locale: string
  }
}

async function getApiFromParams(params: ApiPageProps["params"]) {
  const slug = params.slug?.join("/") || ""
  const locale = params?.locale

  if (!slug) {
    null
  }

  if (!locale) {
    null
  }

  const api = allApis.find((api) => api.slugAsParams === `api${slug ? `/${slug}` : ''}` && api.locale === locale)

  if (!api) {
    return null
  }

  return api
}

export async function generateMetadata({
  params,
}: ApiPageProps): Promise<Metadata> {
  const api = await getApiFromParams(params)

  if (!api) {
    return {}
  }

  return generatePageMeta({
    title: api.title,
    description: api.description,
    url: absoluteUrl(api.slug),
    image: siteConfig.ogImage,
    image_alt: api.title,
  })
}

export async function generateStaticParams(): Promise<
  ApiPageProps["params"][]
> {
  return allApis.map((api) => ({
    locale: api.locale,
    slug: api.slugAsParams.split("/"),
  }))
}

export default async function ApiPage({ params }: ApiPageProps) {
  unstable_setRequestLocale(params.locale)

  const api = await getApiFromParams(params)

  if (!api) notFound()

  const toc = await getTableOfContents(api.body.raw)

  return (
    <main
      className={cn(
        "relative py-6 lg:gap-10 lg:py-8 xl:grid",
        api.toc && "xl:grid-cols-[1fr_300px]"
      )}
    >
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Apis
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{api.title}</div>
        </div>
        <div className="space-y-2">
          {api.tag && api.label ? (
            <div className="flex items-center gap-x-3">
              <span className="font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400">
                {api.tag}
              </span>
              <span className="font-mono text-xs text-zinc-400">
                {api.label}
              </span>
            </div>
          ) : null}

          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {api.title}
          </h1>
          {api.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{api.description}</Balancer>
            </p>
          )}
        </div>

        <div className="pb-12 pt-8">
          <Mdx code={api.body.code} />
        </div>
        <DocsPager doc={api} />
      </div>
      {api.toc && (
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
