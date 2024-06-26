import { docsConfig } from "config/docs"
import { unstable_setRequestLocale } from "next-intl/server"

import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsSidebarNav } from "@/components/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function DocsLayout({
  children,
  params: { locale },
}: DocsLayoutProps) {
  unstable_setRequestLocale(locale)

  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-4.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}
