"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileText,
  Copyright,
  AlertCircle,
  ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const termsItems = [
  {
    icon: ScrollText,
    title: "General Terms",
    content: `By accessing and engaging our services, you agree to be bound by these Terms of Service:
      • Quotes valid for 30 days from issuance
      • Project timelines begin upon agreement and initial payment
      • Right to decline projects that conflict with our values
      • All project changes must be in writing`,
  },
  {
    icon: Copyright,
    title: "Intellectual Property Rights",
    content: `All rights, title, and interest in deliverables are allocated as follows:
      • Final deliverables transfer upon final payment
      • We retain rights to preliminary designs
      • Portfolio display rights maintained
      • Client must have rights to provided materials
      • Custom typography remains our property unless negotiated`,
  },
  {
    icon: FileText,
    title: "Payment Terms",
    content: `Our payment terms are structured as follows:
      • 50% non-refundable deposit required
      • Final balance due before deliverables
      • Additional revisions billed at hourly rate
      • 1.5% monthly late payment charge
      • Third-party costs billed separately`,
  },
  {
    icon: Lock,
    title: "Project Process",
    content: `Our project process includes:
      • Two revision rounds in base cost
      • Feedback needed within 5 business days
      • 30+ days inactivity may incur restart fees
      • Rush fees apply for expedited work
      • Final files in specified formats only`,
  },
  {
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: `Our liability is limited to the amount paid for services:
      • No liability for indirect losses
      • Not liable for third-party claims
      • Not responsible for client-provided content errors
      • No liability for third-party service performance
      • Not liable for unauthorized modifications`,
  },
];

export default function TermsOfService() {
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
              <ScrollText className="w-8 h-8 text-gray-900 dark:text-gray-100" />
            </div>
            <h1 className="playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before engaging our creative
              design services. These terms establish the rules and regulations
              for the use of our services.
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

          {/* Terms Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {termsItems.map((item, index) => (
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
              Questions About Our Terms?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're here to help clarify any concerns about our terms of
              service.
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
