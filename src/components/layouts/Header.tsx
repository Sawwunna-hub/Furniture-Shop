import { NavigationMenuMain } from "@/components/layouts/Navigation"; //shadcn
import { siteConfig } from "@/config/site";
import { MobileNavigation } from "./MobileNavigation";
import { ModeToggle } from "@/components/mode-toggle";

function Header() {
  return (
    <header className="w-full border-b-2 sticky top-0 z-50 bg-background">
      <nav className="container h-16 flex items-center mx-auto">
        <NavigationMenuMain menuItems={siteConfig.mainNav} />
        <MobileNavigation menuItems={siteConfig.mainNav} />
        <div className="flex flex-1 justify-end space-x-4 items-center pr-4 lg:pr-8">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
