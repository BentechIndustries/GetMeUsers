const bars = [20, 28, 24, 36, 32, 48, 44, 58, 62, 74, 86, 100];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -right-3 -top-3 h-full w-full border border-ink/15" aria-hidden />
      <div className="relative border border-ink/15 bg-[#faf7f0] p-7">
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow text-ink-soft">Weekly signups</p>
            <p className="mt-2 font-display text-5xl leading-none text-ink">847</p>
          </div>
          <span className="mt-1 inline-flex items-center gap-1 border border-accent/30 px-2 py-1 text-xs font-medium text-accent-ink">
            +62% wk
          </span>
        </div>

        <div className="mt-7 flex h-28 items-end gap-1.5" aria-hidden>
          {bars.map((h, i) => {
            const isPeak = i >= bars.length - 3;
            return (
              <div
                key={i}
                className={isPeak ? "flex-1 bg-accent" : "flex-1 bg-ink"}
                style={{ height: `${h}%`, opacity: isPeak ? 1 : 0.18 + (i / (bars.length - 1)) * 0.5 }}
              />
            );
          })}
        </div>
        <div className="mt-3 flex justify-between text-[11px] text-ink-soft">
          <span>Launch</span>
          <span>Week 12</span>
        </div>
      </div>
    </div>
  );
}
