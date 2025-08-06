/*
import { useState } from "react";
import "./App.css";

function Password({ password, setPassword }) {
  return (
    <div id="password">
      <p>{password}</p>
    </div>
  );
}
function Range({ min, max }) {
  const [rangeValue, setRangeValue] = useState(0);

  const changeVol = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div id="range">
      <label>Character Length</label>
      <p>{rangeValue}</p>
      <input
        type="range"
        id="charLength"
        name="charLength"
        min={min}
        max={max}
        value={rangeValue}
        onChange={changeVol}
      />
    </div>
  );
}
function Checkboxes() {
  return <div id="checkboxes"></div>;
}
function Strength() {
  return <div id="strength"></div>;
}
function Generate({ password, setPassword }) {
  return <div id="generate"></div>;
}
function App() {
  const [password, setPassword] = useState("P4$5WOrD");
  return (
    <div className="app">
      <h1>Password Generator</h1>
      <Password password={password} setPassword={setPassword} />
      <form id="password-form">
        <Range min="0" max="10" />
        <Checkboxes />
        <Strength />
        <Generate password={password} setPassword={setPassword} />
      </form>
    </div>
  );
}

export default App;*/
