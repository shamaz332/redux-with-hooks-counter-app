import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Counter : {counter}</h1>

      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCounter(counter + Number(value));
        }}
      >
        Increment By number
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
