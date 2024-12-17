"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Code, Smartphone, Layout, ArrowBigUp } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const hasMeetingUrl = pathname === "/meeting";

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    { 
      title: "Services",
      items: [
        {
          title: "Web Development",
          href: "/services/web",
          icon: (
            <Code className="h-5 w-5 group-hover:text-primary dark:group-hover:text-primary" />
          ),
        },
        // {
        //   title: "Mobile Development",
        //   href: "/services/mobile",
        //   icon: (
        //     <Smartphone className="h-5 w-5 group-hover:text-primary dark:group-hover:text-primary" />
        //   ),
        // },
        {
          title: "UI/UX Design",
          href: "/services/design",
          icon: (
            <Layout className="h-5 w-5 group-hover:text-primary dark:group-hover:text-primary" />
          ),
        },
        {
          title: "Digital Marketing",
          href: "/services/marketing",
          icon: (
            <ArrowBigUp className="h-5 w-5 group-hover:text-primary dark:group-hover:text-primary" />
          ),
        },
      ],
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-extrabold text-primary">
              ASK.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "group backdrop-blur-sm bg-background/10 dark:bg-background/10 hover:bg-accent dark:hover:bg-accent transition-colors",
                            //@ts-ignore
                            pathname.startsWith(item.href) && "text-primary"
                          )}
                        >
                          <span>{item.title}</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 backdrop-blur-xl bg-background/80 dark:bg-background/80 rounded-lg border border-border">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent dark:hover:bg-accent focus:bg-accent",
                                      pathname === subItem.href &&
                                        "bg-accent text-accent-foreground"
                                    )}
                                  >
                                    <div className="flex items-center space-x-2">
                                      {subItem.icon}
                                      <span className="text-sm font-medium">
                                        {subItem.title}
                                      </span>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent dark:hover:bg-accent",
                            pathname === item.href &&
                              "bg-accent text-accent-foreground"
                          )}
                        >
                          <span>{item.title}</span>
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />

            {/* CTA Button */}
            {!hasMeetingUrl && (
              <Link href="/meeting">
                <div className="hidden md:block">
                  <Button
                    variant="default"
                    className="bg-primary/90 hover:bg-primary dark:bg-primary/90 dark:hover:bg-primary"
                  >
                    Book a Call
                  </Button>
                </div>
              </Link>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-accent dark:hover:bg-accent"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-background/80 dark:bg-background/80 border-t border-border">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <>
                    <div className="px-3 py-2 text-sm font-medium text-primary">
                      {item.title}
                    </div>
                    <div className="pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "block px-3 py-2 text-sm hover:bg-accent dark:hover:bg-accent rounded-md transition-colors",
                            pathname === subItem.href &&
                              "bg-accent text-accent-foreground"
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium hover:bg-accent dark:hover:bg-accent rounded-md transition-colors",
                      pathname === item.href &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            {!hasMeetingUrl && (
              <div className="px-3 py-2">
                <Button className="w-full bg-primary/90 hover:bg-primary dark:bg-primary/90 dark:hover:bg-primary">
                  Book Call
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
