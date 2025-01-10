"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const ProjectsShowcase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      title: "Brownie Bee Cake Shop",
      description:
        "A modern e-commerce website for a cake shop with a focus on user experience and conversion rate.",
      image: "/projects/project1.png",
      categories: ["E-Commerce", "UI/UX", "Development"],
      stats: {
        increase: "+115%",
        metric: "conversion rate",
      },
      link: "https://browniebee.vercel.app",
    },
    {
      id: 1,
      title: "Mahalaxmi Art - Interior Website",
      description:
        "A modern interior design website to showcase the projects of an interior designer company.",
      image: "/projects/project2.png",
      categories: ["Modern Design", "UI/UX", "Development"],
      stats: {
        increase: "+127%",
        metric: "conversion rate",
      },
      link: "https://browniebee.vercel.app",
    },
  ];

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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>

          <div className="relative w-full">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-6 transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1280px]"
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
              <CardContainer className="inter-var border rounded-md">
                <CardBody className="relative bg-card/50 backdrop-blur-sm border-0 group/card w-full h-auto rounded-xl p-0">
                  <div className="relative h-64 overflow-hidden">
                    <CardItem translateZ="100" className="w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        // width={500}
                        // height={1000}
                        className="object-contain transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <CardItem translateZ="120">
                            <Link href={project.link} target="_blank">
                              <Button
                                variant="default"
                                className="w-full bg-primary/90 hover:bg-primary"
                              >
                                View Project
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </CardItem>
                        </div>
                      </div>
                    </CardItem>
                  </div>

                  <div className="p-6">
                    <CardItem
                      translateZ="50"
                      className="flex flex-wrap gap-2 mb-4"
                    >
                      {project.categories.map((category, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-medium text-xs bg-secondary/50"
                        >
                          {category}
                        </Badge>
                      ))}
                    </CardItem>

                    <CardItem
                      translateZ="60"
                      className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      translateZ="70"
                      className="text-muted-foreground text-sm leading-relaxed mb-4"
                    >
                      {project.description}
                    </CardItem>

                    <CardItem
                      translateZ="80"
                      className="flex items-center text-sm"
                    >
                      <span className="font-bold text-primary">
                        {project.stats.increase}
                      </span>
                      <span className="mx-2 text-muted-foreground">·</span>
                      <span className="text-muted-foreground">
                        {project.stats.metric}
                      </span>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
