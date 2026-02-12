import TopNav from "../layouts/TopNav";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-50 via-burgundy-100 to-burgundy-200 font-elegant text-burgundy-800">
      <TopNav />

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-white/70 p-10 shadow-xl ring-1 ring-burgundy-200/60">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-burgundy-200/50 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-burgundy-300/40 blur-3xl" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-burgundy-100 px-4 py-1 text-sm font-semibold text-burgundy-700">
                For my favorite person
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                A little corner of the internet, made just for us.
              </h1>
              <p className="mt-4 text-lg text-burgundy-600">
                A place to keep our memories, notes, and tiny moments that mean
                everything.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/read"
                  className="rounded-full bg-rose-950 px-6 py-3 text-white shadow-lg shadow-burgundy-300/40 transition hover:bg-burgundy-800"
                >
                  Read a letter
                </Link>
                <Link
                  to="/memories"
                  className="rounded-full border border-burgundy-300 bg-white/70 px-6 py-3 text-burgundy-700 transition hover:bg-white"
                >
                  Our memories
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-[2.5rem] bg-burgundy-100 shadow-2xl" />
              <div className="absolute inset-3 rounded-[2rem] bg-white/80 ring-1 ring-burgundy-200" />
              <div className="absolute inset-6 rounded-[1.5rem] bg-gradient-to-br from-burgundy-50 to-burgundy-200" />
              <div className="absolute inset-0 flex items-center justify-center text-7xl">
                💌
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Notes",
              text: "Short love letters and small reminders.",
              to: "/read",
            },
            {
              title: "Memories",
              text: "Our favorite days, saved forever.",
              to: "/memories",
            },
            {
              title: "Promises",
              text: "Little promises that keep us close.",
              to: "/read",
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="rounded-2xl bg-white/70 p-6 shadow-md ring-1 ring-burgundy-200/60 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-burgundy-600">{card.text}</p>
            </Link>
          ))}
        </section>

        {/* Quote */}
        <section className="mt-12 rounded-3xl bg-rose-950 p-8 text-center text-white shadow-xl">
          <p className="text-lg md:text-xl">
            “Every day with you is my favorite day.”
          </p>
          <p className="mt-2 text-sm text-burgundy-100">— always yours</p>
        </section>
      </main>
    </div>
  );
}