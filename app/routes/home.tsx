import type { Route } from "./+types/home";
import { Link } from "react-router";
import { cases } from "../data/cases";

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

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((projectCase) => (
            <article
              key={projectCase.id}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/75"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {projectCase.category}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                {projectCase.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {projectCase.summary}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {projectCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/case/${projectCase.id}`}
                  className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 hover:text-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-amber-300"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
