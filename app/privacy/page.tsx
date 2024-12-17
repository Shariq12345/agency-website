"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  ScrollText,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const policyItems = [
  {
    icon: Eye,
    title: "Information Collection",
    content: `We collect information that you provide directly to us, including:
      • Name and contact information
      • Project requirements and preferences
      • Communication records and design feedback
      • Payment information for services rendered`,
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: `We implement robust security measures to protect your information:
      • Encrypted data transmission
      • Secure cloud storage
      • Regular security audits
      • Limited access to authorized personnel only`,
  },
  {
    icon: UserCheck,
    title: "Information Usage",
    content: `Your information helps us provide and improve our services:
      • Delivering requested design services
      • Project communication and updates
      • Service optimization and personalization
      • Legal compliance and contract fulfillment`,
  },
  {
    icon: MessageSquare,
    title: "Communication",
    content: `We may contact you regarding:
      • Project updates and deliverables
      • Service-related announcements
      • Promotional content (with consent)
      • Important policy changes`,
  },
  {
    icon: ScrollText,
    title: "Your Rights",
    content: `You have the right to:
      • Access your personal data
      • Request data correction
      • Withdraw consent
      • Request data deletion
      • Receive data in a portable format`,
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <Shield className="w-8 h-8 text-gray-900 dark:text-gray-100" />
            </div>
            <h1 className="playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We value your privacy and are committed to protecting your
              personal data. This policy outlines how we collect, use, and
              safeguard your information.
            </p>
          </div>

          {/* Last Updated Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Last Updated: January 2024
              </span>
            </div>
          </div>

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {policyItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-14 pr-4 text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We&apos;re here to help clarify any concerns about how we handle your
              data.
            </p>
            <Button
              size="lg"
              className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
            <p>Last updated: January 2024</p>
            <p>
              These terms may be updated periodically. Please check back
              regularly.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
