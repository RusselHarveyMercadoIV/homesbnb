import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./pages/App.tsx"),
  route("/home", "./pages/Home.tsx"),
  route("/login", "./pages/Login.tsx"),
] satisfies RouteConfig;
