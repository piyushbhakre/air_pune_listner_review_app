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
  inputMode,
  maxLength,
}: AuthTextFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`h-11 [@media(min-height:760px)]:h-12 w-full rounded-xl border bg-white/90 px-4 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/20 ${
          error ? "border-red-500" : "border-slate-300 focus:border-blue-600"
        }`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
