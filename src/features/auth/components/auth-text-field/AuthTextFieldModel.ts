export interface AuthTextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  inputMode?: "text" | "email" | "tel" | "numeric";
  maxLength?: number;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
}
