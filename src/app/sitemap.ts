import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

const safeDate = (value: unknown) => {
  const raw = String(value ?? "");
  return Number.isNaN(new Date(raw).getTime()) ? undefined : raw;
};

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: safeDate(post.metadata.publishedAt),
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: safeDate(post.metadata.publishedAt),
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
