import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { ThemeProvider } from '@mui/material'
import { theme } from "./design/Theme";

const query = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={query}>
    <ThemeProvider theme={ theme } />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
