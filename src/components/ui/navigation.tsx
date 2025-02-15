"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { NavigationData } from "@/configs/NavigationData";
import Link from "next/link";
import * as React from "react";

export default function Navigation() {
  return (
    <NavigationMenu dir="rtl" className="hidden md:flex">
      <NavigationMenuList>
        {!!NavigationData &&
          NavigationData.map((item, index) => (
            <NavigationMenuItem key={`navigation-menu-item-${index}`}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.content}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
