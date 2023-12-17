export interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignUpResponse {
  username: string;
}

export interface SignedInResponse {
  authenticated: boolean;
  username: string;
}
