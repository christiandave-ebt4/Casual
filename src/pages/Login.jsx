import { useState } from "react";
import PinInput from "../components/PinInput";
import { useNavigate } from "react-router-dom";

function Login() {
  const length = 6;

  const [pin, setPin] = useState(Array(length).fill(""));
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const CORRECT_PIN = "031125"; // your passcode

  const handleLogin = () => {
    const enteredPin = pin.join("");

    if (enteredPin === CORRECT_PIN) {
      setError("");
      sessionStorage.setItem("authed", "true");
      navigate("/home", { replace: true }); // go to next page
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

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full  text-white py-2 rounded-lg hover:bg-burgundy-200 transition-colors font-semibold bg-rose-950"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;