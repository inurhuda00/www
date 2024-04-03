import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { locales } from "config/site";

export { locales };
export const localePrefix = "as-needed" // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
