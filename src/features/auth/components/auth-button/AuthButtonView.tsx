import type { AuthButtonProps } from "./AuthButtonModel";

export default function AuthButtonView({
  label,
  type = "submit",
  loading = false,
  disabled = false,
  onClick,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="h-12 w-full rounded-lg bg-blue-600 px-4 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Please wait..." : label}
    </button>
  );
}
