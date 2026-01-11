import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("hero", "routes/hero.tsx"),
  route("feature", "routes/feature.tsx"),
  route("content", "routes/content.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("testimonial", "routes/testimonial.tsx"),
  route("contact", "routes/contact.tsx"),
  route("footer", "routes/footer.tsx")
] satisfies RouteConfig;
