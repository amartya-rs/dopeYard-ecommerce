import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = () => {
   const { isLoggedIn } = useSelector((state) => state.auth);

   return isLoggedIn ? <Navigate to="/products" replace /> : <Outlet />;
};

export { RestrictedRoute };
