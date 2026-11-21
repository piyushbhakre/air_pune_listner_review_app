"use client";

import type { AuthPasswordFieldProps } from "./AuthPasswordFieldModel";
import { useAuthPasswordField } from "./AuthPasswordFieldController";

export default function AuthPasswordFieldView({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  autoComplete = "current-password",
}: AuthPasswordFieldProps) {
  const { visible, toggleVisible } = useAuthPasswordField();

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          className={`h-12 w-full rounded-lg border bg-white pl-3 pr-16 text-base text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500/40 ${
            error ? "border-red-500" : "border-zinc-300 focus:border-blue-500"
          }`}
        />
        <button
          type="button"
          onClick={toggleVisible}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-0 px-3 text-sm font-medium text-blue-600"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
