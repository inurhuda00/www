"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/docs", text: "Docs" },
    { href: "/docs/api", text: "API" },
  ]

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2 ">
        <Icons.logo className="h-6 w-6" />
      </Link>
      <nav className="flex items-center gap-6 text-sm">
      {navLinks.map((link, index) => (
        <Link
        key={index}
        href={link.href}
        className={cn(
          "transition-colors hover:text-light/80",
          pathname === link.href ? "text-light" : "text-light/60"
        )}
      >
        {link.text}
      </Link>
      ))}
      </nav>
    </div>
  )
}
