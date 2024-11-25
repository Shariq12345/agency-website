"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const faqs = [
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
      "Project timelines vary depending on scope and complexity. A typical website project takes 8-12 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
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
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Badge variant="outline" className="px-4 py-1">
                <MessageCircleQuestion className="w-4 h-4 mr-2" />
                FAQ
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services and process
            </p>
          </motion.div>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="mb-4 overflow-hidden border-muted bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300"
                role="button"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="secondary"
                        className="hidden sm:inline-flex"
                      >
                        {faq.category}
                      </Badge>
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="mt-4 text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
