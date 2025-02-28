import NotFound from "@/components/not-found/NotFound";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoutes from "./guard/ProtectedRoutes";
import Register from "../pages/public/register/presentation/Register";
import LoginPage from "../pages/public/login/presentation/Login";
import Loading from "@/components/loading/Loading";

const Landing = lazy(
  () => import("../pages/public/landing/presentation/Landing")
);
const Home = lazy(() => import("../pages/private/home/presentation/HomePage"));
const Clases = lazy(
  () => import("../pages/private/clases/presentation/Clases")
);
const Alumnos = lazy(
  () => import("../pages/private/alumnos/presentation/AlumnosPage")
);
const Calendario = lazy(
  () => import("../pages/private/calendar/presentation/Calendario")
);
const LANDING_ROUTE = "/";
const MAIN_ROUTE = "/home";
const CLASS_ROOM_ROUTE = "/clases";
const STUDENT_ROUTE = "/alumnos";
const CALENDAR_ROUTE = "/calendar";

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path={LANDING_ROUTE} element={<Landing />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={MAIN_ROUTE} element={<Home />} />
            <Route path={CLASS_ROOM_ROUTE} element={<Clases />} />
            <Route path={STUDENT_ROUTE} element={<Alumnos />} />
            <Route path={CALENDAR_ROUTE} element={<Calendario />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRoutes;
