import { MetadataRoute } from "next";

async function getProjectsData() {
  // This is a placeholder - implement your actual project data fetching logic
  return [
    { slug: "brownie-bee", lastModified: new Date() },
    // Add more projects
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjectsData();

  const projectUrls = projects.map((project) => ({
    url: `https://www.askstudio.agency/projects/${project.slug}`,
    lastModified: project.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: "https://www.askstudio.agency",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://www.askstudio.agency/services/web",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.askstudio.agency/services/design",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.askstudio.agency/services/marketing",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.askstudio.agency/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.askstudio.agency/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.askstudio.agency/projects",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  return [...routes, ...projectUrls];
}
