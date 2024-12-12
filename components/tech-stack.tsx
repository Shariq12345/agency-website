"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Layout,
  Smartphone,
  Zap,
  BarChart,
  Cloud,
  Shield,
} from "lucide-react";

const techStacks = [
  {
    id: 1,
    category: "Frontend Development",
    icon: Layout,
    description:
      "Modern, responsive user interfaces with cutting-edge frameworks",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics: {
      performance: 98,
      satisfaction: 96,
    },
    results: "45% faster page loads, 30% increase in user engagement",
  },
  // {
  //   id: 2,
  //   category: "Backend Development",
  //   icon: Database,
  //   description: "Scalable and secure server-side solutions",
  //   technologies: ["Node.js", "Python", "PostgreSQL", "Redis"],
  //   metrics: {
  //     performance: 95,
  //     satisfaction: 94,
  //   },
  //   results: "99.9% uptime, 60% reduced server costs",
  // },
  // {
  //   id: 3,
  //   category: "Mobile Development",
  //   icon: Smartphone,
  //   description: "Cross-platform mobile applications",
  //   technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  //   metrics: {
  //     performance: 92,
  //     satisfaction: 95,
  //   },
  //   results: "40% faster development cycle, 4.8★ average app rating",
  // },
  // {
  //   id: 4,
  //   category: "Cloud & DevOps",
  //   icon: Cloud,
  //   description: "Robust cloud infrastructure and deployment",
  //   technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  //   metrics: {
  //     performance: 97,
  //     satisfaction: 93,
  //   },
  //   results: "50% reduced deployment time, 99.99% service reliability",
  // },
];

export function TechStackSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-24 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Our Technology Stack
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Cutting-Edge Technologies
            </h2>
            <p className="text-muted-foreground text-lg">
              We leverage the latest technologies and best practices to deliver
              exceptional digital solutions that drive real business results.
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  key={stack.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(stack.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden p-6 h-full transition-all duration-300 hover:shadow-lg">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 mr-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {stack.category}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6">
                        {stack.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {stack.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <Zap className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Performance</span>
                          </div>
                          <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  hoveredId === stack.id
                                    ? `${stack.metrics.performance}%`
                                    : "0%",
                              }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-primary"
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <BarChart className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Satisfaction</span>
                          </div>
                          <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  hoveredId === stack.id
                                    ? `${stack.metrics.satisfaction}%`
                                    : "0%",
                              }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-primary"
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="flex items-center text-sm text-primary">
                        <Shield className="h-4 w-4 mr-2" />
                        <span>{stack.results}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
