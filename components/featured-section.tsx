"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const FeaturedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Quantum E-Commerce Platform",
      description:
        "A next-gen shopping experience with AI-powered recommendations and seamless checkout flow.",
      image: "/api/placeholder/800/600",
      categories: ["E-Commerce", "UI/UX", "Development"],
      stats: {
        increase: "+127%",
        metric: "conversion rate",
      },
    },
    {
      id: 2,
      title: "Quantum E-Commerce Platform",
      description:
        "A next-gen shopping experience with AI-powered recommendations and seamless checkout flow.",
      image: "/api/placeholder/800/600",
      categories: ["E-Commerce", "UI/UX", "Development"],
      stats: {
        increase: "+127%",
        metric: "conversion rate",
      },
    },
    {
      id: 3,
      title: "Quantum E-Commerce Platform",
      description:
        "A next-gen shopping experience with AI-powered recommendations and seamless checkout flow.",
      image: "/api/placeholder/800/600",
      categories: ["E-Commerce", "UI/UX", "Development"],
      stats: {
        increase: "+127%",
        metric: "conversion rate",
      },
    },
    // ... other projects
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="relative py-32 overflow-hidden">
        {/* Modern geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Header with enhanced typography */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
                Featured Work
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Projects
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transforming ideas into digital excellence. Explore our selected
                works that showcase our expertise in creating impactful digital
                solutions.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid with improved card design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Project Image with Next.js Image optimization */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Improved hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <Button
                            variant="default"
                            className="w-full bg-primary/90 hover:bg-primary"
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info with improved spacing and typography */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.categories.map((category, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="font-medium text-xs bg-secondary/50"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex items-center text-sm">
                        <span className="font-bold text-primary">
                          {project.stats.increase}
                        </span>
                        <span className="mx-2 text-muted-foreground">·</span>
                        <span className="text-muted-foreground">
                          {project.stats.metric}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA button */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;
