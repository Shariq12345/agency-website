"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Rocket,
  Database,
  Layout,
  Users,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Web Development",
      description:
        "Tailored web solutions built with cutting-edge technologies to meet your specific business needs.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Progressive Web Apps",
      description:
        "Fast, reliable, and engaging web applications that work offline and provide app-like experiences.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "E-commerce Solutions",
      description:
        "Scalable online stores with secure payment gateways and optimal user experience.",
    },
  ];

  const technologies = [
    { name: "React", image: "/tech/react.svg" },
    { name: "Next.js", image: "/tech/nextjs.svg" },
    { name: "TypeScript", image: "/tech/typescript.svg" },
    { name: "Node.js", image: "/tech/nodejs.svg" },
    { name: "PostgreSQL", image: "/tech/postgresql.svg" },
    { name: "AWS", image: "/tech/aws.svg" },
  ];

  const benefits = [
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Performance Optimized",
      description:
        "Lightning-fast load times and optimal performance across all devices.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "User-Centric Design",
      description:
        "Intuitive interfaces that prioritize user experience and engagement.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Quality Assured",
      description:
        "Rigorous testing and quality assurance for reliable applications.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4">
              Web Development Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Transform Your Digital Presence
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We craft modern, scalable, and high-performance web solutions that
              drive business growth and user engagement.
            </p>
            <Button size="lg" className="min-w-[200px]">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Our Web Development Services
              </h2>
              <p className="text-muted-foreground">
                Comprehensive web solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
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

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-muted-foreground">
                We use cutting-edge technologies to build scalable solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="h-20 w-20 relative mb-4">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground">
                Our development approach ensures quality, performance, and
                reliability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                  Let's discuss how we can help you achieve your digital goals
                  with a custom web development solution.
                </p>
                <Button variant="secondary" size="lg" className="min-w-[200px]">
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
};

export default WebDevelopmentPage;
