import TopNav from "../layouts/TopNav";
import { Link } from "react-router-dom";
import { useState } from "react";

const memories = [
  {
    id: "first-date",
    title: "Our first date",
    note: "The day everything felt easy.",
    date: "Nov 30, 2024",
    imageSrc: "/memories/1st date.jpg",
  },
  {
    id: "cookies",
    title: "Baking together",
    note: "Peaceful day for us.",
    date: "Nov 15, 2025",
    imageSrc: "/memories/cookies.jpg",
  },
  {
    id: "graduation",
    title: "Best day of my life!",
    note: "You saw me.",
    date: "Jun 7, 2025",
    imageSrc: "/memories/Graduation day.jpg",
  },
  {
    id: "roblox",
    title: "Roblox Together",
    note: "Spending some time with you in a Game",
    date: "Sept 29, 2025",
    imageSrc: "/memories/roblox.jpeg",
  },
  {
    id: "married",
    title: "We're Married!",
    note: "A day to remember",
    date: "Aug 1, 2025",
    imageSrc: "/memories/we're married.jpg",
  },
  {
    id: "kny",
    title: "You watched my fav anime",
    note: "The little things that you do.",
    date: "Sept 1, 2025",
    imageSrc: "/memories/kny.jpg",
  },
];

function MemoryCard({ memory }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer"
      style={{
        perspective: "1000px",
        width: "100%",
        height: "320px",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front - Image side */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="w-full h-full rounded-2xl shadow-md ring-1 ring-burgundy-200/60 bg-white/70 overflow-hidden flex flex-col"
        >
          <div className="w-full h-48 bg-burgundy-50">
            <img
              src={memory.imageSrc}
              alt={memory.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-burgundy-500">
                {memory.date}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{memory.title}</h3>
            </div>
            <p className="text-burgundy-600 text-sm">{memory.note}</p>
          </div>
        </div>

        {/* Back - Message side */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="w-full h-full rounded-2xl shadow-md ring-1 ring-burgundy-200/60 bg-rose-950 p-6 text-white flex flex-col items-center justify-center absolute top-0 left-0"
        >
          <p className="text-center text-base font-semibold leading-relaxed">
            {memory.note}
          </p>
          <p className="mt-4 text-xs text-burgundy-100">Click to flip back</p>
        </div>
      </div>
    </div>
  );
}

export default function Memories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-50 via-burgundy-100 to-burgundy-200 font-elegant text-burgundy-800">
      <TopNav />

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-white/70 p-10 shadow-xl ring-1 ring-burgundy-200/60">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-burgundy-200/50 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-burgundy-300/40 blur-3xl" />

          <div className="relative z-10 grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-burgundy-100 px-4 py-1 text-sm font-semibold text-burgundy-700">
                Our favorite moments
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Memories we keep, always.
              </h1>
              <p className="mt-4 text-lg text-burgundy-600">
                A growing collection of photos and little notes from our days.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/read"
                  className="rounded-full bg-rose-950 px-6 py-3 text-white shadow-lg shadow-burgundy-300/40 transition hover:bg-burgundy-800"
                >
                  Read a letter
                </Link>
                <Link
                  to="/home"
                  className="rounded-full border border-burgundy-300 bg-white/70 px-6 py-3 text-burgundy-700 transition hover:bg-white"
                >
                  Back to home
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-[2.5rem] bg-burgundy-100 shadow-2xl" />
              <div className="absolute inset-3 rounded-[2rem] bg-white/80 ring-1 ring-burgundy-200" />
              <div className="absolute inset-6 rounded-[1.5rem] bg-gradient-to-br from-burgundy-50 to-burgundy-200" />
              <div className="absolute inset-0 flex items-center justify-center text-7xl">
                📷
              </div>
            </div>
          </div>
        </section>

        {/* Memory gallery */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </section>

        {/* Quote */}
        <section className="mt-12 rounded-3xl bg-rose-950 p-8 text-center text-white shadow-xl">
          <p className="text-lg md:text-xl">
            "We didn't realize we were making memories, we just knew we were
            having fun."
          </p>
          <p className="mt-2 text-sm text-burgundy-100">— together</p>
        </section>
      </main>
    </div>
  );
}