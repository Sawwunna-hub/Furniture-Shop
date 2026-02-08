import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Service from "./pages/Service";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Service,
      },
      { path: "blogs", Component: BlogPage },
      { path: "/blogs/:blogId", Component: BlogDetail },
      { path: "about", Component: AboutPage },
    ],
  },
]);
