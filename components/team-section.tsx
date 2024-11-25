"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "/team/sarah.jpg", // Add team member images to your public folder
    bio: "Passionate about creating beautiful, user-centric designs that drive results.",
    specialties: ["UI/UX", "Brand Design"],
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      github: "https://github.com/sarahchen",
    },
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Technical Lead",
    image: "/team/michael.jpg",
    bio: "Full-stack developer with 8+ years of experience in building scalable applications.",
    specialties: ["React", "Node.js"],
    social: {
      linkedin: "https://linkedin.com/in/michaelroberts",
      github: "https://github.com/michaelroberts",
    },
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Project Manager",
    image: "/team/emma.jpg",
    bio: "Certified PM focused on delivering exceptional results through agile methodologies.",
    specialties: ["Agile", "Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/emmathompson",
      twitter: "https://twitter.com/emmathompson",
    },
  },
  // Add more team members as needed
];

export function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-24 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-20"
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Meet the Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              Our talented team of creative professionals dedicated to
              delivering exceptional digital solutions.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden">
                  <div className="p-6">
                    {/* Member Image */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary/80 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {member.bio}
                      </p>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.specialties.map((specialty, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-secondary/50"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
