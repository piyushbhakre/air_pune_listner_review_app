export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SignupErrors = Partial<Record<keyof SignupForm, string>>;

export interface SignupState {
  form: SignupForm;
  errors: SignupErrors;
  loading: boolean;
  successMessage: string;
}
