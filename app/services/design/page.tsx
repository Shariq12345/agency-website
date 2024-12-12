"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Users,
  Laptop,
  Brain,
  Layout,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function UIUXDesignPage() {
  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Interface Design",
      description:
        "Creating intuitive and visually appealing user interfaces that enhance engagement and satisfaction.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Research",
      description:
        "Deep analysis of user behavior to inform design decisions and create user-centered solutions.",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Responsive Design",
      description:
        "Ensuring seamless experiences across all devices with adaptive and flexible layouts.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "UX Strategy",
      description:
        "Developing strategies that align user needs with business objectives.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Design",
      description:
        "Prioritizing mobile experiences while maintaining cross-platform consistency.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Visual Design",
      description:
        "Creating visual elements that reinforce brand identity and boost user engagement.",
    },
  ];

  const benefits = [
    "User-centered approach",
    "Data-driven decisions",
    "Consistent brand experience",
    "Improved user satisfaction",
    "Higher conversion rates",
    "Reduced development costs",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-4">
              UI/UX Design Excellence
            </Badge>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 
              bg-gradient-to-r from-primary to-primary/70 
              bg-clip-text text-transparent
              leading-tight"
            >
              Elevate Digital Experiences
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We craft intuitive, engaging user experiences that drive
              satisfaction and business growth through innovative,
              research-driven design solutions.
            </p>

            <div className="flex justify-center space-x-4">
              <Link href="/meeting">
                <Button size="lg" className="group">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive UI/UX Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end design solutions that transform digital experiences
                and delight users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="h-full bg-card/50 backdrop-blur-sm 
                  border-transparent hover:border-primary/20 
                  transition-all duration-300 hover:shadow-lg 
                  hover:scale-[1.02]"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div
                        className="bg-primary/10 w-12 h-12 rounded-lg 
                      flex items-center justify-center 
                      text-primary mb-4"
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground flex-grow">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Design Services?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm md:text-base">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/design-process.webp"
                    alt="UI/UX Design Process"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-0 bg-gradient-to-br from-primary/10 via-background to-background">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Digital Experience?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let&apos;s collaborate and create exceptional digital
                  experiences that your users will love and your business needs.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
