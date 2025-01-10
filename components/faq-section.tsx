"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MessageCircleQuestion, ChevronDown } from "lucide-react";

// Color mapping for categories
const categoryColors = {
  Services: "bg-blue-100 text-blue-800",
  Process: "bg-green-100 text-green-800",
  Support: "bg-purple-100 text-purple-800",
};

type Category = "Services" | "Process" | "Support";

const faqs: {
  id: number;
  question: string;
  answer: string;
  category: Category;
}[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide comprehensive digital solutions including web development, UI/UX design, digital strategy, and brand identity design. Our team specializes in creating custom solutions tailored to your specific business needs.",
    category: "Services",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 8-12 weeks, while larger applications may take 3-6 months. We&apos;ll provide a detailed timeline during our initial consultation.",
    category: "Process",
  },
  {
    id: 3,
    question: "What is your development process?",
    answer:
      "Our process includes discovery, planning, design, development, testing, and launch phases. We follow agile methodologies and maintain transparent communication throughout the project lifecycle.",
    category: "Process",
  },
  {
    id: 4,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your digital solution remains optimal after launch. This includes regular updates, security patches, and technical support.",
    category: "Support",
  },
];

export function FAQSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Stylish background gradients */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Animated Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Badge variant="outline" className="px-4 py-1">
                Frequently Asked
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              FAQ
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get quick insights into our services, processes, and support
              offerings
            </p>
          </motion.div>

          {/* Animated FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="px-4 py-3 hover:bg-secondary/10 rounded-t-lg">
                    <div className="flex items-center gap-3 w-full">
                      <Badge
                        variant="secondary"
                        className={`hidden sm:inline-flex ${
                          categoryColors[faq.category]
                        } text-xs font-medium`}
                      >
                        {faq.category}
                      </Badge>
                      <span className="flex-1 text-left font-medium">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 bg-secondary/5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What services does ASK Studio offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ASK Studio offers professional web development, UI/UX design, and digital marketing services...",
              },
            },
            // Add more FAQ items
          ],
        }),
      }}
    />
  );
}
