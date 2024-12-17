"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Search,
  Mail,
  TrendingUp,
  Share2,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description:
        "Boost your search rankings and drive organic traffic through strategic SEO implementation.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description:
        "Data-driven insights and comprehensive reporting to track and optimize campaign performance.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Marketing",
      description:
        "Engage your audience and build brand presence across all major social platforms.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing",
      description:
        "Strategic email campaigns that nurture leads and drive conversions.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "PPC Advertising",
      description:
        "Targeted paid advertising campaigns that maximize ROI and reach.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Content Marketing",
      description:
        "Compelling content strategy that resonates with your audience and drives engagement.",
    },
  ];

  const benefits = [
    "Increased brand visibility",
    "Higher conversion rates",
    "Measurable ROI",
    "Targeted audience reach",
    "Competitive advantage",
    "Scalable growth",
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
              Digital Marketing Solutions
            </Badge>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 
              bg-gradient-to-r from-primary to-primary/70 
              bg-clip-text text-transparent
              leading-tight"
            >
              Amplify Your Digital Presence
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Strategic digital marketing solutions that drive growth, engage
              audiences, and deliver measurable results for your business.
            </p>

            <div className="flex justify-center space-x-4">
              <Link href="/meeting">
                <Button size="lg" className="group">
                  Get Free Consultation
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
                Comprehensive Digital Marketing Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored marketing solutions that help your business thrive in
                the digital landscape.
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
          <div className=" px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Digital Marketing Services?
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
                      <Target className="h-5 w-5 text-primary flex-shrink-0" />
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
                  <Image
                    src={"/marketing/marketing1.png"}
                    alt="Digital Marketing Strategy"
                    fill
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-0 bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Digital Presence?
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                  Let&apos;s create a customized digital marketing strategy that
                  helps you achieve your business goals and reach your target
                  audience.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="min-w-[200px]"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
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

{
  /* <section className="py-20">
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
        <Button variant="secondary" size="lg" className="min-w-[200px]">
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  </div>
</section>; */
}
