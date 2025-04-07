"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Home, MessageSquare, Settings, Upload, Users } from "lucide-react"

const items = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Upload Data",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    name: "Audience",
    href: "/dashboard/audience",
    icon: Users,
  },
  {
    name: "Campaigns",
    href: "/dashboard/campaigns",
    icon: MessageSquare,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

interface DashboardNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  const pathname = usePathname()

  return (
    <div className={cn("py-4 w-64 border-r h-full hidden md:block", className)} {...props}>
      <div className="space-y-1 px-4">
        {items.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href ? "bg-vibetribe-lightViolet text-vibetribe-violet" : "text-muted-foreground",
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}

