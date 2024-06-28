"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café de grano",
    href: "/category/grano",
    description:
      "Descubre el sabor auténtico y puro de granos de café de especialidad.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "Para los amantes del café que buscan conveniencia y calidad.",
  },
  {
    title: "Café en cápsula",
    href: "/category/capsula",
    description: "Diseñadas para quienes valoran la rapidez y buen sabor.",
  },
];


const  MenuList = () => {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/aboutus"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">WebCoffee</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Descubre la esencia del café en nuestro E-commerce, especializado en ofrecerte los más finos
                        granos de Brasil, Colombia, Honduras y Perú. Sumérgete en una experiencia sensorial única con
                        nuestras selecciones de café.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {/* <ListItem href="/shopping" title="Tienda">
                  Toda tu información y el estado de sus pedidos.
                </ListItem> */}
                <ListItem href="/offers" title="Ofertas">
                  Un 20% de descuento en tu primera compra.
                </ListItem>
                {/* <ListItem href="/accesories" title="Accesorios">
                  Lo que necesitas para disfrutar y preparar la taza perfecta.
                </ListItem> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Link href="/accesories" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Accesorios</NavigationMenuLink>
            </Link> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

}

export default MenuList

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

