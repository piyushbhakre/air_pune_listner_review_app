"use client";

import Link from "next/link";
import AuthCardView from "../components/auth-card/AuthCardView";
import AuthTextFieldView from "../components/auth-text-field/AuthTextFieldView";
import AuthPasswordFieldView from "../components/auth-password-field/AuthPasswordFieldView";
import AuthButtonView from "../components/auth-button/AuthButtonView";
import { useSignup } from "./SignupController";

export default function SignupView() {
  const { form, errors, loading, successMessage, setField, handleSubmit } = useSignup();

  return (
    <AuthCardView
      title="Create account"
      subtitle="Sign up to get started"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-blue-700 hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <AuthTextFieldView
          id="signup-name"
          label="Name"
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={setField("name")}
          error={errors.name}
        />
        <AuthTextFieldView
          id="signup-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={setField("email")}
          error={errors.email}
        />
        <AuthTextFieldView
          id="signup-number"
          label="Number"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          autoComplete="tel"
          placeholder="10-digit mobile number"
          value={form.number}
          onChange={setField("number")}
          error={errors.number}
        />
        <AuthPasswordFieldView
          id="signup-password"
          label="Password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={form.password}
          onChange={setField("password")}
          error={errors.password}
        />
        <AuthPasswordFieldView
          id="signup-confirm-password"
          label="Confirm password"
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={form.confirmPassword}
          onChange={setField("confirmPassword")}
          error={errors.confirmPassword}
        />
        {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
        <AuthButtonView label="Sign up" loading={loading} />
      </form>
    </AuthCardView>
  );
}
