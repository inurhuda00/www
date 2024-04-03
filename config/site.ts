export const locales = ["en", "id"] as const

export const siteConfig = {
  name: "seapay",
  url: "https://api-doc.s88pay.net",
  ogImage: "https://api-doc.s88pay.net/og.png",
  description: "Fundamental concepts of S88PAY Payment API.",
  links: {
    twitter: "",
    github: "",
  },
}

export type SiteConfig = typeof siteConfig
