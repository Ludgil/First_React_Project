import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const [toDo, setToDo] = useState([]);
  const [taskNumber, setTaskNumber] = useState(0);
  const handleDelete = (index) => {
    const removeTodo = toDo.filter((item, key) => key !== index);
    setToDo(removeTodo);
  };

  useEffect(() => {
    setTaskNumber(toDo.length);
  }, [toDo]);

  return (
    <section className='section'>
      <h1>To Do List</h1>
      <h3>{taskNumber} Task to do</h3>
      <ToDoForm toDo={toDo} setToDo={setToDo} />
      <ToDoItem toDo={toDo} handleDelete={handleDelete} />
    </section>
  );
}
