import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./app/routes/MainRoutes";
import { ThemeProvider } from "./components/theme/theme-provider";

export const metaData = {
  title: "EDU SMART",
  description: "Gestión de alumnos notas y calificaciones",
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <MainRoutes />
      </ThemeProvider>
  </StrictMode>
);
