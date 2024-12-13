"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const FeaturedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Project categories
  const categories = [
    "All",
    "Web Development",
    "UI/UX",
    "Mobile Apps",
    "E-Commerce",
    "AI/ML",
  ];

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
    // Add more projects here
  ];

  // Filter projects based on search query and selected category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      project.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
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
              Our Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of innovative solutions and creative designs
            </p>
          </motion.div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 
                         bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary 
                         transition-all duration-200"
              />
            </div>

            {/* Filter Categories */}
            <div className="relative w-full md:w-auto">
              <div className="flex flex-wrap gap-3 justify-center items-center">
                <Filter className="h-5 w-5 text-gray-400" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-6 transition-all duration-300`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Hover overlay */}
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

                  {/* Project Info */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
