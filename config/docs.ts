import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Nav.documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Nav.getting-started",
      items: [
        {
          title: "Nav.introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Nav.pre-requirement",
          href: "/docs/security",
          items: [],
        },
      ],
      icon: "radix",
    },
    {
      title: "Nav.resources",
      items: [
        {
          title: "Nav.merchant-currency",
          href: "/docs/currency",
          items: [],
        },
        {
          title: "Nav.bdt-bank-code",
          href: "/docs/bank/bdt",
          items: [],
        },
        {
          title: "Nav.brl-bank-code",
          href: "/docs/bank/brl",
          items: [],
        },
        {
          title: "Nav.cny-bank-code",
          href: "/docs/bank/cny",
          items: [],
        },
        {
          title: "Nav.idr-bank-code",
          href: "/docs/bank/idr",
          items: [],
        },
        {
          title: "Nav.jpy-bank-code",
          href: "/docs/bank/jpy",
          items: [],
        },
        {
          title: "Nav.krw-bank-code",
          href: "/docs/bank/krw",
          items: [],
        },
        {
          title: "Nav.myr-bank-code",
          href: "/docs/bank/myr",
          items: [],
        },
        {
          title: "Nav.php-bank-code",
          href: "/docs/bank/php",
          items: [],
        },
        {
          title: "Nav.thb-bank-code",
          href: "/docs/bank/thb",
          items: [],
        },
        {
          title: "Nav.vnd-bank-code",
          href: "/docs/bank/vnd",
          items: [],
        },
      ],
    },
    {
      title: "Nav.api-references",
      items: [
        {
          title: "Nav.overview",
          href: "/api",
          items: [],
        },
        {
          title: "Nav.deposit-transaction",
          href: "/api/status/deposit",
          items: [],
        },
        {
          title: "Nav.payout-transaction",
          href: "/api/status/payout-transaction",
          items: [],
        },
      ],
    },
    {
      title: "Nav.api-function",
      items: [
        {
          title: "Nav.payment-request",
          href: "/api/payment",
          items: [],
          label: "GET",
        },
        {
          title: "Nav.transaction-status",
          href: "/api/transaction-status",
          items: [],
          label: "POST",
        },
        {
          title: "Nav.payout-request",
          href: "/api/payout",
          items: [],
          label: "POST",
        },
        {
          title: "Nav.get-balance",
          href: "/api/balance",
          items: [],
          label: "GET",
        },
      ],
    },
    {
      title: "Nav.api-function-v3",
      items: [
        {
          title: "Nav.v3.payment",
          href: "/api/v3/payment",
          items: [],
          label: "POST",
        },
        {
          title: "Nav.v3.krw-payment",
          href: "/api/v3/krw-payment",
          items: [],
          label: "POST",
        },
        {
          title: "Nav.v3.submit-utr",
          href: "/api/v3/submit-utr",
          items: [],
          label: "POST",
        },
        {
          title: "Nav.v3.submit-depositor",
          href: "/api/v3/krw-depositor",
          items: [],
          label: "POST",
        },
      ],
    },
    {
      title: "Nav.callback",
      items: [
        {
          title: "Nav.callback-page",
          href: "/api/callback/page",
          items: [],
        },
        {
          title: "Nav.deposit-callback",
          href: "/api/callback/deposit",
          items: [],
        },
        {
          title: "Nav.payout-callback",
          href: "/api/callback/payout",
          items: [],
        },
      ],
    },
    {
      title: "Nav.error",
      items: [
        {
          title: "Nav.payment-error",
          href: "/api/errors/deposit",
          items: [],
        },
        {
          title: "Nav.payout-error",
          href: "/api/errors/payout",
          items: [],
        },
      ],
    },
  ],
}
