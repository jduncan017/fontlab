"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const logo = theme === "light" ? "/logo-light.png" : "/logo-dark.png";
  const navItems = [
    // { label: "SERVICES", href: "#" },
    // { label: "PRICING", href: "#" },
    // { label: "FAQS", href: "#" },
    { label: "Home", href: "https://www.digitalnovastudio.com" },
    {
      label: "Articles",
      href: "https://www.digitalnovastudio.com/educational-articles",
    },
  ];

  return (
    <header className="NavBar bg-background2 shadow-themeBase text-foreground2">
      <nav className="mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-full">
            <Link href="https://www.digitalnovastudio.com">
              <Image
                src={logo}
                alt="DigitalNova"
                className=""
                width={210}
                height={58}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="rounded-md bg-white p-2 shadow-md hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-black" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background2 w-[300px]">
                <SheetTitle className="text-foreground2">
                  Navigation Menu
                </SheetTitle>
                <div className="mt-6 flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="hover:text-primary text-lg font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
