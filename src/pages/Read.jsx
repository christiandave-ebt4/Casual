import TopNav from "../layouts/TopNav";
import { useEffect, useRef, useState } from "react";

export default function Read() {
  const audioRef = useRef(null);
  const [currentLetter, setCurrentLetter] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  }, []);

  const letterContent = [
    {
      id: "letter-1",
      title: "To My Love",
      content: `Hi baby,

Time flies so fast, right? It’s already our second Valentine’s Day together, and our anniversary is coming up soon. I just want to say, happy Valentine’s Day, my baby.

I’m so happy that I get to celebrate this special day with you, and I’m truly grateful that we met back in November. Our journey hasn’t been easy this past year, but even when things were hard, we still chose each other. We chose to stay, to grow, and to become stronger every day, not just for our relationship, but for our dreams too.

I can’t fully put into words what I feel. All I can say is that I’m very thankful that God brought you into my life. I hope this lasts forever. I promise to do my best to keep you, to love you the right way, and to become someone worthy of the love you give me, someone you will always choose.

I will always be your safe place, the one who listens, the one who understands you, even during the times when it’s hard for you to understand yourself.

I love you so much.

— Yours`,
    },
    {
      id: "letter-2",
      title: "Appreaciation for my Lovey",
      content: `Baby,

I just want you to read this letter as a small appreciation for everything you’ve done for me and for us. Sometimes I don’t say it enough, but I truly see the effort you put into our relationship. I see how you try your best to make us happy, how you stay patient even when things get difficult, and how you always find ways to make us stronger.

I really appreciate everything you do, even the little things that might seem small. The way you listen to me, the way you support me, the way you choose to understand instead of giving up, all of those mean so much to me. You don’t always realize how much your actions affect me, but they make me feel loved, secure, and valued.

This past year hasn’t always been easy, but what I admire most is how we never stopped choosing each other. Even when we face misunderstandings or challenges, we still try. We still talk. We still fix things. And that’s something I’m very proud of — us choosing to grow instead of walking away.

I hope we continue building the future we always talk about. The happy, peaceful, and successful life we dream of together. I don’t just hope we last — I want us to keep becoming better for each other, to keep improving, and to keep protecting what we have.

Thank you for loving me the way you do. Thank you for believing in us. I’m grateful every day that I get to call you mine, and I’m looking forward to all the Valentine’s Days, anniversaries, and milestones we’ll celebrate in the future.

I love you, always.

— Yours`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-50 via-burgundy-100 to-burgundy-200 font-elegant text-burgundy-800">
      <TopNav />

      <audio ref={audioRef} src="/audio/understand.mp3" loop preload="auto" />

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

                <h1 className="mt-2 text-3xl font-bold">Our Letters</h1>
                <p className="mt-3 text-burgundy-100">
                  A place for the words I never want to forget.
                </p>

                <div className="mt-6 grid gap-3">
                  <button
                    onClick={() => setCurrentLetter(0)}
                    className="w-full rounded-xl bg-white/10 p-3 text-left text-sm text-burgundy-100 transition hover:bg-white/20"
                  >
                    I love you
                  </button>
                  <button
                    onClick={() => setCurrentLetter(1)}
                    className="w-full rounded-xl bg-white/10 p-3 text-left text-sm text-burgundy-100 transition hover:bg-white/20"
                  >
                    Another letter
                  </button>
                </div>
              </div>

              {/* Notebook pages */}
              <div className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-burgundy-200/60">
                <div className="rounded-xl bg-[linear-gradient(transparent_27px,rgba(164,63,86,0.18)_28px)] bg-[length:100%_28px] px-4 py-6 min-h-[520px]">
                  <div className="mb-3 flex items-center justify-between border-b border-burgundy-200 pb-2">
                    <h2 className="text-2xl font-semibold">
                      {letterContent[currentLetter].title}
                    </h2>
                    <span className="text-xs uppercase tracking-widest text-burgundy-400">
                      letter {currentLetter + 1}
                    </span>
                  </div>

                  <div className="space-y-4 leading-7 text-burgundy-700 whitespace-pre-line">
                    <p>{letterContent[currentLetter].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}