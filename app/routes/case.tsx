import { Link } from "react-router";
import { getCaseById } from "../data/cases";
import type { Route } from "./+types/case";

export async function loader({ params }: Route.LoaderArgs) {
  const projectCase = getCaseById(params.id);

  if (!projectCase) {
    throw new Response("Case not found", { status: 404 });
  }

  return { projectCase };
}

export default function Case({
  loaderData,
}: Route.ComponentProps) {
  const { projectCase } = loaderData;

  return (
    <main className="min-h-screen px-6 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <Link
          to="/"
          className="text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-700 dark:hover:text-white"
        >
          Back to cases
        </Link>

        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
            {projectCase.category}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {projectCase.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {projectCase.description}
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Challenge
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              {projectCase.challenge}
            </p>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Solution
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              {projectCase.solution}
            </p>
          </article>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Outcome
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              {projectCase.outcome}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {projectCase.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}