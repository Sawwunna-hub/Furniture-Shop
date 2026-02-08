import * as React from "react";
import { Link } from "react-router";
import { navigationMenuTriggerStyle } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { MainNavItem } from "@/types/MenuTypes";
import { Icon } from "@/Icons/Icons";

interface MainNavigationProps {
  menuItems?: MainNavItem[];
}

export function NavigationMenuMain({ menuItems }: MainNavigationProps) {
  return (
    <div className="hidden lg:flex gap-24 ">
      <Link to="/" className="flex space-x-2 items-center">
        <Icon.logo className="size-7" />
        <span className="font-bold inline-block">Furniture Shop</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems?.[0]?.card && (
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>
                {menuItems[0].title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                  {menuItems[0].card.map((item) => (
                    <ListItem
                      key={item.title}
                      href={item.href || ""}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
          {menuItems?.[0]?.menu && (
            <NavigationMenuItem>
              {menuItems[0].menu?.map((item) => (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                  key={item.title}
                >
                  <Link to={item.href || ""}>{item.title}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
