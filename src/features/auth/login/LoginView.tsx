"use client";

import Link from "next/link";
import AuthCardView from "../components/auth-card/AuthCardView";
import AuthTextFieldView from "../components/auth-text-field/AuthTextFieldView";
import AuthPasswordFieldView from "../components/auth-password-field/AuthPasswordFieldView";
import AuthButtonView from "../components/auth-button/AuthButtonView";
import { useLogin } from "./LoginController";

export default function LoginView() {
  const { credentials, errors, loading, successMessage, setField, handleSubmit } = useLogin();

  return (
    <AuthCardView
      title="Welcome back"
      subtitle="Log in to continue"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-blue-600">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <AuthTextFieldView
          id="login-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={credentials.email}
          onChange={setField("email")}
          error={errors.email}
        />
        <AuthPasswordFieldView
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={setField("password")}
          error={errors.password}
        />
        {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
        <AuthButtonView label="Log in" loading={loading} />
      </form>
    </AuthCardView>
  );
}
