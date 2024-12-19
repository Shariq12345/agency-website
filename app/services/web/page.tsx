"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Laptop,
  Database,
  Layout,
  Server,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { handleCall } from "@/lib/handleCall";

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Application Development",
      description:
        "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description:
        "Responsive and interactive user interfaces using React, Next.js, and modern web technologies.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with Node.js, Express, and scalable database architectures.",
    },
  ];

  const technologies = [
    { name: "React", image: "/tech/react.svg" },
    { name: "Next.js", image: "/tech/nextjs.svg" },
    { name: "TypeScript", image: "/tech/typescript.svg" },
    { name: "Node.js", image: "/tech/nodejs.svg" },
    { name: "TailwindCSS", image: "/tech/tailwind.svg" },
    { name: "Framer", image: "/tech/framer-motion.svg" },
  ];

  const developmentProcess = [
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Consultation & Planning",
      description:
        "Detailed project requirements gathering and strategic roadmap development.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Custom Development",
      description:
        "End-to-end web solution implementation with agile methodologies.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Deployment & Support",
      description:
        "Seamless deployment, ongoing maintenance, and continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4">
              Web Development Services
            </Badge>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 
              bg-gradient-to-r from-primary to-primary/70 
              bg-clip-text text-transparent
              leading-tight"
            >
              Professional Web Development Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Crafting robust, scalable web applications tailored to your
              business needs.
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
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Our Web Development Services
              </h2>
              <p className="text-muted-foreground">
                Comprehensive solutions for your digital transformation
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
                Cutting-edge technologies for modern web solutions
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

        {/* Development Process */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Our Development Process
              </h2>
              <p className="text-muted-foreground">
                Structured approach to delivering high-quality web solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {developmentProcess.map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground">{process.description}</p>
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
                  Ready to Build Your Web Solution?
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                  Let&apos;s discuss how we can help you create a powerful web
                  application that drives your business forward.
                </p>
                <Button
                  onClick={handleCall}
                  variant="secondary"
                  size="lg"
                  className="min-w-[200px]"
                >
                  Contact Us
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
