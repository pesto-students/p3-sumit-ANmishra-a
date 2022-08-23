import React from "react";
const ToDo = ({ todo, handleToggle }) => {
  return (
    <div
      key={todo.id}
      onClick={() => {
        handleToggle(todo.id);
      }}
      className={todo.complete ? "Completed" : ""}
    >
      {todo.task}
    </div>
  );
};
export default ToDo;
