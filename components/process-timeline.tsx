"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, PenTool, Code, ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Discovery",
      description: "In-depth consultation to understand your vision and goals",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 2,
      icon: Target,
      title: "Strategy",
      description: "Developing a comprehensive plan and creative direction",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      id: 3,
      icon: PenTool,
      title: "Design",
      description: "Creating stunning visuals and intuitive user experiences",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 4,
      icon: Code,
      title: "Development",
      description: "Building with cutting-edge technologies and best practices",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 5,
      icon: ArrowRight,
      title: "Project Launch",
      description: "Seamless deployment and ongoing support to ensure success",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful project delivery through a
            structured yet flexible approach.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start mb-12 last:mb-0"
              viewport={{ once: true }}
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="absolute top-12 left-6 bottom-0 w-px bg-border"
                  viewport={{ once: true }}
                />
              )}

              {/* Step Number & Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`relative flex-shrink-0 w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center mr-6 shadow-lg`}
                viewport={{ once: true }}
              >
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </motion.div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <motion.h3
                  whileHover={{ color: step.color }}
                  className={`text-xl font-semibold mb-2 ${step.color}`}
                >
                  {step.title}
                </motion.h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Step Number */}
              <div className="flex-shrink-0 w-12 text-2xl font-bold text-muted-foreground/20">
                {String(step.id).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
