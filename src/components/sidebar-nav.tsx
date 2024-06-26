"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { SidebarNavItem } from "types/nav"

import { cn } from "@/lib/utils"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()
  const t = useTranslations()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {t(item.title)}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  const t = useTranslations()

  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full gap-x-4 items-center rounded-md border border-transparent px-2 py-1",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.label && (
              <span className="w-11">
                <span
                  className={cn(
                    "ml-2 flex-1 rounded-md px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline",
                    colorForMethod(item.label)
                  )}
                >
                  {item.label}
                </span>
              </span>
            )}
            <span className="flex-1 flex items-center group-hover:underline">
              {t(item.title)}
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {t(item.title)}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}

function colorForMethod(method: string) {
  switch (method.toLowerCase()) {
    case "get":
      return "bg-[#adfa1d]"
    case "post":
      return "bg-[#ace2e1]"
    case "delete":
      return "delete"
    case "put":
      return "put"
    case "patch":
      return "warning"
    case "head":
      return "head"
    case "event":
      return "head"
    default:
      return undefined
  }
}
