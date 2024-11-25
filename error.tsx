"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-background/90 px-6">
      <div className="container max-w-4xl text-center">
        {/* Error Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            404
          </h1>
          <h2 className="mt-6 text-2xl font-semibold text-muted-foreground">
            Oops! Page Not Found.
          </h2>
        </motion.div>

        {/* Description Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-muted-foreground"
        >
          The page you are looking for doesn’t exist, or has been moved.
        </motion.p>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex justify-center space-x-4"
        >
          <Button variant="outline" size="lg" className="flex items-center">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
          <Button variant="default" size="lg" className="flex items-center">
            <Home className="mr-2 w-5 h-5" />
            Home
          </Button>
        </motion.div>

        {/* Decorative Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-12 flex justify-center"
        >
          <div className="relative w-80 h-80">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-primary to-primary/40 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 bg-gradient-to-b from-secondary/30 to-secondary/10 rounded-full blur-2xl"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorPage;
