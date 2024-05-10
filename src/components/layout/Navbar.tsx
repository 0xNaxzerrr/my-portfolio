import React from "react";
import {
  Moon,
  Sun,
  MailOpen,
  Hammer,
  MessageCircle,
  Menu,
  Brain,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  setContent: (content: string) => void;
}
function Navbar({ setContent }: NavbarProps) {
  const { setTheme } = useTheme();
  return (
    <header className="rounded z-50 backdrop-blur-lg dark:bg-slate-900/20 bg-slate-50 justify-between sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Button
          onClick={() => setContent("aboutme")}
          variant="link"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <MessageCircle className="mr-2 h-6 w-6" /> Know me
        </Button>
        <Button
          onClick={() => setContent("projects")}
          variant="link"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Hammer className="mr-2 h-6 w-6" />
          What i&apos;ve built
        </Button>
        <Button
          onClick={() => setContent("skills")}
          variant="link"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Brain className="h-6 w-6 mr-2" />
          Skills
        </Button>
        <Button
          onClick={() => setContent("contact")}
          variant="link"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <MailOpen className="mr-2 h-6 w-6" />
          Hire me
        </Button>
      </nav>
      <nav className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setContent("aboutme")}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Know me
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setContent("projects")}>
              <Hammer className="mr-2 h-4 w-4" />
              What i&apos;ve built
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setContent("skills")}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Skills
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setContent("contact")}>
              <MailOpen className="mr-2 h-4 w-4" />
              Hire me
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="flex-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Navbar;
