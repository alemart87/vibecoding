/**
 * Tipos TypeScript compartidos
 */

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ApiError {
  message: string;
  status: number;
}

