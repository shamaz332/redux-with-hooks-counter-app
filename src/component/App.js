import React from "react";
import "../App.css";
import { CounterDisplay } from "../counterDisplay";
import { Counter } from "./Counter";
function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <Counter />
    </div>
  );
}

export default App;
