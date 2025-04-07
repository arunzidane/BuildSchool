"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "./logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
        <span className="font-bold text-xl">VibeTribe.AI</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/features" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Features</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hidden md:block">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link href="/signup">
          <Button>Start Free</Button>
        </Link>
      </div>
    </div>
  )
}

