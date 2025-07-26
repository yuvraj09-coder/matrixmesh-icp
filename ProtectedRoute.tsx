import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authClient = await AuthClient.create();
      setIsAuthenticated(await authClient.isAuthenticated());
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
