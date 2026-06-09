import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    const redirect = `/entrar?redirect=${encodeURIComponent(location.pathname + location.search)}`;
    return <Navigate to={redirect} replace />;
  }

  return <>{children}</>;
}

export { ProtectedRoute };
