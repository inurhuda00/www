"use client"

import { useTransition } from "react"
import { useParams } from "next/navigation"
import { usePathname, useRouter } from "@/navigation"
import { useLocale } from "next-intl"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LocaleSwitcher({ locales }: { locales: readonly string[] }) {
  const locale = useLocale()
  const params = useParams()
  const router = useRouter()

  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  const changeLanguage = (locale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-light">
          {locale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => changeLanguage(locale)}>
            {locale}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
