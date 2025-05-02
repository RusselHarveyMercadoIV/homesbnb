import { useUser } from "@/context/user";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: any) => {
  const { user, isAdmin } = useUser();

  if (user) {
    if (!isAdmin()) {
      return <p>Authorized accounts only</p>;
    }
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
