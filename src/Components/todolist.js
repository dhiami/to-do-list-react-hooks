import React from "react";
import Todo from "./todo";

export default function Todolist({ todoList ,deleteHandler, doneHandler}) {
  return (
    <div className="todoListContainer">
      <h2>todo list </h2>
      {todoList.map((el) => (
        <Todo  task={el}   deleteHandler={deleteHandler}  doneHandler={doneHandler} />
      ))}
    </div>
  );
}