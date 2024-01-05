import React from "react";
import { NavigateOptions, generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "./routes.constant";

export function useAppNavigate() {
  const rrdNavigate = useNavigate();
  return React.useCallback(
    (
      to: keyof typeof ROUTES | number,
      options?: NavigateOptions & {
        params?: Record<string, string>;
        queries: Record<string, string | number>;
      },
    ) => {
      if (typeof to === "number") {
        rrdNavigate(to);
        return;
      }

      const { params, queries, ...rrdOptions } = options ?? {};
      const queryPart = queries
        ? "?" +
          Object.entries(queries)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")
        : "";
      const path = generatePath(ROUTES[to].path!, params) + queryPart;
      rrdNavigate(path, rrdOptions);
    },
    [rrdNavigate],
  );
}
