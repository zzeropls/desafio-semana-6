import { useState } from "react";
import "./App.css";

function App() {
  const initialPassword = () => {
    return {
      password: "P4$5W0rD",
      length: 0,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      strength: "",
      visualIndicator: [false, false, false, false],
    };
  };

  const [passwordInfo, setPassword] = useState(initialPassword());

  const changeLength = (e) => {
    setPassword({ ...passwordInfo, length: e.target.value });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(passwordInfo.password);
  };
  const handleGenerate = (e) => {
    e.preventDefault();
    generatePassword();
  };

  function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolChars = "!@#$%^&*()_=-+~";

    const { length, uppercase, lowercase, numbers, symbols } = passwordInfo;
    const score = [uppercase, lowercase, numbers, symbols].filter(
      Boolean
    ).length;

    let strength, active;
    if (length >= 12 && score == 4) {
      strength = "STRONG";
      active = 4;
    } else if (length >= 8 && score >= 3) {
      strength = "MEDIUM";
      active = 3;
    } else if (length >= 8 && score >= 2) {
      strength = "MEDIUM";
      active = 2;
    } else {
      strength = "WEAK";
      active = 1;
      console.log(length, score);
    }

    let visualIndicator = [false, false, false, false];
    for (let i = 0; i < active; i++) visualIndicator[i] = true;

    let allowedChars = "";
    let password = "";

    if (lowercase) allowedChars += lowercaseChars;
    if (uppercase) allowedChars += uppercaseChars;
    if (numbers) allowedChars += numbersChars;
    if (symbols) allowedChars += symbolChars;

    if (length === 0 || allowedChars.length === 0) {
      return "P4$5W0rD";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }

    setPassword({
      ...passwordInfo,
      password: password,
      strength: strength,
      visualIndicator: visualIndicator,
    });
  }

  return (
    <div className="app">
      <h1>Password Generator</h1>

      <div id="password">
        <p>{passwordInfo.password}</p>
        <i onClick={copyToClipboard}>⧉</i>
      </div>

      <form id="password-form" onSubmit={handleGenerate}>
        <div id="range">
          <label>Character Length</label>
          <p>{passwordInfo.length}</p>
          <input
            type="range"
            id="charLength"
            name="charLength"
            min="0"
            max="20"
            value={passwordInfo.length}
            onChange={changeLength}
          />
        </div>

        <div id="checkboxes">
          <div id="checkbox-container">
            <input
              type="checkbox"
              onChange={() =>
                setPassword({
                  ...passwordInfo,
                  uppercase: !passwordInfo.uppercase,
                })
              }
            />
            <label>Include Uppercase Letters</label>
          </div>
          <div id="checkbox-container">
            <input
              type="checkbox"
              onChange={() =>
                setPassword({
                  ...passwordInfo,
                  lowercase: !passwordInfo.lowercase,
                })
              }
            />
            <label>Include Lowercase Letters</label>
          </div>
          <div id="checkbox-container">
            <input
              type="checkbox"
              onChange={() =>
                setPassword({
                  ...passwordInfo,
                  numbers: !passwordInfo.numbers,
                })
              }
            />
            <label>Include Numbers</label>
          </div>
          <div id="checkbox-container">
            <input
              type="checkbox"
              onChange={() =>
                setPassword({
                  ...passwordInfo,
                  symbols: !passwordInfo.symbols,
                })
              }
            />
            <label>Include Symbols</label>
          </div>
        </div>

        <div id="strength">
          <p>STRENGTH</p>
          <div id="calculated-strength">
            <p>{passwordInfo.strength}</p>
            <div id="visual-indicator">
              <input
                type="checkbox"
                checked={passwordInfo.visualIndicator[0]}
                className={passwordInfo.strength}
              />
              <input
                type="checkbox"
                checked={passwordInfo.visualIndicator[1]}
                className={passwordInfo.strength}
              />
              <input
                type="checkbox"
                checked={passwordInfo.visualIndicator[2]}
                className={passwordInfo.strength}
              />
              <input
                type="checkbox"
                checked={passwordInfo.visualIndicator[3]}
                className={passwordInfo.strength}
              />
            </div>
          </div>
        </div>

        <div id="generate">
          <button>GENERATE ➜</button>
        </div>
      </form>
    </div>
  );
}

export default App;
