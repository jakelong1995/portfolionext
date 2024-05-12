import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";

export function Headerv2() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="mt-6 grid gap-4">
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              About
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              Services
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="ml-auto hidden lg:flex items-center gap-4">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
