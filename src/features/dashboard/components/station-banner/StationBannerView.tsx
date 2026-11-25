import type { StationBannerProps } from "./StationBannerModel";

export default function StationBannerView({ station, isSubmitted }: StationBannerProps) {
  return (
    <section
      className="w-full rounded-2xl border border-blue-100 p-4 shadow-sm sm:p-5"
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            On Air
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {station.frequency}
          </span>
        </div>

        {isSubmitted && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            ✓ Review Submitted
          </span>
        )}
      </div>

      <h1
        className="mt-2.5 text-lg font-bold tracking-tight sm:text-xl"
        style={{ color: "#0b2a6f" }}
      >
        {station.name}
      </h1>
      <p className="mt-0.5 text-xs font-medium text-blue-600 sm:text-sm">{station.tagline}</p>
    </section>
  );
}
