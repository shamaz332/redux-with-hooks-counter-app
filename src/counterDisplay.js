import React from "react";
import { useSelector } from "react-redux";

export const CounterDisplay = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <div>
      <h1>Counter : {counter}</h1>
    </div>
  );
};
