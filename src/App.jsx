import { useState } from "react";
import "./App.css";

const initialPassword = () => {
  return {
    password: "P4$5W0rD",
    length: 0,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    strength: "PLACEHOLDER",
  };
};
function App() {
  const [passwordInfo, setPassword] = useState(initialPassword());

  const changeLength = (e) => {
    setPassword({ ...passwordInfo, length: e.target.value });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(passwordInfo.password);
  };
  return (
    <div className="app">
      <h1>Password Generator</h1>

      <div id="password">
        <p>{passwordInfo.password}</p>
        <i onClick={copyToClipboard}>⧉</i>
      </div>

      <form id="password-form">
        <div id="range">
          <label>Character Length</label>
          <p>{passwordInfo.length}</p>
          <input
            type="range"
            id="charLength"
            name="charLength"
            min="0"
            max="10"
            value={passwordInfo.length}
            onChange={changeLength}
          />
        </div>

        <div id="checkboxes">
          <div id="checkbox-container">
            <input type="checkbox" />
            <label>Include Uppercase Letters</label>
          </div>
          <div id="checkbox-container">
            <input type="checkbox" />
            <label>Include Lowercase Letters</label>
          </div>
          <div id="checkbox-container">
            <input type="checkbox" />
            <label>Include Numbers</label>
          </div>
          <div id="checkbox-container">
            <input type="checkbox" />
            <label>Include Sybols</label>
          </div>
        </div>

        <div id="strength">
          <p>STRENGTH</p>
          <div id="calculated-strength">
            <p>{passwordInfo.strength}</p>
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
