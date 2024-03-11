import { MetadataRoute } from "next";
import { articles } from "./blog/_assets/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextstarter.ai/apple-icon.png",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://nextstarter.ai/robots.txt",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    {
      url: "https://nextstarter.ai/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://nextstarter.ai/tos",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://nextstarter.ai/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://nextstarter.ai",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `https://nextstarter.ai/blog/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.7,
    })),
  ];
}
