import type { AuthTextFieldProps } from "./AuthTextFieldModel";

export default function AuthTextFieldView({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  autoComplete,
}: AuthTextFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`h-12 w-full rounded-lg border bg-white px-3 text-base text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500/40 ${
          error ? "border-red-500" : "border-zinc-300 focus:border-blue-500"
        }`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
