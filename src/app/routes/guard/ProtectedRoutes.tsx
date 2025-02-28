import Layout from "@/app/layout/Layout";
import { useAppStore } from "@/app/store/AppStore";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutes() {
  const isLogged = useAppStore((state) => state.isLogged);

  return isLogged ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login"  replace/>
  );
}
