import { useNavigate } from "react-router-dom";

export default function Valentine() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-burgundy-50 via-burgundy-100 to-burgundy-200 font-elegant text-burgundy-800">
      <div className="rounded-3xl bg-white/80 p-10 shadow-xl ring-1 ring-burgundy-200/60 text-center">
        <div className="text-5xl">💖</div>
        <h1 className="mt-4 text-3xl font-bold">
          Will you be my valentine tomorrow?
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 rounded-full bg-rose-950 px-8 py-3 text-white shadow-lg shadow-burgundy-300/40 transition hover:bg-burgundy-800"
        >
          Yes
        </button>
      </div>
    </div>
  );
}