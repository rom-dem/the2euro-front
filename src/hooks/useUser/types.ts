export interface UserCredentials {
  password: string;
  email: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  username: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
  registerUser: (
    userRegisterCredentials: UserRegisterCredentials
  ) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload {
  id: string;
  email: string;
}
