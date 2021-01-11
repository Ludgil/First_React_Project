import React, { useState } from "react";

export default function ToDoForm({ toDo, setToDo }) {
  const [newToDo, setNewToDo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const addToDo = [newToDo, ...toDo];
    setToDo(addToDo);
    setNewToDo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>Add To do</label>
        <input
          type='text'
          name='todo'
          id='todo'
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button type='submit'>Add to do</button>
      </form>
    </div>
  );
}
