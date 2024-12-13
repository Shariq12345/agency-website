import React from "react";
import { ProjectsHero } from "./_components/hero";
import FeaturedProjects from "@/components/featured-project";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsHero />
      <FeaturedProjects />
    </div>
  );
};

export default ProjectsPage;
