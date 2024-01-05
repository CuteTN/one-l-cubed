import { CommonComponentsDemo } from "components/demo/CommonComponentsDemo.component";
import { RouteObject } from "react-router-dom";

export const ROUTES = {
  home: {
    path: "/",
    element: <div className="m-40">HOME</div>
  },
  testComponents: {
    path: "/test-components",
    element: <CommonComponentsDemo />
  },
  notFound: {
    path: "*",
    element: <div className="m-40">404</div>
  }
} satisfies Record<string, RouteObject>;