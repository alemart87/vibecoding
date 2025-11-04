/**
 * Servicios para interactuar con la API del backend
 */
import { apiClient, endpoints } from '@/lib/api';

export interface HealthCheckResponse {
  status: string;
  message: string;
}

export interface ExampleResponse {
  message: string;
  status: string;
}

/**
 * Servicio de health check
 */
export async function checkHealth(): Promise<HealthCheckResponse | null> {
  const response = await apiClient<HealthCheckResponse>(endpoints.health);
  return response.data || null;
}

/**
 * Servicio de ejemplo
 */
export async function getExample(): Promise<ExampleResponse | null> {
  const response = await apiClient<ExampleResponse>(endpoints.example);
  return response.data || null;
}

