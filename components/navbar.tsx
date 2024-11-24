"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Layout,
  // PaintBrush,
  Phone,
  Info,
  Home,
  FileText,
  ArrowBigUp,
} from "lucide-react"; // Importing specific icons for sub-items
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Services",
      items: [
        {
          title: "Web Development",
          href: "#",
          icon: (
            <Code className="h-5 w-5 text-gray-600 group-hover:text-primary" />
          ), // Icon for Web Development
        },
        {
          title: "Mobile Development",
          href: "#",
          icon: (
            <Smartphone className="h-5 w-5 text-gray-600 group-hover:text-primary" />
          ), // Icon for Mobile Development
        },
        {
          title: "UI/UX Design",
          href: "#",
          icon: (
            <Layout className="h-5 w-5 text-gray-600 group-hover:text-primary" />
          ), // Icon for UI/UX Design
        },
        {
          title: "Branding",
          href: "#",
          icon: (
            <ArrowBigUp className="h-5 w-5 text-gray-600 group-hover:text-primary" />
          ), // Icon for Branding
        },
      ],
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/25 backdrop-blur-xl border-b border-white/30 supports-[backdrop-filter]:bg-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-primary">
              Nexus.
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="group backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors flex items-center space-x-2">
                          {""}
                          <span>{item.title}</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 backdrop-blur-xl bg-white/50 rounded-lg border border-white/30">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/30 focus:bg-white/30"
                                  >
                                    <div className="flex items-center space-x-2">
                                      {subItem.icon}
                                      <span className="text-sm font-medium">
                                        {subItem.title}
                                      </span>
                                    </div>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20 backdrop-blur-sm"
                        >
                          <span className="ml-2">{item.title}</span>
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="backdrop-blur-sm bg-primary/80 hover:bg-primary/90"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-white/20"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-white/50 border-t border-white/30">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <>
                    <div className="px-3 py-2 text-sm font-medium text-primary">
                      {item.title}
                    </div>
                    <div className="pl-4">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-white/30 rounded-md transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium hover:bg-white/30 rounded-md transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full backdrop-blur-sm bg-primary/80 hover:bg-primary/90">
                Start Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
