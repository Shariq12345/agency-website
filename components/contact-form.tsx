"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Send, Clock, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background">
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Start Your Project{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Ready to elevate your digital strategy? Reach out and let&apos;s
              discuss how we can transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border shadow-lg"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Full Name"
                        className="bg-background/70 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="bg-background/70 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry Details"
                      className="bg-background/70 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Share the details of your project or inquiry..."
                      className="bg-background/70 min-h-[150px] focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you shortly.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 lg:pl-4"
            >
              <div className="grid gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: ["askstudio.agency@gmail.com"],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: ["(+91) 982-040-4970", "Mon - Fri, 9am - 6pm"],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: [
                      "Monday - Friday: 9:00 AM - 6:00 PM",
                      "Saturday - Sunday: Closed",
                    ],
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <contact.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">
                        {contact.title}
                      </h3>
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
