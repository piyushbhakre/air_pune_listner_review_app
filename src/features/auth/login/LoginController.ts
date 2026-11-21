"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { LoginCredentials, LoginErrors } from "./LoginModel";

export function validateLogin({ email, password }: LoginCredentials): LoginErrors {
  const errors: LoginErrors = {};
  if (!email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email";
  if (!password) errors.password = "Password is required";
  return errors;
}

export function useLogin() {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const setField = (field: keyof LoginCredentials) => (value: string) =>
    setCredentials((c) => ({ ...c, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateLogin(credentials);
    setErrors(found);
    setSuccessMessage("");
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    // TODO: replace with real login call once backend exists
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setSuccessMessage("Logged in (mock)");
  };

  return { credentials, errors, loading, successMessage, setField, handleSubmit };
}
