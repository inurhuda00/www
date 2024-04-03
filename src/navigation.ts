import { locales } from "config/site"
import { createSharedPathnamesNavigation } from "next-intl/navigation"

export { locales }
export const localePrefix = "as-needed" // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
