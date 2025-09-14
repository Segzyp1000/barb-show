import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

type RequireAuthProps = {
  children: ReactNode;
  
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.isAuthenticated) {
    // redirect to login if user is not authenticated
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
