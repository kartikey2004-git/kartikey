import { gear, gearMeta } from "@/app/data/index.js";
import PathnameDisplay from "@/components/PathnameDisplay";
import { CATEGORY_META, getToolMeta } from "./toolMeta";

function ToolIcon({ name }) {
  const meta = getToolMeta(name);
  const Icon = meta.icon;

  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xs border border-border/70 bg-background text-foreground/60 transition-all duration-200 group-hover:scale-105 group-hover:border-border group-hover:text-foreground"
      aria-hidden="true"
    >
      {Icon ? (
        <Icon className="h-4 w-4" />
      ) : (
        <span className="font-mono text-xs font-semibold tracking-wide">
          {meta.mono}
        </span>
      )}
    </div>
  );
}

function ToolItem({ name }) {
  const meta = getToolMeta(name);

  return (
    <div
      className="group flex items-center gap-3 rounded-xs border border-border/60 bg-foreground/[0.015] px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-foreground/[0.035]"
      tabIndex={0}
    >
      <ToolIcon name={name} />
      <div className="min-w-0">
        <div className="truncate text-sm font-medium text-foreground/90 transition-colors duration-200 group-hover:text-foreground">
          {name}
        </div>
        {meta.purpose && (
          <div className="truncate text-xs text-muted-foreground">
            {meta.purpose}
          </div>
        )}
      </div>
    </div>
  );
}

function CategorySection({ section, index }) {
  const meta = CATEGORY_META[section.category] ?? {};

  return (
    <section>
      <div className="mb-4">
        <div className="mb-1.5 flex items-baseline gap-2.5">
          <span className="font-mono text-xs text-muted-foreground/50">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
            {section.category}
          </h2>
        </div>
        {meta.description && (
          <p className="max-w-md text-sm text-muted-foreground">
            {meta.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <ToolItem key={item} name={item} />
        ))}
      </div>
    </section>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/30 py-2 last:border-none">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
        {label}
      </span>
      <span className="text-right font-mono text-sm text-foreground/85">
        {value}
      </span>
    </div>
  );
}

function SystemPanel({ label, title, subtitle, rows }) {
  return (
    <div className="rounded-xs border border-border/70 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
              {label}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div>
        {rows.map((row) => (
          <SpecRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </div>
  );
}

export default function GearClient() {
  const workstationRows = [
    { label: "Processor", value: gear.system.processor },
    { label: "Graphics", value: gear.system.graphics },
    { label: "Memory", value: gear.system.ram },
    { label: "Storage", value: gear.system.storage },
  ];

  const mobileRows = [
    { label: "OS", value: gear.mobile.ui },
    { label: "Chipset", value: gear.mobile.processor },
    { label: "Memory", value: gear.mobile.ram },
    { label: "Storage", value: gear.mobile.storage },
    { label: "Battery", value: gear.mobile.battery },
    { label: "Camera", value: gear.mobile.camera },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <PathnameDisplay />

          <h1 className="heading-lg">
            {gearMeta.headline}
          </h1>

          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            {gearMeta.subtext}
          </p>
        </div>

        {/* Tool categories */}
        <div className="space-y-12 mb-16">
          {gear.tools.map((section, index) => (
            <div key={section.category}>
              {index > 0 && (
                <div className="mb-12 border-t border-border/60" />
              )}
              <CategorySection section={section} index={index} />
            </div>
          ))}
        </div>

        {/* System */}
        <div className="mb-16 border-t border-border/60 pt-10">
          <div className="mb-6 flex items-baseline gap-2.5">
            <span className="font-mono text-xs text-muted-foreground/50">
              ~
            </span>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
              My setup
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SystemPanel
              label="01 / Workstation"
              title="Daily driver"
              subtitle="Windows"
              rows={workstationRows}
            />
            <SystemPanel
              label="02 / Device"
              title={gear.mobile.name}
              subtitle="Mobile"
              rows={mobileRows}
            />
          </div>
        </div>

        {/* Footer quote */}
        <div className="border-t border-border/60 pt-8">
          <blockquote className="text-sm italic text-muted-foreground">
            {gearMeta.quote}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
