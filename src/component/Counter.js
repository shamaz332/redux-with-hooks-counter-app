import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, increment_by_value } from "./redux/actions/counterActions";

export const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  // const counter = useSelector((state) => {
  //   return state.counter;
  // });



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
          dispatch(increment_by_value(Number(value)));
        }}
      >
        Increment By number
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};
