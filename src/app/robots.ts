// app/robots.ts
// Next.js auto-generate robots.txt dari sini
// Akses: https://gunturmaulana.xyz/robots.txt

import { DATA } from "@/data/resume";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DATA.url}/sitemap.xml`,
    host: DATA.url,
  };
}
