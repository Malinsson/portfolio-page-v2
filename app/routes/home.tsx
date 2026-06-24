import type { Route } from "./+types/home";
import Cases from "./../components/cases";
import Stack from "./../components/stack";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio cases" },
    { name: "description", content: "Selected project cases with details and outcomes." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] px-6 py-12 text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] dark:text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
            Selected work
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Project cases with a clear path from overview to detail.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
            Each card below links to its own case page so visitors can scan the work quickly and open the full story when something catches their eye.
          </p>
        </header>
        <Stack />
        <Cases />

      </div>
    </main>
  );
}
