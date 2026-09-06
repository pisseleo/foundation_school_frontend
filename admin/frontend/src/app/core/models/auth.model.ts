export interface RegisterRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: string[];
  phone_number?: string;
  department_id?: string;
}

export interface AuthenticationRequest {
  email?: string;
  password?: string;
}

export interface AuthenticationResponse {
  token?: string;
}
