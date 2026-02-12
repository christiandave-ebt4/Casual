import { useRef } from "react";

function PinInput({ length = 6, pin, setPin }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (pin[index]) {
        // If current input has a value, clear it
        const newPin = [...pin];
        newPin[index] = "";
        setPin(newPin);
      } else if (index > 0) {
        // If current input is empty, move to previous and clear it
        inputsRef.current[index - 1].focus();
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
      }
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-3">
        {pin.map((digit, index) => (
          <div
            key={index}
            className="relative w-14 h-14 flex items-center justify-center"
          >
            {/* Heart SVG */}
            <svg
              viewBox="0 0 48 48"
              className="absolute inset-0 w-full h-full"
              fill={digit ? "#b94d63" : "#e3bfc9"}
              stroke="#8b1e3f"
              strokeWidth="2"
            >
              <path d="M24 42s-13.5-8.7-17.5-15.2C2.2 22.2 2 17.2 6.2 13.7c3.6-3.1 9.2-2.6 12.5 1.1C21.2 17.2 24 21 24 21s2.8-3.8 5.3-6.2c3.3-3.7 8.9-4.2 12.5-1.1 4.2 3.5 4 8.5-.3 13.1C37.5 33.3 24 42 24 42z" />
            </svg>
            {/* Transparent input */}
            <input
              ref={(el) => (inputsRef.current[index] = el)}
              value={digit}
              maxLength={1}
              inputMode="numeric"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="relative z-10 w-10 h-10 bg-transparent text-center text-2xl font-bold text-burgundy-700 focus:outline-none"
              style={{
                caretColor: "transparent",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PinInput;