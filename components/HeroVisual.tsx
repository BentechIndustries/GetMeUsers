export function HeroVisual() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-900">Weekly signups</span>
        <span className="font-semibold text-indigo-600">+847</span>
      </div>

      <div className="mt-5 flex h-32 items-end gap-1">
        {[20, 28, 24, 36, 32, 48, 44, 58, 62, 72, 84, 96].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-indigo-600"
            style={{ height: `${h}%`, opacity: 0.25 + (i / 11) * 0.75 }}
          />
        ))}
      </div>
    </div>
  );
}
