import FrontChapter from "@/components/logos/front-chapter";
import { Button } from "@/components/ui/button";
import {
  NavbarCenter,
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import Navigation from "@/components/ui/navigation";
import { TicketIcon } from "lucide-react";
import Link from "next/link";

export default function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background backdrop-blur-lg dark:bg-background-dark"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <FrontChapter />
              فرانت چپتر
            </Link>
          </NavbarLeft>
          <NavbarCenter className="hidden h-11 w-96 rounded-[12px] border border-[#09090B]/10 dark:border-white/10 md:flex">
            <Navigation />
          </NavbarCenter>

          <NavbarRight>
            <Button variant="glow" size="lg" className="flex gap-2">
              <TicketIcon className="h-4 w-4" />
              <Link href="/">خرید بلیت</Link>
            </Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
