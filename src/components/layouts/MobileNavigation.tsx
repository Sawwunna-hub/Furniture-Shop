import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { MainNavItem } from "@/types/MenuTypes";
import { Icon } from "@/Icons/Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MainNavigationProps {
  menuItems?: MainNavItem[];
}

export function MobileNavigation({ menuItems }: MainNavigationProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const query = "(min-width: 1024px)";

  useEffect(() => {
    function OnChange(event: MediaQueryListEvent) {
      setIsDesktop(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", OnChange);
    return () => result.removeEventListener("change", OnChange);
  }, []);

  if (isDesktop) {
    return null;
  }

  return (
    <div className="lg:hidden">
      <Sheet modal={false}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Icon.menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetClose asChild>
              <Link to="/" className="flex space-x-2">
                <Icon.logo />
                <SheetTitle>Furniture Shop</SheetTitle>
              </Link>
            </SheetClose>
          </SheetHeader>

          <SheetFooter>
            <Accordion type="multiple" className="max-w-lg px-4 border-b-2">
              <AccordionItem
                key={menuItems?.[0].title}
                value={menuItems?.[0].title || "Product"}
              >
                <AccordionTrigger className="">
                  {menuItems?.[0].title}
                </AccordionTrigger>
                {menuItems?.[0]?.card?.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link to={item?.href || ""}>
                      <AccordionContent className="ml-6">
                        {item.title}
                      </AccordionContent>
                    </Link>
                  </SheetClose>
                ))}
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-2 px-4 text-sm font-medium">
              {menuItems?.[0].menu?.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link to={item.href || ""} className="">
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
