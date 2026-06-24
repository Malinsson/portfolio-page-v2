import { Link } from "react-router";
import { cases } from "../data/cases";

export default function Cases() {
    return (
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
    );
}