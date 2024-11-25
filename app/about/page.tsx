"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, Globe } from "lucide-react";

export default function AboutUsPage() {
  return (
    <section className="bg-gradient-to-b from-background to-background/80 text-foreground">
      <div className="container mx-auto px-6 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Turning Ideas Into Impactful Digital Solutions
          </h1>
          <p className="text-lg text-muted-foreground">
            We’re three passionate students who joined forces to create an
            agency focused on delivering outstanding digital solutions. Our
            journey is built on creativity, collaboration, and an unwavering
            commitment to innovation.
          </p>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            The Story Behind Our Agency 🚀
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            It all started with a simple idea—three university classmates
            brainstorming ways to make a meaningful impact in the world of
            digital innovation. Long hours of discussions and an endless drive
            to create something unique led us to launch this agency.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            What began as a shared vision soon turned into a platform to
            transform ambitious ideas into reality. Whether it’s designing
            intuitive user experiences or engineering scalable solutions, our
            agency is committed to pushing boundaries and creating exceptional
            results for our clients.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission, Vision, and Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Our Mission",
                description:
                  "To empower businesses with innovative, user-centric solutions that drive growth and transformation.",
              },
              {
                icon: Target,
                title: "Our Vision",
                description:
                  "To become a trusted partner for brands seeking to excel in the digital age through impactful designs and technology.",
              },
              {
                icon: Globe,
                title: "Our Values",
                description:
                  "Creativity, integrity, and a passion for delivering results define everything we do.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-secondary/10 p-6 rounded-lg text-center shadow-lg"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
