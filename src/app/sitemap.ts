// app/sitemap.ts
// Next.js auto-generate sitemap.xml dari sini
// Akses: https://gunturmaulana.xyz/sitemap.xml

import { DATA } from "@/data/resume";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DATA.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
