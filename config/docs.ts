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
      icon: "radix",
    },
    {
      title: "Resources",
      items: [
        {
          title: "Merchant Currency",
          href: "/docs/currency",
          items: [],
        },
        {
          title: "BDT Bank Code",
          href: "/docs/bank/bdt",
          items: [],
        },
        {
          title: "BRL Bank Code",
          href: "/docs/bank/brl",
          items: [],
        },
        {
          title: "CNY Bank Code",
          href: "/docs/bank/cny",
          items: [],
        },
        {
          title: "IDR Bank Code",
          href: "/docs/bank/idr",
          items: [],
        },
        {
          title: "JPY Bank Code",
          href: "/docs/bank/jpy",
          items: [],
        },
        {
          title: "KRW Bank Code",
          href: "/docs/bank/krw",
          items: [],
        },
        {
          title: "MYR Bank Code",
          href: "/docs/bank/myr",
          items: [],
        },
        {
          title: "PHP Bank Code",
          href: "/docs/bank/php",
          items: [],
        },
        {
          title: "THB Bank Code",
          href: "/docs/bank/thb",
          items: [],
        },
        {
          title: "VND Bank Code",
          href: "/docs/bank/vnd",
          items: [],
        },
      ],
    },
    {
      title: "API References",
      items: [
        {
          title: "Overview",
          href: "/api",
          items: [],
        },
        {
          title: "Payment Request",
          href: "/api/payment",
          items: [],
          label: "GET",
        },
        {
          title: "Transaction Status",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Payout Request",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Get Balance",
          href: "/api/payment",
          items: [],
          label: "GET",
        },
      ],
    },
    {
      title: "Payment Request V3",
      items: [
        {
          title: "Payment Request (for INR, BDT, VND, JPY, BRL)",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Payment Request (for KRW only)",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Submit UTR API (for INR Only)",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Submit RefNo API (for BDT only)",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Submit Depositor Account (for KRW only)",
          href: "/api/payment",
          items: [],
          label: "POST",
        },
      ],
    },
    {
      title: "Callback",
      items: [
        {
          title: "Callback Page",
          href: "/api/callback/page",
          items: [],
        },
        {
          title: "Deposit Callback ",
          href: "/api/callback/deposit",
          items: [],
        },
        {
          title: "Payout Callback",
          href: "/api/callback/payout",
          items: [],
        },
      ],
    },
    {
      title: "Status",
      items: [
        {
          title: "Deposit Transaction",
          href: "/api/status/deposit",
          items: [],
        },
        {
          title: "Payout Transaction",
          href: "/api/status/payout",
          items: [],
        },
      ],
    },
    {
      title: "Error",
      items: [
        {
          title: "Payment Error",
          href: "/api/errors/deposit",
          items: [],
        },
        {
          title: "Payout Error",
          href: "/api/errors/payout",
          items: [],
        },
      ],
    },
  ],
}
