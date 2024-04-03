"use client"

import { Children, PropsWithChildren, isValidElement } from "react"
import { List, Trigger } from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Tag } from "@/components/Tag"

function getPanelTitle(props: any) {
  if (props["data-language"] || props.Children) {
    return props.Children ?? props["data-language"]
  }

  return "Code"
}

function CodePanelHeader({ tag, label }: { tag?: string; label?: string }) {
  if (!tag && !label) {
    return null
  }

  return (
    <figcaption className="flex h-9 items-center gap-2 bg-primary/70 px-4">
      {tag && (
        <div className="dark flex">
          <Tag variant="small">{tag}</Tag>
        </div>
      )}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </figcaption>
  )
}

export function CodeGroup({
  children,
  ...props
}: PropsWithChildren<{
  tag?: string
  label?: string
  code?: string
  title: string
}>) {
  let languages =
    Children.map(children, (figure: any) =>
      Children.map(figure.props.children, (code) =>
        getPanelTitle(isValidElement(code) ? code.props : {})
      )
    ) ?? []

  languages = Array.from(new Set(languages.values()))

  return (
    <Tabs defaultValue={languages.at(0)}>
      <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-center gap-x-4 border-b border-primary bg-primary px-4  rounded-t-lg">
        <h3 className="mr-auto text-xs font-semibold text-primary-foreground">
          {props.title}
        </h3>
        <List className={cn("-mb-2 flex gap-4 text-xs")}>
          {languages.map((lang: string, index: number) => (
            <Trigger
              key={index}
              value={lang}
              className={cn(
                "data-[state=active]:border-b data-[state=active]:border-emerald-500 data-[state=active]:text-emerald-400 py-3 transition ui-not-focus-visible:outline-none text-secondary/50"
              )}
            >
              {lang}
            </Trigger>
          ))}
        </List>
      </div>
      <figure>
        {props.tag ? (
          <CodePanelHeader tag={props.tag} label={props.label} />
        ) : (
          <figcaption />
        )}
        {Children.map(children, (figure: any, index) => (
          <TabsContent
            key={index}
            value={figure.props.children.props["data-language"]}
          >
            {figure.props.children}
          </TabsContent>
        )) ?? []}
      </figure>
    </Tabs>
  )
}
