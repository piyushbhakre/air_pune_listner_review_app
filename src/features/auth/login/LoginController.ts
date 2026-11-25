"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { LoginCredentials, LoginErrors } from "./LoginModel";

export function validateLogin({ email, password }: LoginCredentials): LoginErrors {
  const errors: LoginErrors = {};
  if (!email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email";
  if (!password) errors.password = "Password is required";
  return errors;
}

export function useLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const setField = (field: keyof LoginCredentials) => (value: string) =>
    setCredentials((c) => ({ ...c, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    setLoading(true);
    // Temporary direct redirect to dashboard until backend auth is connected
    router.push("/dashboard");
  };

  return { credentials, errors, loading, successMessage, setField, handleSubmit };
}
