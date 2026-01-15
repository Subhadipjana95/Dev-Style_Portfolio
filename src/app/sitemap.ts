import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://a063.xyz", lastModified: new Date() },
    { url: "https://a063.xyz/blogs", lastModified: new Date() },
  ];
}
