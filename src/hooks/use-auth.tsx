import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { env } from '@/env';
import type { RequestLoginDTO, User } from '@/domain/entities';
import type { LoginResponseData } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';
import { UserRole } from '@/domain/constants';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

interface AuthContextValue {
  user: Omit<User, 'password'> | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (data: RequestLoginDTO) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<Omit<User, 'password'> | null>(null);

  useEffect(
    function restoreSession() {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);

      if (storedToken && storedUser) {
        try {
          setToken(storedToken);
          setUser(JSON.parse(storedUser) as Omit<User, 'password'>);
        } catch {
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(USER_KEY);
        }
      }
    },
    []
  );

  const isAuthenticated = token !== null;
  const isAdmin = user?.role === UserRole.ADMIN;

  const login = useCallback(
    async function (data: RequestLoginDTO) {
      const response = await fetch(`${env.VITE_API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const payload = (await response.json()) as ResponsePayload<LoginResponseData>;

      if (!response.ok || !payload.data) {
        if (response.status === 401) {
          throw new Error('Email ou senha inválidos');
        }
        throw new Error('Erro ao conectar ao servidor');
      }

      const { accessToken, user: userData } = payload.data;

      localStorage.setItem(TOKEN_KEY, accessToken);
      localStorage.setItem(USER_KEY, JSON.stringify(userData));

      setToken(accessToken);
      setUser(userData);
    },
    []
  );

  const logout = useCallback(
    function () {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      setToken(null);
      setUser(null);
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
