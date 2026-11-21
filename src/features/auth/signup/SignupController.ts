"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { SignupErrors, SignupForm } from "./SignupModel";

export function validateSignup({ name, email, password, confirmPassword }: SignupForm): SignupErrors {
  const errors: SignupErrors = {};
  if (!name.trim()) errors.name = "Name is required";
  if (!email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email";
  if (!password) errors.password = "Password is required";
  else if (password.length < 8) errors.password = "Password must be at least 8 characters";
  if (confirmPassword !== password) errors.confirmPassword = "Passwords do not match";
  return errors;
}

export function useSignup() {
  const [form, setForm] = useState<SignupForm>({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const setField = (field: keyof SignupForm) => (value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateSignup(form);
    setErrors(found);
    setSuccessMessage("");
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    // TODO: replace with real signup call once backend exists
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setSuccessMessage("Account created (mock)");
  };

  return { form, errors, loading, successMessage, setField, handleSubmit };
}
