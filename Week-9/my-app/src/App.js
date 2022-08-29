import "./App.css";
import React, { useState } from "react";
import data from "./data.json";
// components
import Header from "./Header.js";
import ToDoList from "./ToDoList.js";
import ToDoForm from "./ToDoForm.js";
function App(props) {
  const [toDoList, setToDoList] = useState(data);

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy.push({ id: toDoList.length + 1, task: userInput, complete: false });
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
