export interface UsernameAvailableResponse {
  available: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignUpResponse {
  username: string;
}
