import TopNav from "../layouts/TopNav";
import { useEffect, useRef, useState } from "react";

export default function Read() {
  const audioRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Play audio when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  }, []);

  const letterContent = [
    {
      title: "To My Love",
      content: `Hi baby,

Time flies so fast, right? It's already our second Valentine's Day together, and our anniversary is coming up soon. I just want to say, happy Valentine's Day, my baby.

I'm so happy that I get to celebrate this special day with you, and I'm truly grateful that we met back in November. Our journey hasn't been easy this past year, but even when things were hard, we still chose each other. We chose to stay, to grow, and to become stronger every day — not just for our relationship, but for our dreams too.

I can't fully put into words what I feel. All I can say is that I'm very thankful that God brought you into my life.`,
    },
    {
      title: "To My Love",
      content: `I hope this lasts forever. I promise to do my best to keep you, to love you the right way, and to become someone worthy of the love you give me — someone you will always choose.

I will always be your safe place, the one who listens, the one who understands you — even during the times when it's hard for you to understand yourself.

I love you so much, and I can't wait for all the memories we'll create together. Every moment with you is a blessing, and I'm grateful for your patience, your kindness, and your unwavering love.

Thank you for choosing me, every single day.`,
    },
  ];

  const handleNextPage = () => {
    if (currentPage < letterContent.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-50 via-burgundy-100 to-burgundy-200 font-elegant text-burgundy-800">
      <TopNav />

      {/* Background audio */}
      <audio
        ref={audioRef}
        src="/background-song.mp3"
        loop
        preload="auto"
      />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="relative overflow-hidden rounded-3xl bg-white/70 p-10 shadow-xl ring-1 ring-burgundy-200/60">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-burgundy-200/50 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-burgundy-300/40 blur-3xl" />

          <div className="relative z-10">
            <p className="inline-flex items-center rounded-full bg-burgundy-100 px-4 py-1 text-sm font-semibold text-burgundy-700">
              A letter for you
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_2fr]">
              {/* Book cover */}
              <div className="relative rounded-2xl bg-rose-950 p-6 text-white shadow-2xl">
                <div className="absolute left-0 top-0 h-full w-2 bg-burgundy-900/50" />
                <div className="text-xs uppercase tracking-[0.2em] text-burgundy-100">
                  Chapter 1
                </div>
                <h1 className="mt-2 text-3xl font-bold">Our Letters</h1>
                <p className="mt-3 text-burgundy-100">
                  A place for the words I never want to forget.
                </p>
                <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-burgundy-100">
                  I love you
                </div>
              </div>

              {/* Notebook pages */}
              <div className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-burgundy-200/60">
                {/* Lined paper + margin */}
                <div className="rounded-xl bg-[linear-gradient(transparent_27px,rgba(164,63,86,0.18)_28px)] bg-[length:100%_28px] px-4 py-4 h-96 overflow-y-auto">
                  <div className="mb-3 flex items-center justify-between border-b border-burgundy-200 pb-2">
                    <h2 className="text-2xl font-semibold">
                      {letterContent[currentPage - 1].title}
                    </h2>
                    <span className="text-xs uppercase tracking-widest text-burgundy-400">
                      page {currentPage}
                    </span>
                  </div>

                  <div className="space-y-4 leading-7 text-burgundy-700 whitespace-pre-line">
                    <p>{letterContent[currentPage - 1].content}</p>
                    {currentPage === letterContent.length && (
                      <p className="pt-2 font-semibold">— Yours</p>
                    )}
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="rounded-full bg-burgundy-200 px-4 py-2 text-burgundy-700 disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-burgundy-300"
                  >
                    ← Previous
                  </button>

                  <span className="text-sm text-burgundy-600">
                    {currentPage} / {letterContent.length}
                  </span>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === letterContent.length}
                    className="rounded-full bg-rose-950 px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-burgundy-800"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}