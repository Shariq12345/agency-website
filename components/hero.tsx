"use client";

import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code,
  Palette,
  Terminal,
  Laptop,
  Smartphone,
  Rocket,
} from "lucide-react";
import { useEffect } from "react";

export function HeroSection() {
  const controls = useAnimation();

  // Floating animation for background icons
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Background icons configuration
  const backgroundIcons = [
    { Icon: Code, position: "top-20 left-20", delay: 0 },
    { Icon: Palette, position: "top-40 right-32", delay: 1 },
    { Icon: Terminal, position: "bottom-32 left-40", delay: 0.5 },
    { Icon: Laptop, position: "bottom-20 right-20", delay: 1.5 },
    { Icon: Smartphone, position: "top-1/2 left-10", delay: 2 },
    { Icon: Rocket, position: "top-1/3 right-10", delay: 0.8 },
  ];

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />

        {/* Animated circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

        {/* Floating background icons */}
        {backgroundIcons.map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} opacity-5`}
            //@ts-ignore
            variants={floatingAnimation}
            initial="initial"
            animate={controls}
            transition={{ delay }}
          >
            <Icon className="w-16 h-16" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Agency Label with hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-6 py-2 backdrop-blur-sm"
          >
            <Sparkles className="mr-2 h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Creative Digital Agency
            </span>
          </motion.div>

          {/* Main Heading with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl animate-gradient"
          >
            Transforming Ideas into
            <br />
            Digital Excellence
          </motion.h1>

          {/* Subheading with fade-in animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            We craft innovative digital experiences that elevate brands and
            drive business growth through creative strategy and cutting-edge
            technology.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="min-w-[200px] group bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-primary/20 text-primary hover:bg-primary/5 backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Animated Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Projects Delivered" },
              { number: "50+", label: "Team Members" },
              { number: "95%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
