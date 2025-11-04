/**
 * Configuración y utilidades para llamadas API al backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

/**
 * Cliente API básico para hacer peticiones al backend
 */
export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'Error en la petición',
        status: response.status,
      };
    }

    return {
      data,
      status: response.status,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Error desconocido',
      status: 500,
    };
  }
}

/**
 * Endpoints del backend
 */
export const endpoints = {
  health: '/api/health',
  example: '/api/example',
} as const;

