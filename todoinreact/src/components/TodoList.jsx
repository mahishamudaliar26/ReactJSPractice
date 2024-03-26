import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  const [newToDo, setNewToDo] = useState("");
  let addNewToDo = () => {
    setTodos((prevToDos) => {
      return [...prevToDos, { task: newToDo, id: uuidv4() }];
    });
    setNewToDo("");
  };
  let updateTaskValue = (event) => {
    setNewToDo(event.target.value);
  };
  return (
    <>
      <h1>
        <b>ToDo List</b>
      </h1>
      <input
        placeholder="Enter Task"
        value={newToDo}
        onChange={updateTaskValue}
      />
      <button onClick={addNewToDo}>Add Task</button>
      <hr></hr>
      <h3>
        <b>Task ToDos</b>
        <ul>
          {todos.map((todo) => {
            return <li>{todo.task}</li>;
          })}
        </ul>
      </h3>
    </>
  );
}

export default TodoList;
