import { BookOpen, Calendar, Home, Settings, Users } from "lucide-react";

export const items = [
    {
      title: "Inicio",
      url: "/home",
      icon: Home,
    },
    {
      title: "Estudiantes",
      url: "/alumnos",
      icon: Users,
    },
    {
      title: "Calendario",
      url: "/calendar",
      icon: Calendar,
    },
    {
      title: "Clases",
      url: "/clases",
      icon: BookOpen,
    },
    {
      title: "Configuración",
      url: "#",
      icon: Settings,
    },
  ]