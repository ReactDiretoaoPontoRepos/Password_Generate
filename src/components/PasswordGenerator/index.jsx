import { useState, useEffect } from "react";
import CopyPasswordButton from "../CopyPasswordButton";
import PasswordBox from "../PasswordBox/index";
import "./styles.scss";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [digitsLength, setDigitsPasswordLength] = useState(0);
  const [symbolsLength, setSynbolsPasswordLength] = useState(0);

  useEffect(() => {
    const draftPassword = [];

    draftPassword.push(...Array.from({ length: digitsLength }, randomDigit));
    draftPassword.push(...Array.from({ length: symbolsLength }, randomSymbol));
    draftPassword.push(...Array.from({ length: passwordLength }, randomLetter));

    setPassword(
      draftPassword
        .slice(0, passwordLength)
        .sort(() => Math.random() - 0.5)
        .join("")
    );
  }, [passwordLength, digitsLength, symbolsLength]);

  const randomLetter = () => {
    const letters = "abcdefghijklmnopqrstuvxwyz";

    const letter = letters[Math.floor(Math.random() * letters.length)];

    return Math.random() >= 0.5 ? letter : letter.toLocaleUpperCase();
  };

  const randomDigit = () => {
    const digits = "0123456789";

    return digits[Math.floor(Math.random() * digits.length)];
  };
  const randomSymbol = () => {
    const symbols = "!@#$%ˆ&*()-+{}|?]><[";

    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  return (
    <>
      <div className="slider">
        <label htmlFor="password-length">Tamanho</label>
        <input
          id="password-length"
          type="range"
          min={4}
          max={64}
          value={passwordLength}
          onChange={({ target }) => setPasswordLength(parseInt(target.value))}
        />
        <span>{passwordLength}</span>
      </div>

      <div className="slider">
        <label htmlFor="password-length">Digitos</label>
        <input
          id="digits-length"
          type="range"
          min={0}
          max={10}
          value={digitsLength}
          onChange={({ target }) =>
            setDigitsPasswordLength(parseInt(target.value))
          }
        />
        <span>{digitsLength}</span>
      </div>

      <div className="slider">
        <label htmlFor="digits-length">Simbolos</label>
        <input
          id="digit-length"
          type="range"
          min={0}
          max={10}
          value={symbolsLength}
          onChange={({ target }) =>
            setSynbolsPasswordLength(parseInt(target.value))
          }
        />
        <span>{symbolsLength}</span>
      </div>

      <PasswordBox senha={password} />

      <CopyPasswordButton senha={password} />
    </>
  );
};

export default PasswordGenerator;
