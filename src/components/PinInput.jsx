import { useRef } from "react";

function PinInput({ length = 4, pin, setPin }) {
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

  return (
    <div className="flex gap-3">
      {pin.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          value={digit}
          maxLength={1}
          inputMode="numeric"
          onChange={(e) => handleChange(e, index)}
          className="w-12 h-12 text-center text-xl border rounded-lg"
        />
      ))}
    </div>
  );
}

export default PinInput;