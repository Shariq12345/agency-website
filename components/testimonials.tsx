"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechVision Inc",
      image: "/testimonials/sarah.jpg", // Add your image paths
      quote:
        "Working with this agency was transformative for our brand. They didn't just deliver a website; they created a digital experience that perfectly captures our vision. The attention to detail and creative solutions exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Marketing Director",
      company: "Innovate Labs",
      image: "/testimonials/james.jpg",
      quote:
        "The team's expertise in both design and development is exceptional. They brought fresh perspectives to our project and delivered a solution that has significantly improved our user engagement metrics.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Product Manager",
      company: "Digital First",
      image: "/testimonials/elena.jpg",
      quote:
        "Their collaborative approach and technical expertise made the entire process smooth and efficient. The final product not only looks stunning but has helped us achieve our business objectives.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from some of our
            satisfied clients about their experiences working with us.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                    <CardContent className="p-8">
                      <Quote className="h-12 w-12 text-primary/20 mb-6" />

                      <div className="flex items-center gap-4 mb-6">
                        <Avatar className="h-14 w-14">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      <p className="text-lg leading-relaxed text-muted-foreground">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "w-8 bg-primary" : "w-2 bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
