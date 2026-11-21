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
      className="h-11 [@media(min-height:760px)]:h-12 w-full rounded-xl px-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      style={{ backgroundImage: "linear-gradient(90deg, #1d4ed8, #0ea5e9)" }}
    >
      {loading ? "Please wait..." : label}
    </button>
  );
}
