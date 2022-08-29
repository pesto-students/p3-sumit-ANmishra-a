import React from "react";
import { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handelChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handelChange}
        placeholder="Add Task.."
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
};
export default ToDoForm;
