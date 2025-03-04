import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("/", "./pages/App.tsx"),
  route("/home", "./pages/Home.tsx"),
  route("/login", "./pages/Login.tsx"),
] satisfies RouteConfig;
