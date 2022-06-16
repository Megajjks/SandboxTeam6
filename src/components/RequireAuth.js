import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("allowedRoles", allowedRoles);
  console.log("role", auth?.role);
  console.log(allowedRoles === auth?.role);
  return allowedRoles === auth?.role ? (
    <Outlet />
  ) : auth?.token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
