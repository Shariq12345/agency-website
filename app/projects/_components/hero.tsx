"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Folders, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="px-4 py-1">
              Projects
            </Badge>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 
              bg-gradient-to-r from-primary to-primary/70 
              bg-clip-text text-transparent
              leading-tight text-center"
          >
            Transforming Ideas into Reality
          </h1>

          {/* Description */}
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our diverse portfolio of digital solutions, where creativity
            meets functionality to deliver exceptional user experiences.
          </p>

          {/* Stats Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
          >
            {[
              { icon: Folders, label: "Projects", value: "100+" },
              { icon: Globe, label: "Countries", value: "20+" },
              { icon: Users, label: "Happy Clients", value: "50+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-colors"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-purple-500" />
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10 dark:bg-primary/90 dark:hover:bg-primary dark:text-white text-black"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
