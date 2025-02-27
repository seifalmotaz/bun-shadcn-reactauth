import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Outlet, Navigate } from "react-router";

export default function AuthOutlet() {
  const isAuthenticated = useIsAuthenticated();
  if (!isAuthenticated) {
    console.log("isAuthenticated", isAuthenticated);
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
