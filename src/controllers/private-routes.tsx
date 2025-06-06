
// filepath: c:\Users\George Kendrick\Desktop\korent\client\src\components\PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth-context";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};