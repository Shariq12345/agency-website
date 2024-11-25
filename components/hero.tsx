"use client";

import { Button } from "@/components/ui/button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
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
import { useEffect, useRef } from "react";

export function HeroSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

  // Floating animation for background icons
  const floatingAnimation = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [-20, 20],
      opacity: [0.3, 0.6],
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
    { Icon: Code, label: "React", position: "top-20 left-20", delay: 0 },
    { Icon: Palette, label: "Design", position: "top-40 right-32", delay: 1 },
    {
      Icon: Terminal,
      label: "Backend",
      position: "bottom-32 left-40",
      delay: 0.5,
    },
    {
      Icon: Laptop,
      label: "Frontend",
      position: "bottom-20 right-20",
      delay: 1.5,
    },
    {
      Icon: Smartphone,
      label: "Mobile",
      position: "top-1/2 left-10",
      delay: 2,
    },
    { Icon: Rocket, label: "Deploy", position: "top-1/3 right-10", delay: 0.8 },
  ];

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
        viewport={{ once: true }}
      >
        {/* Improved gradient overlay with animation */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, var(--primary-50) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 40%, var(--primary-50) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, var(--primary-50) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 opacity-30"
          viewport={{ once: true }}
        />

        {/* Animated circles with glow effect */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-blob animation-delay-2000">
          <div className="absolute inset-0 bg-secondary/10 rounded-full animate-pulse animation-delay-1000" />
        </div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-blob animation-delay-4000">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse animation-delay-2000" />
        </div>
        {/* Enhanced floating tech stack icons */}
        {backgroundIcons.map(({ Icon, label, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} group`}
            //@ts-ignore
            variants={floatingAnimation}
            initial="initial"
            animate={controls}
            transition={{ delay }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Icon className="w-16 h-16 text-primary/20 transition-all duration-300 group-hover:text-primary/40" />
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-primary/60 whitespace-nowrap bg-background/80 px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {label}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          viewport={{ once: true }}
        >
          {/* Agency Label with hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-6 py-2 backdrop-blur-sm"
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
                viewport={{ once: true }}
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
