import type { AuthCardProps } from "./AuthCardModel";

export default function AuthCardView({ title, subtitle, children, footer }: AuthCardProps) {
  return (
    <div
      className="w-full max-w-md rounded-2xl p-5 shadow-lg sm:p-8"
      style={{ backgroundColor: "#ffffff", color: "#111111" }}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
      {footer && <div className="mt-6 text-center text-sm text-zinc-600">{footer}</div>}
    </div>
  );
}
