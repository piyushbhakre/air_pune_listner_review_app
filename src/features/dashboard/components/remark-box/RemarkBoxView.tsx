import type { RemarkBoxProps } from "./RemarkBoxModel";

export default function RemarkBoxView({
  id,
  value,
  onChange,
  placeholder = "Write your listener remarks about audio quality, presentation, or content...",
  maxLength = 250,
}: RemarkBoxProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Remark
        </label>
        <span className="text-xs text-slate-400">
          {value.length}/{maxLength}
        </span>
      </div>
      <textarea
        id={id}
        rows={2}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15 sm:text-sm"
        style={{ color: "#0f172a" }}
      />
    </div>
  );
}
