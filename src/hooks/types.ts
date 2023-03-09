export interface UserCredentials {
  password: string;
  email: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload {
  id: string;
  email: string;
}
