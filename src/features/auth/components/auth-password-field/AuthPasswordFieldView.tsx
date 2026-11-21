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
    <div className="flex w-full flex-col gap-1">
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
          className={`h-11 [@media(min-height:760px)]:h-12 w-full rounded-xl border bg-white/90 pl-4 pr-16 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 ${
            error ? "border-red-500" : "border-slate-300 focus:border-blue-600"
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
