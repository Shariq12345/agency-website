"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <footer className="bg-background border-t">
        {/* Newsletter Section */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for the latest insights and
                  updates.
                </p>
              </div>
              <div className="flex w-full max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="dark:invert"
                />
              </Link>
              <p className="text-muted-foreground mb-6">
                Crafting innovative digital experiences that drive business
                growth through creative strategy and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Projects", href: "/projects" },
                  { label: "Blog", href: "/blog" },
                  { label: "Careers", href: "/careers" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                {[
                  {
                    label: "Web Development",
                    href: "/services/web-development",
                  },
                  { label: "UI/UX Design", href: "/services/ui-ux-design" },
                  {
                    label: "Digital Marketing",
                    href: "/services/digital-marketing",
                  },
                  {
                    label: "Mobile Development",
                    href: "/services/mobile-development",
                  },
                  {
                    label: "Cloud Solutions",
                    href: "/services/cloud-solutions",
                  },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    123 Business Street, Suite 100, New York, NY 10001
                  </span>
                </li>
                <li>
                  <Link
                    href="mailto:contact@example.com"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    contact@example.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+1234567890"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +1 (234) 567-890
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="sm text-muted-foreground">
                © {currentYear} Your Company Name. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}