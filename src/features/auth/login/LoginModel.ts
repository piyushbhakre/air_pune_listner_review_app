export interface LoginCredentials {
  email: string;
  password: string;
}

export type LoginErrors = Partial<Record<keyof LoginCredentials, string>>;

export interface LoginState {
  credentials: LoginCredentials;
  errors: LoginErrors;
  loading: boolean;
  successMessage: string;
}
