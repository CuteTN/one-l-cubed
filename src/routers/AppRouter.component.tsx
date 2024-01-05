import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes.constant";

const router = createBrowserRouter(Object.values(ROUTES));
export function AppRouter() {
  return <RouterProvider router={router} />;
}
