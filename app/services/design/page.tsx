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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function UIUXDesignPage() {
  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Interface Design",
      description:
        "Creating intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Research",
      description:
        "In-depth analysis of user behavior and needs to inform design decisions and create user-centered solutions.",
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
        "Developing comprehensive strategies that align user needs with business objectives.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Design",
      description:
        "Prioritizing mobile experiences while maintaining consistency across all platforms.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Visual Design",
      description:
        "Creating stunning visual elements that reinforce brand identity and enhance user engagement.",
    },
  ];

  const benefits = [
    "User-centered design approach",
    "Data-driven design decisions",
    "Consistent brand experience",
    "Improved user satisfaction",
    "Higher conversion rates",
    "Reduced development costs",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-primary/20 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4">
              UI/UX Design Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Transform Your Digital Experience
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We create intuitive and engaging user experiences that drive user
              satisfaction and business growth through research-driven design
              solutions.
            </p>
            <Button size="lg" className="min-w-[200px]">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-24 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive UI/UX Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our end-to-end UI/UX design services help businesses create
                exceptional digital experiences that users love.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
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
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose Our UI/UX Services?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/design-process.jpg"
                    alt="UI/UX Design Process"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-0 bg-gradient-to-br from-primary/10 via-background to-background">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your User Experience?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's discuss how our UI/UX design services can help you
                  create exceptional digital experiences that your users will
                  love.
                </p>
                <Button size="lg" className="min-w-[200px]">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
