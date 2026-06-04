import { env } from '@/env';
import type { ResponsePayload } from '@/types/api-response-types';

const TOKEN_KEY = 'auth-token';

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

function clearSession(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('auth-user');
}

async function apiAuthClient<T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<ResponsePayload<T>> {
  const token = getToken();
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> | undefined),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${env.VITE_API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    clearSession();
    window.location.href = '/entrar';
    throw new Error('Sessão expirada');
  }

  const payload = (await response.json()) as ResponsePayload<T>;
  return payload;
}

export { apiAuthClient };
