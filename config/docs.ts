import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Pre Requirement",
          href: "/docs/security",
          items: [],
        },
      ],
      icon: "radix"
    },
    {
      title: "Resources",
      items: [
        {
          title: "Merchant Currency",
          href: "/currency",
          items: []
        },
        {
          title: "BDT Bank Code", 
          href: "/bank/bdt",
          items: [],
        },
        {
          title: "BRL Bank Code", 
          href: "/bank/brl",
          items: [],
        },
        {
          title: "CNY Bank Code", 
          href: "/bank/cny",
          items: [],
        },
        {
          title: "IDR Bank Code", 
          href: "/bank/idr",
          items: [],
        },
        {
          title: "JPY Bank Code", 
          href: "/bank/jpy",
          items: [],
        },
        {
          title: "KRW Bank Code", 
          href: "/bank/krw",
          items: [],
        },
        {
          title: "MYR Bank Code", 
          href: "/bank/myr",
          items: [],
        },
        {
          title: "PHP Bank Code", 
          href: "/bank/php",
          items: [],
        },
        {
          title: "THB Bank Code", 
          href: "/bank/thb",
          items: [],
        },
        {
          title: "VND Bank Code", 
          href: "/bank/vnd",
          items: [],
        },
      ],
    },
    {
      title: "API References",
      items: [
        {
          title: "Overview",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Payment Request",
          href: "/docs/api",
          items: [],
          label: "GET"
        },
        {
          title: "Transaction Status",
          href: "/docs/api",
          items: [],
          label: "POST"
        },
        {
          title: "Payout Request",
          href: "/docs/api",
          items: [],
          label: "POST"
        },
        {
          title: "Get Balance",
          href: "/docs/api",
          items: [],
          label: "GET"
        },
      ],
    },
    {
      title: "Payment Request V3",
      items: [
        {
          title: "Payment Request (for INR, BDT, VND, JPY, BRL)",
          href: "/docs/api",
          items: [],
          label: "POST"
        },
        {
          title: "Payment Request (for KRW only)",
          href: "/docs/api",
          items: [],
          label: "POST"
        },
        {
          title: "Submit UTR API (for INR Only)",
          href: "/docs/api",
          items: [],
          label: "POST"
        },
        {
          title: "Submit RefNo API (for BDT only)",
          href: "/docs/components/accordion",
          items: [],
          label: "POST"
        },
        {
          title: "Submit Depositor Account (for KRW only)",
          href: "/docs/components/accordion",
          items: [],
          label: "POST"
        },
      ],
    },
    {
      title: "Status",
      items: [
        {
          title: "Deposit Transaction",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Payout Transaction",
          href: "/docs/api",
          items: [],
        },
       
      ],
    },
    {
      title: "Error",
      items: [
        {
          title: "Payment Error",
          href: "/docs/api",
          items: [],
        },
        {
          title: "Payout Error",
          href: "/docs/api",
          items: [],
        },
       
      ],
    },
  ],
}
