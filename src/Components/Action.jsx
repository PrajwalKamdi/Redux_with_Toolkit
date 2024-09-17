import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, displayActions } from "../Store";
function Action() {
  const dispatch = useDispatch();
  const handle1 = () => {
    dispatch(counterActions.Increment());
  };
  const handle2 = () => {
    dispatch(counterActions.Decrement());
  };
  const inputValue = useRef();
  const handle3 = () => {
    dispatch(counterActions.add(inputValue.current.value));
  };
  const handle4=()=>{
    dispatch(counterActions.Substarct(inputValue.current.value))
  }
  const handle5=()=>{
    dispatch(displayActions.setDisplay())
  }
  return (
    <>
      <div className=" flex justify-between gap-5">
        <button
          className="px-5 py-2 text-center border text-2xl rounded-sm shadow-lg  hover:border-blue-300 bg-blue-500"
          onClick={handle1}
        >
          Increment
        </button>

        <button
          className="px-5 py-2 text-center border text-2xl rounded-sm shadow-lg hover:border-blue-300 bg-green-500"
          onClick={handle2}
        >
          Decrement
        </button>

        <button
          className="px-5 py-2 text-center border text-2xl rounded-sm shadow-lg hover:border-blue-300 bg-yellow-500
        "
        onClick={handle5}
        >
          Display
        </button>
      </div>
      <div className=" flex justify-between mt-5 ">
        <input
          type="number"
          ref={inputValue}
          className="border outline-none p-2 pl-5 shadow-md hover:border-blue-300"
          placeholder="Enter number"
        />
        <button
          className="border hover:border-blue-300 py-2 px-5 shadow-md bg-green-500 text-xl
        "
          onClick={handle3}
        >
          Add
        </button>
        <button className="border hover:border-blue-300 py-2 px-5 shadow-md text-xl bg-red-500"
        onClick={handle4}>
          Subtract
        </button>
      </div>
    </>
  );
}

export default Action;
