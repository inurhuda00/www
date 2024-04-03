import createMiddleware from "next-intl/middleware"

import { localePrefix, locales } from "./navigation"

export default createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
})

export const config = {
  matcher: [
    // Match only internationalized pathnames
    "/",
    "/(en)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
}
