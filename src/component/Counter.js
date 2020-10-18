import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT_BY_VALUE", payload: Number(value) });
        }}
      >
        Increment By number
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
