import type { AuthCardProps } from "./AuthCardModel";

export default function AuthCardView({ title, subtitle, children, footer }: AuthCardProps) {
  return (
    <div
      className="relative max-h-full w-full max-w-sm overflow-y-auto rounded-2xl border border-white/70 shadow-2xl shadow-blue-900/25 backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ backgroundColor: "rgba(255,255,255,0.88)", color: "#0f172a" }}
    >
      {/* Tricolour strip */}
      <div className="flex h-1.5 w-full">
        <div className="flex-1" style={{ backgroundColor: "#ff9933" }} />
        <div className="flex-1" style={{ backgroundColor: "#ffffff" }} />
        <div className="flex-1" style={{ backgroundColor: "#138808" }} />
      </div>

      <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
        <div className="mb-3 text-center sm:mb-4">
          <div
            className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-lg shadow-blue-600/30"
            style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: "#0b2a6f" }}>
            {title}
          </h1>
          {subtitle && <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">{subtitle}</p>}
        </div>

        {children}

        {footer && (
          <div className="mt-3 border-t border-slate-200 pt-3 text-center text-sm text-slate-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
