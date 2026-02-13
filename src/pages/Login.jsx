import { useState } from "react";
import PinInput from "../components/PinInput";
import { useNavigate } from "react-router-dom";

function Login() {
  const length = 6;

  const [pin, setPin] = useState(Array(length).fill(""));
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const navigate = useNavigate();

  const CORRECT_PIN = "031125"; // your passcode

  const handleLogin = () => {
    if (isLoggingIn) return;

    const enteredPin = pin.join("");

    if (enteredPin === CORRECT_PIN) {
      setError("");
      setIsLoggingIn(true);
      setTimeout(() => {
        sessionStorage.setItem("authed", "true");
        navigate("/home", { replace: true }); // go to next page
      }, 800);
    } else {
      setError("Wrong PIN");
      setPin(Array(length).fill("")); // clear inputs
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 items-center">
        <h2 className="text-lg font-semibold">Enter Passcode</h2>

        <PinInput length={length} pin={pin} setPin={setPin} />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={isLoggingIn}
          className="w-full text-white py-2 rounded-lg transition-colors font-semibold bg-rose-950 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoggingIn ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
}

export default Login;